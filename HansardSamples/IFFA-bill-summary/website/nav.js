/* IFFA Website Navigation
   Inject nav bar and wire up prev/next links
*/

const IFFA_PAGES = [
  {
    id: 'force-network',
    file: 'force-network.html',
    title: 'The Force Network',
    desc: 'Who shapes the rules, who bears the cost'
  },
  {
    id: 'accountability-chain',
    file: 'accountability-chain.html',
    title: 'The Approval Chain',
    desc: 'Six independent gates vs one gatekeeper'
  },
  {
    id: 'stakeholders',
    file: 'stakeholders.html',
    title: 'The Stakeholders',
    desc: 'Winners and losers across all parties'
  },
  {
    id: 'safeguards',
    file: 'safeguards.html',
    title: 'Democratic Safeguards',
    desc: 'What was removed by the 2025 Bill'
  },
  {
    id: 'money-flow',
    file: 'money-flow.html',
    title: 'Where Does the Money Go?',
    desc: 'Following the levy from payer to recipient'
  },
  {
    id: 'lock-in-timeline',
    file: 'lock-in-timeline.html',
    title: 'The 30-Year Lock-In',
    desc: 'What happens when the asset is stranded'
  },
  {
    id: 'power-exposure',
    file: 'power-exposure.html',
    title: 'Power vs Exposure',
    desc: 'Who has control, who bears the risk'
  },
  {
    id: 'rights-checker',
    file: 'rights-checker.html',
    title: 'What Can You Do?',
    desc: 'Citizen rights under the amended Act'
  },
  {
    id: 'key-messages',
    file: 'key-messages.html',
    title: 'Key Messages',
    desc: 'Tailored summaries for different audiences'
  }
];

const HOME_ICON_SVG = `<svg viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M3 9.5L11 3l8 6.5V19a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
  <path d="M8 20v-8h6v8"/>
</svg>`;

function initNav(currentId) {
  const navEl = document.getElementById('site-nav');
  if (!navEl) return;

  const idx = IFFA_PAGES.findIndex(p => p.id === currentId);
  const current = IFFA_PAGES[idx];
  const prev = idx > 0 ? IFFA_PAGES[idx - 1] : null;
  const next = idx < IFFA_PAGES.length - 1 ? IFFA_PAGES[idx + 1] : null;

  const prevBtn = prev
    ? `<a href="${prev.file}" class="nav-btn nav-prev" title="${prev.title}" aria-label="Previous section: ${prev.title}">← Prev</a>`
    : `<span class="nav-btn nav-disabled" aria-disabled="true">← Prev</span>`;

  const nextBtn = next
    ? `<a href="${next.file}" class="nav-btn nav-next" title="${next.title}" aria-label="Next section: ${next.title}">Next →</a>`
    : `<span class="nav-btn nav-disabled" aria-disabled="true">Next →</span>`;

  navEl.innerHTML = `
    <div class="nav-inner">
      <a href="index.html" class="nav-home" title="Back to overview" aria-label="Back to overview">
        ${HOME_ICON_SVG}
        <span class="nav-home-text">IFFA Analysis</span>
      </a>
      <div class="nav-breadcrumb" aria-current="page">${current ? current.title : ''}</div>
      <div class="nav-controls" role="navigation" aria-label="Section navigation">
        ${prevBtn}
        <span class="nav-page-count" aria-label="Section ${idx + 1} of ${IFFA_PAGES.length}">${idx + 1} / ${IFFA_PAGES.length}</span>
        ${nextBtn}
      </div>
    </div>
  `;
}
