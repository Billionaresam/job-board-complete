const params = new URLSearchParams(window.location.search);
const id = params.get('id');

fetch('jobs.json')
  .then(res => res.json())
  .then(jobs => {
    const job = jobs.find(j => j.id === id);
    if (!job) return;

    document.getElementById('job').innerHTML = `
      <h1>${job.title}</h1>
      <p>${job.company} — ${job.location}</p>
      <div>${job.description}</div>
      <a class="button apply" href="${job.applyUrl}" target="_blank">Apply Now</a>
    `;
  });
