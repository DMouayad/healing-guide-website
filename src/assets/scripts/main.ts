// navigate to section when a button with set attribute is clicked
document.querySelectorAll("[section-link]").forEach((btn) => {
    btn.addEventListener("click", function () {
        document
            .getElementById(btn.getAttribute("section-link") ?? "")
            ?.scrollIntoView({ behavior: "smooth", inline: "nearest" });
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

function handleCarouselControlClick(carousel: Element, newSlide: Element, event: any, preventDefault: boolean) {


    carousel.setAttribute('current-slide', newSlide.id)
    if (preventDefault) {
        event.preventDefault();
    }
    newSlide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
}
const c = document.getElementsByClassName('custom-carousel')
for (const item of c) {
    item.querySelector("#controls")?.addEventListener("click", function (event) {
        const newSlide = document.getElementById(event.target?.getAttribute('value'))

        if (newSlide) {
            handleCarouselControlClick(item, newSlide, event, false)
            updateArrowButtonsState(item)
        }
    })
    // carousel arrows
    item.querySelector('#carousel-arrows')?.addEventListener("click", function (event) {
        const isNextButton = event.target?.id === "nextSlideBtn";
        onArrowButtonClick(item, event, isNextButton)
    })
}
function onArrowButtonClick(carousel: Element, event, isNextSlideBtn: boolean) {
    const current = carousel.getAttribute('current-slide')
    if (current) {
        const newSlideId = getNewSlideId(carousel, (i) => i + (isNextSlideBtn ? 1 : -1))

        if (!newSlideId) return

        const newSlide = document.getElementById(newSlideId)

        if (!newSlide) return

        handleCarouselControlClick(carousel, newSlide, event, true)

        const dot = carousel.querySelector(".controls__dot[value='" + carousel.getAttribute('current-slide') + "']");
        if (dot) dot.checked = true;
        updateArrowButtonsState(carousel, event.target)

    }
}
function getCurrentSlideStatus(carousel: Element) {
    const slidesCount = parseInt(carousel.getAttribute('slides-count') ?? '')
    if (Number.isNaN(slidesCount)) {
        console.log('ERROR: wrong slides count')
        return null
    }
    const currentIndex = parseSlideIndex(carousel.getAttribute('current-slide') ?? '')
    return { hasPrev: currentIndex > 1, hasNext: currentIndex < slidesCount }
}
function updateArrowButtonsState(carousel: Element, prevButton?: Element, nextBtn?: Element) {
    const buttonsStatus = getCurrentSlideStatus(carousel)
    if (!buttonsStatus) return
    const baseQuery = '#' + carousel.id + ' > #carousel-arrows '
    if (buttonsStatus.hasNext) { activateBtn(document.querySelector(baseQuery)?.querySelector('#nextSlideBtn')) }
    else {
        disableBtn(document.querySelector(baseQuery)?.querySelector('#nextSlideBtn'))
    }
    if (buttonsStatus.hasPrev) { activateBtn(document.querySelector(baseQuery)?.querySelector('#prevSlideBtn')) }
    else { disableBtn(document.querySelector(baseQuery)?.querySelector('#prevSlideBtn')) }
}
function parseSlideIndex(id: string) {
    return parseInt(id.substring(id.lastIndexOf('_') + 1))
}
function disableBtn(button: any) {
    if (!button) {
        console.log('button to disable was not found')
        return;
    }
    button.classList.add('btn-disabled')
}
function activateBtn(button: any) {
    if (!button) {
        console.log('button to activate was not found')
        return;
    }
    button.classList.remove('btn-disabled')
}
function getNewSlideId(carousel: Element, calculateNewIndex: (current: number) => number) {
    const currentId = carousel.getAttribute('current-slide')
    if (!currentId) {
        console.log('ERROR: could not get current slide')
        return
    }

    const newIndex: number = calculateNewIndex(parseSlideIndex(currentId))

    return currentId.substring(0, currentId.lastIndexOf('_')) + '_' + newIndex
}