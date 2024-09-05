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
// custom carousel section

function handleCarouselControlClick(event: any, preventDefault: boolean) {
    const control = event.target;
    const $slide = document.querySelector(control?.getAttribute('value'));
    if (!$slide) {
        console.log("not found")
        return;
    };

    if (preventDefault) {
        event.preventDefault();
    }
    console.log($slide)
    $slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
}
document.querySelector("#controls")?.addEventListener("click", function (event) {
    handleCarouselControlClick(event, false)
})
document.querySelector("#controls-arrows")?.addEventListener("click", function (event) {
    handleCarouselControlClick(event, true)
})