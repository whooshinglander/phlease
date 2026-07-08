const BASE = 'https://phlease.com';
const KEY = 'indexnow';

const urls = [
  `${BASE}/`,
  `${BASE}/tenancy-agreement-singapore`,
  `${BASE}/renew`,
  `${BASE}/room-rental-agreement`,
  `${BASE}/tenancy-agreement-template`,
  `${BASE}/faq`,
  `${BASE}/privacy`,
  `${BASE}/terms`,
];

console.log(`IndexNow: submitting ${urls.length} URLs for ${BASE}`);

try {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ host: 'phlease.com', key: KEY, urlList: urls }),
  });
  console.log(`IndexNow: HTTP ${res.status}`);
} catch(e) {
  console.log(`IndexNow: failed (${e.message}) — continuing`);
}
