import { mkdir, stat, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

import {
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from '../src/data/profile.ts';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = resolve(projectRoot, 'generated');
const outputPath = resolve(outputDirectory, 'linkedin-content.md');

const linkedinProjects = projects.filter(
  (project) => project.includeOnLinkedIn,
);

function requireText(value, label) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`Cannot generate LinkedIn content: ${label} is empty.`);
  }

  return value.trim();
}

function paragraphs(values, label) {
  if (!Array.isArray(values) || values.length === 0) {
    throw new Error(`Cannot generate LinkedIn content: ${label} has no content.`);
  }

  return values
    .map((value, index) => requireText(value, `${label}[${index}]`))
    .join('\n\n');
}

function bullets(values, label) {
  if (!Array.isArray(values) || values.length === 0) {
    throw new Error(`Cannot generate LinkedIn content: ${label} has no content.`);
  }

  return values
    .map((value, index) => `- ${requireText(value, `${label}[${index}]`)}`)
    .join('\n');
}

function unique(values) {
  return [...new Set(values)];
}

function renderExperience(entry, index) {
  const role = requireText(entry.role, `experience[${index}].role`);
  const organisation = requireText(
    entry.organisation,
    `experience[${index}].organisation`,
  );
  const date = requireText(entry.date, `experience[${index}].date`);

  return [
    `### ${role}`,
    '',
    `**${organisation}**  `,
    date,
    '',
    bullets(entry.resumeBullets, `experience[${index}].resumeBullets`),
    '',
    `**Skills:** ${unique(entry.tags).join(' · ')}`,
  ].join('\n');
}

function renderProject(project, index) {
  const title = requireText(project.title, `projects[${index}].title`);
  const label = requireText(project.label, `projects[${index}].label`);
  const link = project.href ? `\n\n**Link:** ${project.href}` : '';

  return [
    `### ${title}`,
    '',
    `**Category:** ${label}`,
    '',
    requireText(project.resumeDescription, `projects[${index}].resumeDescription`),
    '',
    `**Skills:** ${unique(project.tags).join(' · ')}${link}`,
  ].join('\n');
}

function renderProjects(projectEntries) {
  if (projectEntries.length === 0) {
    return '_No projects are currently selected for LinkedIn._';
  }

  return projectEntries
    .map((project, index) => renderProject(project, index))
    .join('\n\n---\n\n');
}

function renderEducation(entry, index) {
  const qualification = requireText(
    entry.qualification,
    `education[${index}].qualification`,
  );
  const institution = requireText(
    entry.institution,
    `education[${index}].institution`,
  );
  const date = requireText(entry.date, `education[${index}].date`);

  return [
    `### ${qualification}`,
    '',
    `**${institution}**  `,
    date,
    '',
    requireText(entry.resumeDescription, `education[${index}].resumeDescription`),
    '',
    `**Skills:** ${unique(entry.tags).join(' · ')}`,
  ].join('\n');
}

function renderSkillGroups() {
  return skillGroups
    .map((group, index) => {
      const label = requireText(group.label, `skillGroups[${index}].label`);
      const skills = unique(group.skills);

      if (skills.length === 0) {
        throw new Error(
          `Cannot generate LinkedIn content: skillGroups[${index}].skills is empty.`,
        );
      }

      return `- **${label}:** ${skills.join(' · ')}`;
    })
    .join('\n');
}

function generateMarkdown() {
  const headline = `${requireText(profile.currentRole, 'profile.currentRole')} | ${requireText(profile.focus, 'profile.focus')}`;

  return [
    '# LinkedIn profile content',
    '',
    '> Generated from `src/data/profile.ts`. Edit the source data and regenerate this file instead of editing it directly. LinkedIn employment months remain a manual profile setting.',
    '',
    '## Headline',
    '',
    headline,
    '',
    '## About',
    '',
    paragraphs(profile.about, 'profile.about'),
    '',
    '## Experience',
    '',
    experience.map(renderExperience).join('\n\n---\n\n'),
    '',
    '## Projects',
    '',
    renderProjects(linkedinProjects),
    '',
    '## Education',
    '',
    education.map(renderEducation).join('\n\n---\n\n'),
    '',
    '## Skills',
    '',
    renderSkillGroups(),
    '',
    '## Contact and featured links',
    '',
    `- **Website:** ${requireText(profile.website, 'profile.website')}`,
    `- **GitHub:** ${requireText(profile.github, 'profile.github')}`,
    `- **Email:** ${requireText(profile.email, 'profile.email')}`,
    '',
  ].join('\n');
}

async function generateLinkedInContent() {
  const linkedinContent = generateMarkdown();

  await mkdir(outputDirectory, { recursive: true });
  await writeFile(outputPath, linkedinContent, 'utf8');

  const output = await stat(outputPath);
  if (output.size === 0) {
    throw new Error('Generated an empty LinkedIn content file.');
  }

  console.log(`Generated ${outputPath} (${output.size} bytes).`);
}

generateLinkedInContent().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
