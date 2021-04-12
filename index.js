const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const sliderWrapper = document.getElementById("slider");
const burger = document.getElementById("menu");

burger.addEventListener("change", () => {
  if (burger.checked) {
    document.body.style.overflow = "hidden";
    return;
  }
  document.body.style.overflow = "auto";
});

const getCardItemDimensions = () => {
  const grid = document.getElementsByClassName("gallery__wrapper")[0];
  const advantagesItem = document.getElementsByClassName(
    "gallery__wrapper--img"
  )[0];
  const advantagesItemStyles = window.getComputedStyle(advantagesItem);
  const advantagesGridStyles = window.getComputedStyle(grid);
  const itemOffset =
    Number(advantagesGridStyles.columnGap.replace(/[^-\d.]/g, "")) +
    Number(advantagesItemStyles.width.replace(/[^-\d.]/g, ""));

  return itemOffset;
};

const itemOffset = getCardItemDimensions();

let position = 0;

rightArrow.addEventListener("click", () => {
  //   if (position === 1) return;
  const coord = sliderWrapper.style.transform.replace(/[^-\d.]/g, "");
  sliderWrapper.style.transform = `translateX(${Number(coord) - itemOffset}px)`;

  position++;
});

leftArrow.addEventListener("click", () => {
  if (position === 0) return;
  const coord = sliderWrapper.style.transform.replace(/[^-\d.]/g, "");
  sliderWrapper.style.transform = `translateX(${Number(coord) + itemOffset}px)`;

  position--;
});
