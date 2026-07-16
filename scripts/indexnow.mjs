const BASE = 'https://phlease.com';
const KEY = '5f9569304f564fb5a9fa83a2fd71f726';

const urls = [
  `${BASE}/`,
  `${BASE}/lease-agreement`,
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
