/* =========================================================
   Brassquake - index.js
   Routing, pop-out menu, contact form, performance search/sort
   ========================================================= */

/* ---------- Routing ---------- */

// Detail pages: which URL parameter picks the item, and which list page they belong to
const DETAIL_PAGES = {
    'member-detail-page': { param: 'member', listPage: 'members' },
    'performance-detail-page': { param: 'performance', listPage: 'performances' }
};

function changePage(section) {
    if (section) {
        try {
            // Update the URL without reloading the page
            window.history.pushState({}, '', `${window.location.pathname}?${section}`);
        } catch (error) {
            // Some browsers block pushState when the site is opened straight from a file:// path.
            // Fall back to a normal navigation; the page reads the URL when it loads.
            window.location.search = section;
            return;
        }
    }
    updatePage();
    window.scrollTo({ top: 0, behavior: 'instant' });
}

function updatePage() {
    const params = new URLSearchParams(window.location.search);
    let page = params.get('page') || 'home';
    let detail = null;
    const detailInfo = DETAIL_PAGES[page];

    // A detail page with a missing/invalid item falls back to its list page
    if (detailInfo) {
        detail = document.getElementById(`${params.get(detailInfo.param)}-detail`);
        if (!detail) page = detailInfo.listPage;
    }

    const sections = Array.from(document.querySelectorAll('#page > .section'));
    let mainSection = sections.find(sec => sec.id === page);
    if (!mainSection) {
        page = 'home';
        mainSection = sections.find(sec => sec.id === 'home');
    }

    // Header shrinks on every page except home
    const isHome = page === 'home';
    document.querySelector('.logo')?.classList.toggle('small', !isHome);
    document.querySelector('.subtitle')?.classList.toggle('small', !isHome);
    document.querySelector('.logo-image')?.classList.toggle('small', !isHome);

    // Hide every page, and every member/performance detail inside the detail pages
    sections.forEach(sec => sec.classList.add('hidden'));
    document
        .querySelectorAll('#member-detail-page .section, #performance-detail-page .section')
        .forEach(sec => sec.classList.add('hidden'));

    if (mainSection) mainSection.classList.remove('hidden');
    if (detail) detail.classList.remove('hidden');

    if (page === 'performances') {
        initializeSearchAndSort();
    }

    // Highlight the active nav link (detail pages highlight their list page)
    const activeNav = detail ? detailInfo.listPage : page;
    document.querySelectorAll('nav a').forEach(link => {
        const isActive = link.textContent.trim().toLowerCase() === activeNav;
        link.classList.toggle('active', isActive);
        if (isActive) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}

// Browser back/forward buttons
window.addEventListener('popstate', updatePage);

// Links with href="#" run their onclick handler but should not jump or add "#" to the URL
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href="#"]');
    if (link) e.preventDefault();
});

/* ---------- Pop-out menu ---------- */

function initMenu() {
    const menuButton = document.getElementById('menu-toggle');
    const headerEl = document.querySelector('header');
    const siteNav = document.getElementById('site-nav');
    if (!menuButton || !headerEl || !siteNav) return;

    const links = Array.from(siteNav.querySelectorAll('a'));

    // Each link gets an index so the CSS can stagger their entrance
    links.forEach((link, i) => link.style.setProperty('--i', i));

    const isOpen = () => headerEl.classList.contains('nav-open');

    function setOpen(open, { focusFirstLink = false, returnFocus = false } = {}) {
        headerEl.classList.toggle('nav-open', open);
        menuButton.setAttribute('aria-expanded', String(open));
        if (open && focusFirstLink && links[0]) links[0].focus();
        if (!open && returnFocus) menuButton.focus();
    }

    menuButton.setAttribute('aria-expanded', 'false');

    menuButton.addEventListener('click', (e) => {
        // e.detail === 0 means the click came from the keyboard
        setOpen(!isOpen(), { focusFirstLink: e.detail === 0 });
    });

    links.forEach(link => link.addEventListener('click', () => setOpen(false)));

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen()) setOpen(false, { returnFocus: true });
    });

    // Click outside closes the menu
    document.addEventListener('click', (e) => {
        if (isOpen() && !siteNav.contains(e.target) && !menuButton.contains(e.target)) {
            setOpen(false);
        }
    });
}

/* ---------- Contact form ---------- */

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) submitButton.disabled = true;

        try {
            const response = await fetch('https://formspree.io/f/xblzywbj', {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' }
            });

            if (response.ok) {
                alert("Thanks for your message! We'll get back to you soon.");
                form.reset();
            } else {
                const data = await response.json().catch(() => ({}));
                alert(data.error || 'Oops! Something went wrong.');
            }
        } catch (error) {
            alert('Network error: ' + error.message);
        } finally {
            if (submitButton) submitButton.disabled = false;
        }
    });
}

/* ---------- Performances: search and sort ---------- */

// Set once the search/sort controls are wired up, so revisiting the page does not add duplicate listeners
let applyPerformanceFilters = null;

function initializeSearchAndSort() {
    if (applyPerformanceFilters) {
        applyPerformanceFilters();
        return;
    }

    const searchBar = document.getElementById('performance-search');
    const sortButton = document.getElementById('sort-button');
    const sortMenu = document.getElementById('sort-menu');
    const sortOptions = Array.from(document.querySelectorAll('.sort-option'));
    if (!searchBar || !sortButton || !sortMenu) return;

    let currentSort = 'newest';

    function markSelectedOption() {
        sortOptions.forEach(option => {
            const selected = option.getAttribute('data-sort') === currentSort;
            option.classList.toggle('is-selected', selected);
            option.setAttribute('aria-selected', String(selected));
        });
    }

    function setMenuOpen(open) {
        sortMenu.classList.toggle('hidden', !open);
        sortButton.setAttribute('aria-expanded', String(open));
    }

    function filterAndSortPerformances() {
        const searchTerm = searchBar.value.toLowerCase();

        let filtered = performances.filter(perf =>
            perf.location.toLowerCase().includes(searchTerm) ||
            perf.date.toLowerCase().includes(searchTerm) ||
            (perf.summary && perf.summary.toLowerCase().includes(searchTerm))
        );

        if (currentSort === 'upcoming') {
            filtered = filtered.filter(perf => perf.status === 'upcoming');
        } else if (currentSort === 'previous') {
            filtered = filtered.filter(perf => perf.status === 'past');
        }

        filtered.sort((a, b) => {
            const dateA = parsePerformanceDate(a.date);
            const dateB = parsePerformanceDate(b.date);

            switch (currentSort) {
                case 'oldest':
                case 'upcoming':
                    return dateA - dateB; // earliest first
                case 'newest':
                case 'previous':
                default:
                    return dateB - dateA; // latest first
            }
        });

        makePerformances(filtered, filtered.length === 0 ? 'Nothing To See Here!' : '');
        requestAnimationFrame(alignPerformanceText);
    }

    applyPerformanceFilters = filterAndSortPerformances;

    searchBar.addEventListener('input', filterAndSortPerformances);

    // The filter button opens/closes the sort menu
    sortButton.addEventListener('click', () => {
        setMenuOpen(sortMenu.classList.contains('hidden'));
    });

    sortOptions.forEach(option => {
        option.addEventListener('click', () => {
            currentSort = option.getAttribute('data-sort');
            markSelectedOption();
            setMenuOpen(false);
            filterAndSortPerformances();
        });
    });

    // Close the menu when clicking outside or pressing Escape
    document.addEventListener('click', (event) => {
        if (!sortButton.contains(event.target) && !sortMenu.contains(event.target)) {
            setMenuOpen(false);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !sortMenu.classList.contains('hidden')) {
            setMenuOpen(false);
            sortButton.focus();
        }
    });

    markSelectedOption();
    filterAndSortPerformances();
}

/* ---------- Start-up ---------- */

document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    initContactForm();
});