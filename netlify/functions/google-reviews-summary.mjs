/**
 * Google rating + review count for the homepage trust indicators.
 *
 *   GET /.netlify/functions/google-reviews-summary  ->  { "rating": 5, "reviewCount": 58 }
 *
 * Required Netlify environment variables (Site configuration > Environment variables):
 *   GOOGLE_PLACES_API_KEY  Google Cloud API key with "Places API (New)" enabled
 *                          (restrict the key to that API).
 *   GOOGLE_PLACE_ID        Place ID of the Powell Arbor Solutions Google Business Profile.
 *
 * Uses Places API (New) Place Details with a field mask limited to rating and
 * userRatingCount. The API key never reaches the browser. Successful responses are
 * cached on Netlify's CDN so Google is only called a few times per day. On any
 * failure the function returns an error status and the homepage keeps its static
 * fallback values ("5.0" / "58+").
 */

const PLACES_ENDPOINT = 'https://places.googleapis.com/v1/places/';
const FIELD_MASK = 'rating,userRatingCount';

const CACHE_OK = {
  'Cache-Control': 'public, max-age=3600',
  'Netlify-CDN-Cache-Control': 'public, durable, s-maxage=21600, stale-while-revalidate=86400',
};
const CACHE_UPSTREAM_ERROR = {
  'Cache-Control': 'no-store',
  'Netlify-CDN-Cache-Control': 'public, s-maxage=300',
};
const NO_STORE = { 'Cache-Control': 'no-store' };

function json(status, body, cacheHeaders) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      ...cacheHeaders,
    },
  });
}

export default async (req) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return json(405, { error: 'method_not_allowed' }, NO_STORE);
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = (process.env.GOOGLE_PLACE_ID || '').trim().replace(/^places\//, '');
  if (!apiKey || !placeId) {
    return json(503, { error: 'not_configured' }, NO_STORE);
  }

  try {
    const res = await fetch(PLACES_ENDPOINT + encodeURIComponent(placeId), {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': FIELD_MASK,
      },
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      console.error('google-reviews-summary: Places API responded', res.status);
      return json(502, { error: 'upstream_error' }, CACHE_UPSTREAM_ERROR);
    }

    const data = await res.json();
    const rating = Number(data.rating);
    const reviewCount = Number(data.userRatingCount);

    if (!Number.isFinite(rating) || rating < 1 || rating > 5 ||
        !Number.isInteger(reviewCount) || reviewCount < 1) {
      console.error('google-reviews-summary: unexpected Places API payload');
      return json(502, { error: 'invalid_upstream_data' }, CACHE_UPSTREAM_ERROR);
    }

    return json(200, { rating, reviewCount }, CACHE_OK);
  } catch (err) {
    console.error('google-reviews-summary: request failed', err && err.name);
    return json(502, { error: 'upstream_unreachable' }, CACHE_UPSTREAM_ERROR);
  }
};
