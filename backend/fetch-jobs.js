import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

const API_URL = 'https://remotive.com/api/remote-jobs';

const res = await fetch(API_URL);
const data = await res.json();

const jobs = data.jobs.map(job => ({
  id: `remotive-${job.id}`,
  title: job.title,
  company: job.company_name,
  location: job.candidate_required_location || 'Worldwide',
  description: job.description,
  applyUrl: job.url,
  postedAt: job.publication_date,
  expiresAt: null
}));

const outputPath = path.resolve('../frontend/jobs.json');
fs.writeFileSync(outputPath, JSON.stringify(jobs, null, 2));
console.log(`Saved ${jobs.length} jobs`);
