// fetch-images.js
import fs from 'fs';
import path from 'path';
import https from 'https';

const TOPICS = [
  { id: 'bhimbetka', wiki: 'Bhimbetka_rock_shelters' },
  { id: 'ajanta', wiki: 'Ajanta_Caves' },
  { id: 'ellora', wiki: 'Ellora_Caves' },
  { id: 'madhubani', wiki: 'Madhubani_art' },
  { id: 'warli', wiki: 'Warli_painting' },
  { id: 'pattachitra', wiki: 'Pattachitra' },
  { id: 'kalamkari', wiki: 'Kalamkari' },
  { id: 'tanjore', wiki: 'Thanjavur_painting' },
  { id: 'mysore', wiki: 'Mysore_painting' },
  { id: 'pichwai', wiki: 'Pichhwai' },
  { id: 'phad', wiki: 'Phad_painting' },
  { id: 'mughal', wiki: 'Mughal_painting' },
  { id: 'kangra', wiki: 'Kangra_painting' },
  { id: 'kalighat', wiki: 'Kalighat_painting' },
  { id: 'gond', wiki: 'Gond_art' },
  { id: 'cheriyal', wiki: 'Cheriyal_scroll_painting' },
  { id: 'thangka', wiki: 'Thangka' },
  { id: 'kerala_mural', wiki: 'Kerala_mural_painting' },
];

if (!fs.existsSync('images')) {
  fs.mkdirSync('images', { recursive: true });
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'RangBharatArtMap/1.0 (Student assignment; art history)' } }, (res) => {
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
    https.get(url, { headers: { 'User-Agent': 'RangBharatArtMap/1.0 (Student assignment; art history)' } }, (res) => {
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
  console.log('Fetching Wikimedia Commons images for 18 art traditions...');
  const titles = TOPICS.map(t => t.wiki).join('|');
  const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${titles}&prop=pageimages|images&pithumbsize=800&format=json`;

  try {
    const data = await fetchJson(apiUrl);
    const pages = Object.values(data.query.pages);

    for (const topic of TOPICS) {
      const page = pages.find(p => p.title.replace(/ /g, '_').toLowerCase() === topic.wiki.toLowerCase());
      if (page && page.thumbnail && page.thumbnail.source) {
        const dest = path.join('images', `${topic.id}-1.jpg`);
        try {
          await downloadImage(page.thumbnail.source, dest);
          console.log(`Saved ${dest} (${fs.statSync(dest).size} bytes)`);
        } catch (e) {
          console.warn(`Could not download ${topic.id}-1:`, e.message);
        }
      }
    }
    console.log('Initial batch complete.');
  } catch (err) {
    console.error('Error fetching images:', err);
  }
}

run();
