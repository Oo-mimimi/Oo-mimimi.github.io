import { readdir, readFile, writeFile, stat } from "fs/promises";
import { resolve } from "path";
import yaml from "js-yaml";

interface ContentData {
  works: any[];
  diaries: any[];
  drawings: any[];
}

async function generateContent() {
  const contentPath = resolve(process.cwd(), "content");
  const outputPath = resolve(process.cwd(), "client", "src", "data", "content.json");
  const data: ContentData = {
    works: [],
    diaries: [],
    drawings: [],
  };

  // Load works
  try {
    const worksDir = resolve(contentPath, "works");
    const workFiles = await readdir(worksDir);
    for (const file of workFiles) {
      if (file.endsWith(".yaml") || file.endsWith(".yml")) {
        const filePath = resolve(worksDir, file);
        const fileStat = await stat(filePath);
        if (fileStat.isFile()) {
          const content = await readFile(filePath, "utf-8");
          const work = yaml.load(content) as any;
          const slug = file.replace(/\.(yaml|yml)$/, "");
          work.slug = slug;
          // 驗證圖片 URL
          if (work.imageUrl && !work.imageUrl.startsWith("/attached_assets/")) {
            console.warn(`警告: 作品 "${work.title}" 的圖片 URL "${work.imageUrl}" 應該以 "/attached_assets/" 開頭`);
          }
          data.works.push(work);
        }
      }
    }
    // Sort by id descending
    data.works.sort((a, b) => parseInt(b.id) - parseInt(a.id));
  } catch (error) {
    console.warn("Failed to load works:", error);
  }

  // Load diaries
  try {
    const diariesDir = resolve(contentPath, "diaries");
    const diaryFiles = await readdir(diariesDir);
    for (const file of diaryFiles) {
      if (file.endsWith(".yaml") || file.endsWith(".yml")) {
        const filePath = resolve(diariesDir, file);
        const fileStat = await stat(filePath);
        if (fileStat.isFile()) {
          const content = await readFile(filePath, "utf-8");
          const diary = yaml.load(content) as any;
          const slug = file.replace(/\.(yaml|yml)$/, "");
          diary.slug = slug;
          data.diaries.push(diary);
        }
      }
    }
    // Sort by date descending
    data.diaries.sort((a, b) => {
      try {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      } catch {
        return 0;
      }
    });
  } catch (error) {
    console.warn("Failed to load diaries:", error);
  }

  // Load drawings
  try {
    const drawingsFile = resolve(contentPath, "drawings", "drawings.yaml");
    const content = await readFile(drawingsFile, "utf-8");
    const drawingsData = yaml.load(content) as { drawings: any[] };
    if (drawingsData.drawings) {
      // 驗證每個圖畫的 URL
      for (const drawing of drawingsData.drawings) {
        if (drawing.url && !drawing.url.startsWith("/attached_assets/")) {
          console.warn(`警告: 圖畫 "${drawing.title || drawing.id}" 的 URL "${drawing.url}" 應該以 "/attached_assets/" 開頭`);
        }
      }
      data.drawings = drawingsData.drawings;
    }
  } catch (error) {
    console.warn("Failed to load drawings:", error);
  }

  // Write to JSON file
  await writeFile(outputPath, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Content generated successfully: ${outputPath}`);
  console.log(`  - Works: ${data.works.length}`);
  console.log(`  - Diaries: ${data.diaries.length}`);
  console.log(`  - Drawings: ${data.drawings.length}`);
}

generateContent().catch(console.error);

