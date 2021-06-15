const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
const background = document.querySelector('body');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let colorInterval = null;

btnStart.addEventListener('click', () => {
    if (!colorInterval) {
      colorInterval = setInterval(() => {
    background.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
  };
  
});

btnStop.addEventListener('click', () => {
    clearInterval(colorInterval);
    colorInterval = null;
});
