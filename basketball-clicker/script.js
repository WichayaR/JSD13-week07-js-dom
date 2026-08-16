let score = 0;
let clickPower = 1;
let autoRate = 0;

const shop = {
  sneakers:{cost: 15, power: 1, auto: 0, owned: 0 },
  coach: { cost: 100, power: 0, auto: 2, owned: 0 },
  hoop: { cost: 500, power: 0, auto: 5, owned: 0 },
  trainer: { cost: 2000, power: 0, auto: 20, owned: 0 },
  arena: { cost: 10000, power: 0, auto: 100, owned: 0 }
};

const scoreDisplay = document.getElementById('score-display');
const cpsDisplay = document.getElementById('cps-display');
const powerDisplay = document.getElementById('power-display');
const ballBtn = document.getElementById('ball-btn');

const updateUI = () => {
  scoreDisplay.textContent = Math.floor(score).toLocaleString();
  cpsDisplay.textContent = autoRate.toLocaleString();
  powerDisplay.textContent = clickPower.toLocaleString();

  for (const key in shop) {
    const item = shop[key];
    const btn = document.getElementById(`buy-${key}-btn`);
    const costText = document.getElementById(`${key}-cost`);

    if (btn) {
      btn.disabled = score < item.cost;
    } if (costText) {
      costText.textContent = item.cost.toLocaleString();
    }
  }
};

ballBtn.addEventListener('click', (e) => {
  score += clickPower;
  updateUI();

  ballBtn.classList.remove('bounce-active');
  void ballBtn.offsetWidth;
  ballBtn.classList.add('bounce-active');

  const floatingText = document.createElement('div');
  floatingText.textContent = `+${clickPower}`;
  floatingText.className = 'floating-text';
  floatingText.style.left = `${e.clientX}px`;
  floatingText.style.top = `${e.clientY}px`;
  document.body.appendChild(floatingText);

  setTimeout(() => {
    floatingText.remove();
  }, 800);
});

const buyItem = (itemId) => {
  const item = shop[itemId];
  if (score >= item.cost) {
    score -= item.cost;
    item.owned += 1;
    clickPower += item.power;
    autoRate += item.auto;
    item.cost = Math.floor(item.cost * 1.15);
    document.getElementById(`${itemId}-owned`).textContent = item.owned;
    document.getElementById(`${itemId}-cost`).textContent = item.cost.toLocaleString();
    updateUI();
  }
};

document.getElementById('buy-sneakers-btn').addEventListener('click', () => buyItem('sneakers'));
document.getElementById('buy-coach-btn').addEventListener('click', () => buyItem('coach'));
document.getElementById('buy-hoop-btn').addEventListener('click', () => buyItem('hoop'));
document.getElementById('buy-trainer-btn').addEventListener('click', () => buyItem('trainer'));
document.getElementById('buy-arena-btn').addEventListener('click', () => buyItem('arena'));

setInterval(() => {
  if (autoRate > 0) {
    score += autoRate;
    updateUI();
  }
}, 1000);

updateUI();
