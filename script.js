/* ===== 노래 목록 ===== */
const songs = [
  { id: 1, title: "해적왕" },
  { id: 2, title: "Treasure" },
  { id: 3, title: "Twilight" },
  { id: 4, title: "Choose" },
  { id: 5, title: "Stay" },
  { id: 6, title: "My Way" },
  { id: 7, title: "HALA HALA (Hearts Awakened, Live Alive)" },
  { id: 8, title: "Say My Name" },
  { id: 9, title: "Desire" },
  { id: 10, title: "Light" },
  { id: 11, title: "Promise" },
  { id: 12, title: "WAVE" },
  { id: 13, title: "ILLUSION" },
  { id: 14, title: "AURORA" },
  { id: 15, title: "UTOPIA" },
  { id: 16, title: "Dancing Like Butterfly Wings" },
  { id: 17, title: "WONDERLAND" },
  { id: 18, title: "Dazzling Light" },
  { id: 19, title: "안개" },
  { id: 20, title: "Precious (Overture)" },
  { id: 21, title: "WIN" },
  { id: 22, title: "If Without You" },
  { id: 23, title: "친구 (THANK U)" },
  { id: 24, title: "Sunrise" },
  { id: 25, title: "걸어가고 있어" },
  { id: 26, title: "Answer" },
  { id: 27, title: "지평선 (Horizon)" },
  { id: 28, title: "Star 1117" },
  { id: 29, title: "Precious" },
  { id: 30, title: "FEVER" },
  { id: 31, title: "THANXX" },
  { id: 32, title: "INCEPTION" },
  { id: 33, title: "Good Lil Boy" },
  { id: 34, title: "One Day At A Time" },
  { id: 35, title: "춤을 춰 (TO THE BEAT)" },
  { id: 36, title: "선도부 (The Leaders)" },
  { id: 37, title: "Time Of Love" },
  { id: 38, title: "Take Me Home" },
  { id: 39, title: "Celebrate" },
  { id: 40, title: "Eternal Sunshine" },
  { id: 41, title: "Deja Vu" },
  { id: 42, title: "ROCKY" },
  { id: 43, title: "All About You" },
  { id: 44, title: "밤하늘 (Not Too Late)" },
  { id: 45, title: "야간비행 (Turbulence)" },
  { id: 46, title: "Be With You" },
  { id: 47, title: "The Letter" },
  { id: 48, title: "Better" },
  { id: 49, title: "Still Here" },
  { id: 50, title: "Guerrilla" },
  { id: 51, title: "Cyberpunk" },
  { id: 52, title: "Sector 1" },
  { id: 53, title: "The Ring" },
  { id: 54, title: "WDIG (Where Do I Go)" },
  { id: 55, title: "BOUNCY (K-HOT CHILLI PEPPERS)" },
  { id: 56, title: "DJANGO" },
  { id: 57, title: "This World" },
  { id: 58, title: "최면 (Wake Up)" },
  { id: 59, title: "Outlaw" },
  { id: 60, title: "미친 폼 (Crazy Form)" },
  { id: 61, title: "ARRIBA" },
  { id: 62, title: "Silver Light" },
  { id: 63, title: "꿈날 (Dreamy Day)" },
  { id: 64, title: "Youth (윤호, 민기)" },
  { id: 65, title: "Everything (종호)" },
  { id: 66, title: "Dreamers" },
  { id: 67, title: "Blue Summer" },
  { id: 68, title: "불놀이야 (I'm The One)" },
  { id: 69, title: "Feeling Like I Do" },
  { id: 70, title: "Don't Stop" },
  { id: 71, title: "The King" },
  { id: 72, title: "New World" },
  { id: 73, title: "PROPAGANDA" },
  { id: 74, title: "Let's Get Together" },
  { id: 75, title: "Paradigm" },
  { id: 76, title: "Like That" },
  { id: 77, title: "HALAZIA" },
  { id: 78, title: "Limitless" },
  { id: 79, title: "DIAMOND" },
  { id: 80, title: "Dune" },
  { id: 81, title: "IT's You (여상, 산, 우영)" },
  { id: 82, title: "MATZ (홍중, 성화)" },
  { id: 83, title: "Emergency" },
  { id: 84, title: "WE KNOW" },
  { id: 85, title: "Days" },
  { id: 86, title: "Blind" },
  { id: 87, title: "NOT OKAY" },
  { id: 88, title: "WORK" },
  { id: 89, title: "Empty Box" },
  { id: 90, title: "Shaboom" },
  { id: 91, title: "Siren" },
  { id: 92, title: "Royal" },
  { id: 93, title: "Hush-Hush" },
  { id: 94, title: "Birthday" },
  { id: 95, title: "Forevermore" },
  { id: 96, title: "Ice On My Teeth" },
  { id: 97, title: "DEEP DIVE" },
  { id: 98, title: "Enough" },
  { id: 99, title: "Man On Fire" },
  { id: 100, title: "Selfish Waltz" },
  { id: 101, title: "Lemon Drop" },
  { id: 102, title: "Castle" },
  { id: 103, title: "Masterpiece" },
  { id: 104, title: "Now this house ain't a home" },
  { id: 105, title: "우리의 마음이 닿는 곳이라면 (To be your light) (종호)" },
  { id: 106, title: "Creep (산)" },
  { id: 107, title: "In Your Fantasy" },
  { id: 108, title: "Legacy (여상)" },
  { id: 109, title: "NO1 (홍중)" },
  { id: 110, title: "ROAR (민기)" },
  { id: 111, title: "Sagittarius (우영)" },
  { id: 112, title: "Skin (성화)" },
  { id: 113, title: "Slide to me (윤호)" },
  { id: 114, title: "12 Midnight" },
  { id: 115, title: "Tippy Toes" },
  { id: 116, title: "FACE" },
  { id: 117, title: "Crescendo" },
  { id: 118, title: "Ash" },
  { id: 119, title: "From (2018)" }
];

/* ===== 기본 설정 ===== */
const totalRounds = 119;
let round = 0;

let scores = {};
songs.forEach(s => scores[s.id] = 0);

let leftSong, rightSong;

/* ===== DOM ===== */
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

/* ===== 유틸 ===== */
function getRandomPair() {
  const shuffled = [...songs].sort(() => Math.random() - 0.5);
  return [shuffled[0], shuffled[1]];
}

/* ===== 저장 / 불러오기 ===== */
function saveGame() {
  localStorage.setItem("ateezSortSave", JSON.stringify({
    round,
    scores,
    leftSong,
    rightSong
  }));
}

function loadGame() {
  const saved = localStorage.getItem("ateezSortSave");
  if (!saved) return false;

  const data = JSON.parse(saved);
  round = data.round;
  scores = data.scores;
  leftSong = data.leftSong;
  rightSong = data.rightSong;
  return true;
}

/* ===== 진행률 ===== */
function updateProgress() {
  const percent = Math.floor((round / totalRounds) * 100);
  document.getElementById("progress").textContent =
    `진행률: ${round} / ${totalRounds} (${percent}%)`;
}

/* ===== 렌더 ===== */
function render() {
  leftBtn.textContent = leftSong.title;
  rightBtn.textContent = rightSong.title;
  updateProgress();
}

/* ===== 투표 ===== */
function vote(winner) {
  scores[winner.id]++;
  round++;
  saveGame();

  if (round >= totalRounds) {
    localStorage.removeItem("ateezSortSave");
    showResult();
    return;
  }

  [leftSong, rightSong] = getRandomPair();
  render();
}

leftBtn.onclick = () => vote(leftSong);
rightBtn.onclick = () => vote(rightSong);

/* ===== 결과 ===== */
function showResult() {
  document.getElementById("battle").style.display = "none";
  const result = document.getElementById("result");
  result.style.display = "block";

  const ranking = [...songs].sort(
    (a, b) => scores[b.id] - scores[a.id]
  );

  result.innerHTML = ranking
    .map((s, i) => `${i + 1}위: ${s.title}`)
    .join("<br>");
}

/* ===== 시작 ===== */
if (!loadGame()) {
  [leftSong, rightSong] = getRandomPair();
}

render();