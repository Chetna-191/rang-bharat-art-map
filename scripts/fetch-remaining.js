// fetch-remaining.js
import fs from 'fs';
import path from 'path';
import https from 'https';

const REMAINING = [
  { id: 'ellora', wiki: 'Ellora_Caves' },
  { id: 'pattachitra', wiki: 'Pattachitra' },
  { id: 'phad', wiki: 'Phad_painting' },
  { id: 'gond', wiki: 'Gond_art' },
  { id: 'cheriyal', wiki: 'Cheriyal_scroll_painting' },
  { id: 'kerala_mural', wiki: 'Kerala_mural_painting' },
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'RangBharatArtMapCollege/1.0 (Student assignment; mail@example.org)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'RangBharatArtMapCollege/1.0 (Student assignment; mail@example.org)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => file.close(() => resolve(dest)));
      } else {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
    }).on('error', reject);
  });
}

async function run() {
  for (const item of REMAINING) {
    console.log(`Querying for ${item.id}...`);
    try {
      const data = await fetchJson(`https://en.wikipedia.org/w/api.php?action=query&titles=${item.wiki}&prop=pageimages&pithumbsize=800&format=json`);
      const page = Object.values(data.query.pages)[0];
      if (page && page.thumbnail && page.thumbnail.source) {
        const dest = path.join('images', `${item.id}-1.jpg`);
        await sleep(1500);
        await downloadImage(page.thumbnail.source, dest);
        console.log(`Saved ${dest} (${fs.statSync(dest).size} bytes)`);
      } else {
        console.log(`No thumbnail found for ${item.wiki}`);
      }
    } catch (e) {
      console.warn(`Error on ${item.id}:`, e.message);
    }
    await sleep(2000);
  }
}

run();
