    (function () {
      var header = document.querySelector('.site-header');
      var toggle = document.getElementById('navToggle');
      var menu = document.getElementById('mobileMenu');
      var links = menu.querySelectorAll('a');

      function onScroll() {
        header.classList.toggle('scrolled', window.scrollY > 10);
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      function closeMenu() {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menu');
      }

      toggle.addEventListener('click', function () {
        var open = menu.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
      });

      links.forEach(function (l) {
        l.addEventListener('click', closeMenu);
      });

      // Reveal on scroll
      var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var items = document.querySelectorAll('.reveal');
      if (reduce || !('IntersectionObserver' in window)) {
        items.forEach(function (el) { el.classList.add('in-view'); });
      } else {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); }
          });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        items.forEach(function (el) { io.observe(el); });
      }
    })();
