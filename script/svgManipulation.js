const strokeWeightSliderTagets = [];

const getStrokeWeightSliderTagets = () => {
  const topSvgObjects = document.querySelectorAll('.charm__top object');
  topSvgObjects.forEach((eachSvgObj) => {
    const svg = eachSvgObj.contentDocument;
    const strokes = svg.querySelectorAll('.stroke-h');
    strokes.forEach((eachStroke) => {
      strokeWeightSliderTagets.push(eachStroke);
    });
  });
};

setTimeout(getStrokeWeightSliderTagets, 2000);

const strokeWeightSlider = document.querySelector('#stroke-weight-slider');
// console.log(strokeWeightSlider);
const changeStrokeWeight = (evt) => {
  //   console.log(evt.target.value);
  strokeWeightSliderTagets.forEach((eachTarget) => {
    eachTarget.setAttribute('stroke-width', evt.target.value);
  });
};
strokeWeightSlider.addEventListener('change', changeStrokeWeight);
