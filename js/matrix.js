const matrix = () => {
  const C = document.querySelector("canvas");
  const $ = C.getContext("2d");
  let W, H;
  let arr = [];
  let font = 10;
  const init = () => {
    W = C.width = window.innerWidth;
    H = C.height = window.innerHeight - 4;
    font = Math.floor(W / 95);
    font = (font < 10) ? 10 : font;
    arr = Array(Math.floor(W / font + 1)).fill(0);
  };
  init();
  const CIR = "АБВГДЕЁЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯЭ";
  const SIM = "1234567890            ";
  const JAPAN =
    "ックブ司レシピがいるのはどれほ" +
    "どことか多くの異なる象形文字多" +
    "くの異なる政党を縮小します";
  const ALPHABET = JAPAN + SIM;
  function repaint() {
    $.fillStyle = "rgba(0,0,0,.035)";
    $.fillRect(0, 0, W, H);
    $.fillStyle = "#00b800";
    $.font = font + "px system-ui";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 0) {
        if (Math.random() > 0.975) arr[i] = 1;
        else continue;
      }
      let char = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
      $.fillText(char, i * font, arr[i] * font);
      arr[i]++;
      if (arr[i] * font > H) arr[i] = 0;
    }
  }
  setInterval(repaint, 77);
  window.addEventListener("resize", () => init());
};
