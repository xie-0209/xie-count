const drawBtn = document.getElementById('drawBtn');
const loading = document.getElementById('loading');
const message = document.getElementById('message');
const winnerEl = document.getElementById('winner');

function clearUI() {
  loading.style.opacity = 0;
  message.innerText = '';
  winnerEl.innerText = '';
}

drawBtn.addEventListener('click', () => {
  clearUI();

  const total = Number(document.getElementById('total').value);
  const count = Number(document.getElementById('count').value);

  // 穩定且完整的輸入檢查
  if (!Number.isInteger(total) || !Number.isInteger(count)) {
    message.innerText = '請輸入完整的整數數字';
    return;
  }

  if (total <= 0) {
    message.innerText = '抽籤數字必須大於 0';
    return;
  }

  if (count <= 0) {
    message.innerText = '抽籤名額必須大於 0';
    return;
  }

  if (count > total) {
    message.innerText = '抽籤名額不能大於抽籤數字';
    return;
  }

  // 顯示抽籤動畫
  loading.style.opacity = 1;

  setTimeout(() => {
    loading.style.opacity = 0;

    const pool = Array.from({ length: total }, (_, i) => i + 1);
    const result = [];

    for (let i = 0; i < count; i++) {
      const index = Math.floor(Math.random() * pool.length);
      result.push(pool[index]);
      pool.splice(index, 1);
    }

    winnerEl.innerText = '🎊 抽中號碼： ' + result.join(', ');
  }, 900);
});
