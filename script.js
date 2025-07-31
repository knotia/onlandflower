const flowers = [
  {
    name: "튤립",
    meaning: "사랑의 고백",
    message: "기분 좋은 햇살처럼, 당신의 마음도 환히 피어나길 바라요."
  },
  {
    name: "장미",
    meaning: "열정과 사랑",
    message: "오늘은 당신의 따뜻한 마음이 누군가에게 닿을지도 몰라요."
  },
  {
    name: "해바라기",
    meaning: "존경, 기다림",
    message: "당신이 바라보는 그 방향, 틀리지 않았어요. 계속 가보세요."
  },
  {
    name: "수국",
    meaning: "변화, 진심",
    message: "생각보다 많은 게 괜찮아지고 있어요. 조금만 더 기다려봐요."
  },
  {
    name: "카네이션",
    meaning: "감사와 존경",
    message: "당신의 존재만으로도 누군가에겐 큰 위로가 돼요."
  }
];

function flipCard() {
  const card = document.getElementById('card');
  card.classList.toggle('flipped');

  if (card.classList.contains('flipped')) {
    const random = flowers[Math.floor(Math.random() * flowers.length)];
    const back = document.getElementById('cardBack');
    back.innerHTML = `
      <h2>${random.name}</h2>
      <h4>${random.meaning}</h4>
      <p>${random.message}</p>
    `;
  }
}

function resetCard() {
  const card = document.getElementById('card');
  card.classList.remove('flipped');
  const back = document.getElementById('cardBack');
  back.innerHTML = '';
}
