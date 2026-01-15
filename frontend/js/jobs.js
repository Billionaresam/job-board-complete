fetch('jobs.json')
  .then(res => res.json())
  .then(jobs => {
    const container = document.getElementById('jobs');
    jobs.forEach(job => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h2>${job.title}</h2>
        <p>${job.company} — ${job.location}</p>
        <a class="button" href="job.html?id=${job.id}">View Job</a>
        <a class="button whatsapp" target="_blank"
          href="https://wa.me/?text=${encodeURIComponent(job.title + ' ' + location.origin + '/job.html?id=' + job.id)}">
          Share WhatsApp
        </a>
      `;
      container.appendChild(card);
    });
  });
