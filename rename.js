import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'src/content/courses');
const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.json'));

for (const file of files) {
  const filePath = path.join(contentDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
  if (data.imageUrl) {
    data.image = data.imageUrl;
    delete data.imageUrl;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  }
}

console.log("Renamed imageUrl to image in all JSON files!");
