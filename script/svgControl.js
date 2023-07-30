const fileDir = './assets/';
// var svgFile = 'top01.svg';

// // fetch API를 사용하여 SVG 파일 불러오기
// fetch(`${fileDir}${svgFile}`)
//   .then((response) => response.text())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error('Failed to load SVG file', error);
//   });

const charmTop = {
  idx: 0,
  fileNameList: ['top01.svg', 'top02.svg'],
  svgs: [],
  container: null,
};
const charmMid = {
  idx: 0,
  fileNameList: ['mid01.svg', 'mid02.svg'],
  svgs: [],
  container: null,
};
const charmBot = {
  idx: 0,
  fileNameList: ['bot01.svg', 'bot02.svg'],
  svgs: [],
  container: null,
};

const setCharmCotainer = () => {
  charmTop.container = document.querySelector('.charm-top');
  charmMid.container = document.querySelector('.charm-mid');
  charmBot.container = document.querySelector('.charm-bot');
};

const incButtonIdxTop = () => {
  charmTop.idx = charmTop.idx + 1;
  if (charmTop.idx >= charmTop.svgs.length) charmTop.idx = 0;
  displayCharm(charmTop);
};
const incButtonIdxMid = () => {
  charmMid.idx = charmMid.idx + 1;
  if (charmMid.idx >= charmMid.svgs.length) charmMid.idx = 0;
  displayCharm(charmMid);
};
const incButtonIdxBot = () => {
  charmBot.idx = charmBot.idx + 1;
  if (charmBot.idx >= charmBot.svgs.length) charmBot.idx = 0;
  displayCharm(charmBot);
};
const decButtonIdxTop = () => {
  charmTop.idx = charmTop.idx - 1;
  if (charmTop.idx < 0) charmTop.idx = charmTop.svgs.length - 1;
  displayCharm(charmTop);
};
const decButtonIdxMid = () => {
  charmMid.idx = charmMid.idx - 1;
  if (charmMid.idx < 0) charmMid.idx = charmMid.svgs.length - 1;
  displayCharm(charmMid);
};
const decButtonIdxBot = () => {
  charmBot.idx = charmBot.idx - 1;
  if (charmBot.idx < 0) charmBot.idx = charmBot.svgs.length - 1;
  displayCharm(charmBot);
};

const setButton = () => {
  document
    .querySelector('.button.button-left.button-top')
    .addEventListener('click', decButtonIdxTop);
  document
    .querySelector('.button.button-left.button-mid')
    .addEventListener('click', decButtonIdxMid);
  document
    .querySelector('.button.button-left.button-bot')
    .addEventListener('click', decButtonIdxBot);
  document
    .querySelector('.button.button-right.button-top')
    .addEventListener('click', incButtonIdxTop);
  document
    .querySelector('.button.button-right.button-mid')
    .addEventListener('click', incButtonIdxMid);
  document
    .querySelector('.button.button-right.button-bot')
    .addEventListener('click', incButtonIdxBot);
};

const fetchFiles = (charmDb) => {
  charmDb.fileNameList.forEach((fileName) => {
    fetch(`${fileDir}${fileName}`)
      .then((response) => response.text())
      .then((data) => {
        charmDb.svgs.push(data);
      })
      .catch((error) => {
        console.error('Failed to load SVG file', error);
      });
  });
};

const displayCharm = (charmDb) => {
  charmDb.container.innerHTML = charmDb.svgs[charmDb.idx];
};

const init = () => {
  displayCharm(charmTop);
  displayCharm(charmMid);
  displayCharm(charmBot);
};

setCharmCotainer();
setButton();
fetchFiles(charmTop);
fetchFiles(charmMid);
fetchFiles(charmBot);
setTimeout(init, 3000);
console.log(charmTop);
console.log(charmMid);
console.log(charmBot);
