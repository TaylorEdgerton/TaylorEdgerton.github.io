import { mkdir, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import process from 'node:process';
import puppeteer from 'puppeteer';

const resumeHtmlPath = resolve('dist/resume/index.html');
const resumeUrl = pathToFileURL(resumeHtmlPath).href;
const outputPath = resolve('dist/assets/pdf/Taylor_Edgerton_Resume.pdf');

async function generateResume() {
  try {
    await stat(resumeHtmlPath);
  } catch {
    throw new Error('The built resume page is missing. Run `npm run build:site` before generating the PDF.');
  }

  await mkdir(resolve('dist/assets/pdf'), { recursive: true });

  const browser = await puppeteer.launch({ headless: true });

  try {
    const page = await browser.newPage();
    const response = await page.goto(resumeUrl, { waitUntil: 'networkidle0' });

    if (response && !response.ok()) {
      throw new Error(`Unable to load the built resume page: ${response.status()} ${response.statusText()}.`);
    }

    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
    });

    const output = await stat(outputPath);
    if (output.size === 0) throw new Error('Puppeteer created an empty resume PDF.');

    console.log(`Generated ${outputPath} (${output.size} bytes).`);
  } finally {
    await browser.close();
  }
}

generateResume().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
