import subcategoryUpdate from "./subcategoryUpdate.js";
import { mainCategoryTemplate } from "../template/index.js";
import voItemClick from "./voItemClick.js";

const userLanguage = navigator.language || navigator.userLanguage;
let langCode = (() => {
  if (userLanguage.startsWith("ko")) return 1;
  if (userLanguage.startsWith("ja")) return 0;

  // $categorySelect.attr("translate", "yes");
  return 0;
})();
/** @type {?Object} voice map */
let VOMAP = null;
/** @type {?Object} category Name map */
let CATEGORYNAMEMAP = null;

//await for dom load
await new Promise((r) => (window.onload = () => r(1)));
/** @type {HTMLAudioElement} */
const audioElement = document.getElementById("audioPlayer");
audioElement.addEventListener("canplaythrough", function () {
  audioElement.play();
});

// gameResult 만 gameResult[key][rank,japanese,korean]
VOMAP = await (await fetch("./data/vomap.json")).json();

CATEGORYNAMEMAP = await (await fetch("./data/categoryNames.json")).json();

let selecterID = 0;
const e = $(".selectersWrap").append(
  mainCategoryTemplate(selecterID++),
  mainCategoryTemplate(selecterID++)
);
e.children().each((id, el) => {
  const $categorySelect = $(el).find(`#categorySelect${id}`);
  Object.entries(CATEGORYNAMEMAP).forEach(([key, arr]) => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = arr[langCode];
    $categorySelect.append(opt);
  });
  $categorySelect[0].disabled = false;

  // 대분류 선택 시 소분류 업데이트
  $categorySelect.on("change", () =>
    subcategoryUpdate(VOMAP, id, $categorySelect.val(), (k) =>
      voItemClick(audioElement, k)
    )
  );
});
