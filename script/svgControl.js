const fileDir = './assets/';
class Charm {
  constructor(continaerClassName, fileList) {
    this.idx = 0;
    this.fileNameList = fileList;
    this.svgs = [];
    this.containerClass = continaerClassName;
    this.container = null;
  }
  inc = () => {
    this.idx = this.idx + 1;
    if (this.idx >= this.svgs.length) this.idx = 0;
    this.display();
  };
  dec = () => {
    this.idx = this.idx - 1;
    if (this.idx < 0) this.idx = this.svgs.length - 1;
    this.display();
  };
  display = () => {
    this.container.innerHTML = this.svgs[this.idx];
  };
}
const charmTop = new Charm('charm-top', ['top01.svg', 'top02.svg']);
const charmMid = new Charm('charm-mid', ['mid01.svg', 'mid02.svg']);
const charmBot = new Charm('charm-bot', ['bot01.svg', 'bot02.svg']);
const charmsArry = [charmTop, charmMid, charmBot];

const setCharmCotainer = () => {
  charmsArry.forEach((eachCharm) => {
    eachCharm.container = document.querySelector(
      `.${eachCharm.containerClass}`
    );
  });
};

const setButton = () => {
  document
    .querySelector('.button.button-left.button-top')
    .addEventListener('click', charmTop.dec);
  document
    .querySelector('.button.button-left.button-mid')
    .addEventListener('click', charmMid.dec);
  document
    .querySelector('.button.button-left.button-bot')
    .addEventListener('click', charmBot.dec);
  document
    .querySelector('.button.button-right.button-top')
    .addEventListener('click', charmTop.inc);
  document
    .querySelector('.button.button-right.button-mid')
    .addEventListener('click', charmMid.inc);
  document
    .querySelector('.button.button-right.button-bot')
    .addEventListener('click', charmBot.inc);
};

const fetchFiles = (charm) => {
  charm.fileNameList.forEach((fileName) => {
    fetch(`${fileDir}${fileName}`)
      .then((response) => response.text())
      .then((data) => {
        charm.svgs.push(data);
        if (charm.svgs.length === 1) charm.display();
      })
      .catch((error) => {
        console.error('Failed to load SVG file', error);
      });
  });
};

setCharmCotainer();
setButton();
charmsArry.forEach((eachCharm) => {
  fetchFiles(eachCharm);
});
console.log(charmTop);
console.log(charmMid);
console.log(charmBot);

const controlStrk = document.querySelector('#control-strk-w');
controlStrk.addEventListener('input', (evt) => {
  // console.log(evt);
  document.documentElement.style.setProperty(
    '--stroke-w-normal',
    evt.target.value
  );
});
