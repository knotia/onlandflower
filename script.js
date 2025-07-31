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
    name: "카네이션",
    meaning: "감사와 존경",
    message: "당신의 존재만으로도 누군가에겐 큰 위로가 돼요."
  },
  {
    name: "국화",
    meaning: "진심, 정직",
    message: "마음속 솔직한 이야기를 오늘은 꺼내봐도 괜찮아요."
  },
  {
    name: "수국",
    meaning: "변화, 진심",
    message: "생각보다 많은 게 괜찮아지고 있어요. 조금만 더 기다려봐요."
  },
  {
    name: "프리지아",
    meaning: "기쁨, 순수",
    message: "작은 기쁨들이 모여 오늘 하루를 밝게 만들 거예요."
  },
  {
    name: "라넌큘러스",
    meaning: "매력, 다정함",
    message: "당신의 부드러운 말 한마디가 누군가에겐 큰 힘이 돼요."
  },
  {
    name: "안개꽃",
    meaning: "기다림, 응원",
    message: "눈에 잘 띄지 않아도, 당신은 꼭 필요한 사람이에요."
  },
  {
    name: "백합",
    meaning: "순결, 희망",
    message: "오늘 하루, 자신에게 조금 더 다정해지면 어떨까요?"
  },
  {
    name: "히아신스",
    meaning: "희망, 재생",
    message: "지금 힘든 건, 다시 피어나기 위한 준비일지도 몰라요."
  },
  {
    name: "무궁화",
    meaning: "끈기, 희생",
    message: "포기하지 않는 마음이 오늘도 당신을 앞으로 나아가게 해요."
  },
  {
    name: "데이지",
    meaning: "순수, 명랑",
    message: "작은 웃음 하나가 분위기를 바꾸는 마법이 될 수 있어요."
  },
  {
    name: "아이리스",
    meaning: "좋은 소식",
    message: "기다리던 소식이 생각보다 가까이 와있을지 몰라요."
  },
  {
    name: "베고니아",
    meaning: "조심스러운 사랑",
    message: "서툴러도 괜찮아요. 진심은 결국 닿게 되어 있어요."
  },
  {
    name: "진달래",
    meaning: "절제된 사랑",
    message: "지금은 멈춰있는 듯해도, 봄은 반드시 다시 찾아와요."
  },
  {
    name: "수선화",
    meaning: "자존감, 자기애",
    message: "다른 누구보다, 오늘은 나 자신을 믿어주세요."
  },
  {
    name: "라벤더",
    meaning: "위로, 평온",
    message: "어떤 날은 조용히 숨 고르기만 해도 충분해요."
  },
  {
    name: "목련",
    meaning: "숭고함, 인내",
    message: "당신이 참아낸 시간만큼, 꽃도 깊어져 있어요."
  },
  {
    name: "팬지",
    meaning: "사색, 작은 위로",
    message: "혼자 있는 시간이 꼭 외로운 건 아니에요."
  },
  {
    name: "튤립나무",
    meaning: "긍정",
    message: "오늘은 뭐든 조금 더 나아질 수 있는 날이에요."
  },
  {
    name: "스톡",
    meaning: "영원한 아름다움",
    message: "흔들려도 사라지지 않는 무언가가 당신 안에 있어요."
  },
  {
    name: "칼라",
    meaning: "우아함, 존엄",
    message: "당신의 침착함이 이 하루를 더 단단하게 만들 거예요."
  },
  {
    name: "아네모네",
    meaning: "기다림, 순수함",
    message: "기다리는 마음은 때때로 가장 강한 용기예요."
  },
  {
    name: "리시안셔스",
    meaning: "감사, 부드러움",
    message: "오늘은 고맙다는 말 한 마디를 건네보는 건 어때요?"
  },
  {
    name: "마가렛",
    meaning: "진심 어린 관심",
    message: "누군가의 안부가 문득 궁금해지는 하루예요."
  },
  {
    name: "비올라",
    meaning: "작은 기쁨",
    message: "생각지도 못한 곳에서 미소 지을 일이 생길지도 몰라요."
  },
  {
    name: "은방울꽃",
    meaning: "다시 만남",
    message: "잠시 멀어진 인연도, 다시 이어질 수 있어요."
  },
  {
    name: "튤립",
    meaning: "소박한 행복",
    message: "좋아하는 노래 한 곡이 오늘을 달콤하게 만들어줄 거예요."
  },
  {
    name: "해바라기",
    meaning: "긍정의 기운",
    message: "조금 웃어보기만 해도 마음이 바뀔 수 있어요."
  }
];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function flipCard() {
  const card = document.querySelector('.card');
  card.classList.toggle('flipped');

  if (card.classList.contains('flipped')) {
    const random = getRandomElement(flowers);
    const back = document.getElementById('cardBack');
    back.innerHTML = `
      <div class="flower-name">${random.name}</div>
      <div class="flower-meaning">${random.meaning}</div>
      <div class="message">${random.message}</div>
      <div style="margin-top: 20px; font-size: 12px; color: #aaa;">오늘 그리고 꽃</div>
    `;
  }
}

function resetCard() {
  const card = document.querySelector('.card');
  card.classList.remove('flipped');
  const back = document.getElementById('cardBack');
  back.innerHTML = '';
}
