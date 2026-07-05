// Smooth scroll for in-page anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;

        var target = document.querySelector(targetId);
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Collapse homepage hero when posts are in view
(function () {
    var heroBand = document.querySelector('.hero-band');
    var postsSection = document.querySelector('.home-posts');

    if (!heroBand || !postsSection) return;

    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                heroBand.classList.toggle('is-collapsed', entry.isIntersecting);
            });
        },
        {
            root: null,
            rootMargin: '-8% 0px -40% 0px',
            threshold: 0
        }
    );

    observer.observe(postsSection);
})();
