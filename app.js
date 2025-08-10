(() => {
  const $ = sel => document.querySelector(sel);
  const $$ = sel => Array.from(document.querySelectorAll(sel));

  const state = {
    query: ""
  };

  function init(){
    // Footer year + contact
    $('#year').textContent = new Date().getFullYear();
    const c = $('#contactEmail');
    c.textContent = HUB.contactEmail;
    c.href = `mailto:${HUB.contactEmail}`;

    // Announcement
    if(HUB.announcement?.enabled && HUB.announcement.text){
      const el = $('#announcement');
      el.textContent = HUB.announcement.text;
      el.classList.remove('hidden');
    }

    // Nav tabs
    $$('.tab').forEach(btn => btn.addEventListener('click', () => activateTab(btn.dataset.tab)));
    // Home deep links
    $$('#home [data-link]').forEach(a => a.addEventListener('click', (e) => {
      e.preventDefault();
      activateTab(e.currentTarget.dataset.link);
    }));

    renderQuickLinks();
    renderOffices();
    renderContacts();
    renderScheduling();
    renderSops();
    renderForms();
    renderCoverage();
    renderTraining();
    renderFaqs();

    // Search
    $('#globalSearch').addEventListener('input', (e)=>{
      state.query = (e.target.value || '').toLowerCase();
      filterContent();
    });
  }

  function activateTab(id){
    $$('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === id));
    $$('.panel').forEach(p => p.classList.toggle('active', p.id === id));
    $('#' + id).focus();
  }

  function renderQuickLinks(){
    const box = $('#quickLinks'); box.innerHTML = '';
    HUB.quickLinks.forEach(link => {
      const div = document.createElement('div');
      div.className = 'item row';
      div.innerHTML = `<a target="_blank" href="${link.url}">${escapeHtml(link.label)}</a>`;
      box.appendChild(div);
    });
  }

  function renderOffices(){
    const box = $('#officesList'); box.innerHTML = '';
    HUB.offices.forEach(o => {
      const card = document.createElement('div');
      card.className = 'card item';
      card.innerHTML = `
        <h3>${escapeHtml(o.name)} <span class="badge">${escapeHtml(o.county)}</span></h3>
        <div class="kv">
          <span>Address</span><span>${escapeHtml(o.address)} <button class="copy" data-copy="${escapeHtml(o.address)}">Copy</button></span>
          <span>Email</span><span><a href="mailto:${escapeHtml(o.email)}">${escapeHtml(o.email)}</a></span>
          <span>Hours</span><span>${escapeHtml(o.hours || '—')}</span>
          <span>Notes</span><span>${escapeHtml(o.notes || '—')}</span>
        </div>
      `;
      box.appendChild(card);
    });
    wireCopy();
  }

  function renderContacts(){
    const box = $('#contactsList'); box.innerHTML = '';
    HUB.contacts.forEach(c => {
      const card = document.createElement('div');
      card.className = 'card item';
      card.innerHTML = `
        <h3>${escapeHtml(c.name)} <span class="badge">${escapeHtml(c.role)}</span></h3>
        <div class="kv">
          <span>Email</span><span>${c.email ? `<a href="mailto:${escapeHtml(c.email)}">${escapeHtml(c.email)}</a>` : '—'}</span>
          <span>Phone</span><span>${escapeHtml(c.phone || '—')}</span>
        </div>
      `;
      box.appendChild(card);
    });
  }

  function renderScheduling(){
    const box = $('#schedulingList'); box.innerHTML = '';
    HUB.offices.forEach(o => {
      const card = document.createElement('div');
      card.className = 'card item';
      const links = [];
      if(o.calendly.installation) links.push(`<a target="_blank" href="${o.calendly.installation}">Installation</a>`);
      if(o.calendly.maintenance) links.push(`<a target="_blank" href="${o.calendly.maintenance}">Maintenance</a>`);
      if(o.calendly.weekly_download) links.push(`<a target="_blank" href="${o.calendly.weekly_download}">Weekly Download</a>`);
      if(o.calendly.payment) links.push(`<a target="_blank" href="${o.calendly.payment}">Make a Payment</a>`);
      card.innerHTML = `
        <h3>${escapeHtml(o.name)}</h3>
        <div class="row">${links.length ? links.join(' · ') : '<span class="muted">No links yet.</span>'}</div>
      `;
      box.appendChild(card);
    });
  }

  function renderSops(){
    const box = $('#sopsList'); box.innerHTML = '';
    HUB.sops.forEach(s => {
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `<a target="_blank" href="${s.url}">${escapeHtml(s.title)}</a><div class="muted">${escapeHtml(s.desc || '')}</div>`;
      box.appendChild(div);
    });
  }

  function renderForms(){
    const box = $('#formsList'); box.innerHTML = '';
    HUB.forms.forEach(s => {
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `<a target="_blank" href="${s.url}">${escapeHtml(s.title)}</a><div class="muted">${escapeHtml(s.desc || '')}</div>`;
      box.appendChild(div);
    });
  }

  function renderCoverage(){
    const box = $('#coverageNow'); box.innerHTML = '';
    HUB.coverage.forEach(c => {
      const off = HUB.offices.find(o => o.id === c.office)?.name || c.office;
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `<strong>${escapeHtml(c.day)}</strong> — ${escapeHtml(off)} — ${escapeHtml(c.staff)} <span class="muted">${escapeHtml(c.notes || '')}</span>`;
      box.appendChild(div);
    });
    const frame = document.getElementById('calendarFrame');
    frame.src = HUB.calendarEmbed || '';
  }

  function renderTraining(){
    const box = $('#trainingList'); box.innerHTML = '';
    HUB.training.forEach(t => {
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `<a target="_blank" href="${t.url}">${escapeHtml(t.title)}</a> <span class="badge">${escapeHtml(t.owner || '')}</span><div class="muted">${escapeHtml(t.desc || '')}</div>`;
      box.appendChild(div);
    });
  }

  function renderFaqs(){
    const box = $('#faqsList'); box.innerHTML = '';
    HUB.faqs.forEach(f => {
      const details = document.createElement('details');
      details.className = 'item';
      const sum = document.createElement('summary');
      sum.textContent = f.q;
      const p = document.createElement('div');
      p.className = 'muted';
      p.textContent = f.a;
      details.appendChild(sum); details.appendChild(p);
      box.appendChild(details);
    });
  }

  function wireCopy(){
    $$('.copy').forEach(btn => btn.addEventListener('click', async (e) => {
      const val = e.currentTarget.getAttribute('data-copy');
      try{ await navigator.clipboard.writeText(val); e.currentTarget.textContent = 'Copied'; setTimeout(()=> e.currentTarget.textContent='Copy', 1200); }catch(_){}
    }));
  }

  function filterContent(){
    const q = state.query;
    $$('.item').forEach(el => {
      const text = el.innerText.toLowerCase();
      el.style.display = !q || text.includes(q) ? '' : 'none';
    });
  }

  function escapeHtml(s){
    return (s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  window.addEventListener('DOMContentLoaded', init);
})();