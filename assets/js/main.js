// Scroll Reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => io.observe(el));

// Counter Animation
const counters = document.querySelectorAll('.metric-number[data-target]');
const cIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const end = parseFloat(el.dataset.target);
        let cur = 0;
        const step = end / 40;
        const t = setInterval(() => {
            cur = Math.min(cur + step, end);
            el.textContent = cur.toFixed(1) + '%';
            if (cur >= end) { clearInterval(t); el.textContent = end + '%'; }
        }, 20);
        cIO.unobserve(el);
    });
}, { threshold: 0.5 });
counters.forEach(c => cIO.observe(c));

// Back to Top
const backBtn = document.getElementById('backToTop');
if (backBtn) {
    window.addEventListener('scroll', () => {
        backBtn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Active nav link
const navLinks = document.querySelectorAll('nav a');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage) a.classList.add('active');
});
