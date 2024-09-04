// navigate to section when a button with set attribute is clicked
document.querySelectorAll("[section-link]").forEach((btn) => {
    btn.addEventListener("click", function () {
        document
            .getElementById(btn.getAttribute("section-link") ?? "")
            ?.scrollIntoView({ behavior: "smooth" });
    });
});
// lazy loading background images
const initialiseStyleBackgroundIntersectionObserver = () => {
    const lazyBackgrounds = Array.from(
        document.querySelectorAll("[data-background-image]"),
    );

    if (lazyBackgrounds.length === 0) {
        return;
    }

    let lazyBackgroundObserver: IntersectionObserver;

    const loadBackgroundIfElementOnScreen = (entry) => {
        if (entry.isIntersecting) {
            entry.target.style.backgroundImage = `url('${entry.target.dataset.backgroundImage}')`;
            lazyBackgroundObserver.unobserve(entry.target);
        }
    };

    const observeElementVisibility = (lazyBackground) => {
        lazyBackgroundObserver.observe(lazyBackground);
    };

    const setBackground = (element) => {
        element.style.backgroundImage = `url('${entry.target.dataset.backgroundImage}')`;
    };

    if (typeof window.IntersectionObserver === "function") {
        lazyBackgroundObserver = new IntersectionObserver((entries) => {
            entries.forEach(loadBackgroundIfElementOnScreen);
        });
        lazyBackgrounds.forEach(observeElementVisibility);
    } else {
        lazyBackgrounds.forEach(setBackground);
    }
};

if (
    typeof document.readyState === "string" &&
    document.readyState === "complete"
) {
    initialiseStyleBackgroundIntersectionObserver();
} else {
    document.addEventListener(
        "DOMContentLoaded",
        initialiseStyleBackgroundIntersectionObserver,
        true,
    );
}

// custom carousel
document.querySelector("#controls")?.addEventListener("click", (event) => {
    const $slide = document.querySelector(
        event.target?.getAttribute("href"),
    );
    if (!$slide) return;

    if ($slide.scrollIntoViewIfNeeded) {
        event.preventDefault();
        $slide.scrollIntoViewIfNeeded();
    } else if ($slide.scrollIntoView) {
        event.preventDefault();
        $slide.scrollIntoView();
    }
});