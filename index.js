let page = "home";
const url = new URLSearchParams(window.location.search);

function changePage(section) {
    if(section !== "") {
        //Update URL without reloading
        window.location.search = section;
        window.history.pushState({}, '', `${window.location.pathname}?${url}`);
    }
    updatePage();
}

function updatePage() {
    const url = new URLSearchParams(window.location.search);
    const page = url.get('page') || 'home';
    const logo = document.querySelector('.logo');
    const subtitle = document.querySelector('.subtitle');
    const logoImage = document.querySelector('.logo-image');
    
    if (page === 'home') {
        logo.classList.remove('small');
        subtitle.classList.remove('small');
        logoImage.classList.remove('small');
    } else {
        logo.classList.add('small');
        subtitle.classList.add('small');
        logoImage.classList.add('small');
    }

    // Clear all sections
    document.querySelectorAll('main>.section').forEach(sec => sec.classList.add('hidden'));

    // Show main page section
    const mainSection = document.getElementById(page);
    if (mainSection) {
        mainSection.classList.remove('hidden');
    }

    // Show member detail section
    if (page === 'member-detail-page' && url.get('member')) {
        const memberSection = document.getElementById(`${url.get("member")}-detail`);
        if (memberSection) {
            memberSection.classList.remove('hidden');
        }
    }

    // Show performance detail section
    if (page === 'performance-detail-page' && url.get('performance')) {
        const perfSection = document.getElementById(`${url.get("performance")}-detail`);
        if (perfSection) {
            perfSection.classList.remove('hidden');
        }
    }

    // Highlight active nav button
    document.querySelectorAll("nav a").forEach(link => {
        link.classList.remove('active');
        if (link.textContent.toLowerCase() === page) {
            link.classList.add('active');
        }
    });
}

//Turns button to active class when clicked
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener('click', function(e) {
        document.querySelectorAll("nav a").forEach(navLink => {
            navLink.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Menu toggle for compact header (appended to avoid interfering with existing DOMContentLoaded handlers)
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-toggle');
  const headerEl = document.querySelector('header');
  const siteNav = document.getElementById('site-nav');

  if (menuButton && headerEl && siteNav) {
    // start in compact mode on small screens
    siteNav.classList.add('compact');

    // helper state
    let closeTimer = null;

    const links = Array.from(siteNav.querySelectorAll('a'));
  const linkStagger = 40; // ms per link
  const transformDuration = 500; // set open/close to 500ms

    function openMenu() {
      // clear any pending close
      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }
      // reset any inline transition overrides so CSS defaults apply
      siteNav.style.transition = '';

  // ensure any inline collapse styles are cleared so CSS open animation runs
  siteNav.style.transform = '';
  siteNav.style.opacity = '';
  siteNav.style.background = '';
  siteNav.style.boxShadow = '';

  headerEl.classList.add('nav-open');
      menuButton.setAttribute('aria-expanded', 'true');

      // ensure links are visible and arranged (forward stagger left-to-right)
      links.forEach((a, i) => {
        // clear any inline transition overrides from previous close
        a.style.transition = '';
        a.style.transitionDelay = `${i * linkStagger}ms`;
        a.style.transform = `translateX(0)`;
        a.style.opacity = '1';
      });
    }

    function closeMenu() {
      // compute menu button center
      const menuRect = menuButton.getBoundingClientRect();
      const menuCenterX = menuRect.left + menuRect.width / 2;

      // compute link centers and sort right-to-left so they flow back into the button
      const linksWithPos = links.map(a => {
        const r = a.getBoundingClientRect();
        return { el: a, cx: r.left + r.width / 2 };
      }).sort((a, b) => b.cx - a.cx); // rightmost first

      // apply staggered delays in right-to-left order and move each link toward the menu button
      linksWithPos.forEach((item, idx) => {
        const dx = Math.round(menuCenterX - item.cx);
        // during close, increase link transition duration to match transformDuration so the motion is slower
        item.el.style.transition = `opacity ${transformDuration}ms ease, transform ${transformDuration}ms ease`;
        item.el.style.transitionDelay = `${idx * linkStagger}ms`;
        item.el.style.transform = `translateX(${dx}px)`;
        item.el.style.opacity = '0';
      });

      // after the last link's delay + transform duration, hide the overlay and clear inline styles
      const maxDelay = (linksWithPos.length - 1) * linkStagger;
      const totalCloseTime = maxDelay + transformDuration;

  // override siteNav transitions so the overlay collapse spans the full close time
  siteNav.style.transition = `opacity ${totalCloseTime}ms cubic-bezier(.2,.8,.2,1), transform ${totalCloseTime}ms cubic-bezier(.2,.8,.2,1), background ${Math.min(totalCloseTime, 320)}ms ease, box-shadow ${Math.min(totalCloseTime, 320)}ms ease`;

  // start the overlay collapse by setting inline styles (inline styles take precedence
  // and will animate using the transition we just set). This keeps the overlay visible
  // while links are animating into the button.
  // collapsed state: slightly offset and scaled to zero
  siteNav.style.transform = 'translateX(-8px) scaleX(0)';
  siteNav.style.opacity = '0';
  siteNav.style.background = 'rgba(0,0,0,0)';
  siteNav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.0)';

      closeTimer = setTimeout(() => {
        headerEl.classList.remove('nav-open');
        menuButton.setAttribute('aria-expanded', 'false');

        // clear inline styles so CSS returns to base state
        links.forEach(a => {
          a.style.transitionDelay = '';
          a.style.transform = '';
          a.style.opacity = '';
          a.style.transition = '';
        });

        // clear our inline transition override as well
        siteNav.style.transition = '';
        // also clear any inline overlay collapse styles so the nav returns to stylesheet control
        siteNav.style.transform = '';
        siteNav.style.opacity = '';
        siteNav.style.background = '';
        siteNav.style.boxShadow = '';

        closeTimer = null;
      }, totalCloseTime + 20);
    }

    menuButton.addEventListener('click', () => {
      if (headerEl.classList.contains('nav-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu when any nav link is clicked (animate links back into the menu button)
    links.forEach(a => {
      a.addEventListener('click', (e) => {
        // allow link navigation but animate close first; small delay before navigation will keep UX smooth
        closeMenu();
      });
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        if (headerEl.classList.contains('nav-open')) {
          closeMenu();
        }
      }
    });
  }
});

function showMemberDetail(memberName) {
    const detailSection = document.getElementById(memberName + '-detail');
    if (detailSection) {
        // Hide all sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.add('hidden');
        });
        
        // Show the member detail
        detailSection.classList.remove('hidden');
    }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch("https://formspree.io/f/xblzywbj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      }).then(response => {
        if (response.ok) {
          alert("Thanks for your message! We'll get back to you soon.");
          form.reset();
        } else {
          response.json().then(data => {
            alert(data.error || "Oops! Something went wrong.");
          });
        }
      }).catch(error => {
        alert("Network error: " + error.message);
      });
    });
  }
});
