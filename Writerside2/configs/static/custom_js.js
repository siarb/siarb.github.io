
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

    (function() {  // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://EXAMPLE.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();

window.addEventListener('DOMContentLoaded', (event) => {
    const bodyElement = document.body;
    const originalMaxWidth = getComputedStyle(bodyElement).getPropertyValue('--wh-max-width-content');

    const adjustStyle = () => {
        if (bodyElement.dataset.id === "शुभ-प्रभात") {
            bodyElement.style.setProperty("--wh-max-width-content", "300px");  // Custom width for this page
        } else {
            bodyElement.style.setProperty("--wh-max-width-content", originalMaxWidth);  // Default width for other pages
        }
    };

    // Run adjustStyle on page load
    adjustStyle();


    // Create a MutationObserver to run adjustStyle whenever `data-id` changes
    const observer = new MutationObserver(adjustStyle);

    // Configuration of the observer
    const config = { attributes: true, childList: false, subtree: false, attributeFilter: ["data-id"] };

    // Begin observing the target
    observer.observe(bodyElement, config);

});


