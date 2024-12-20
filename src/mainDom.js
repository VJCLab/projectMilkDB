import { INFOTEMP } from "../template/index.js";
import { default as PLAYERTEMP } from "../template/player.js";
import voItemClick from "./voItemClick.js";
function milkPAT() {
  // console.log("nadenade?");
  const arr = ["0045", "0075", "0079", "0078", "0106", "0038", "0061"];
  // 랜덤으로 아이템 선택
  const randomItem = arr[Math.floor(Math.random() * arr.length)];
  const playerElm = document.getElementById("audioPlayer");
  playerElm && voItemClick(playerElm, randomItem);
}
(() => {
  "use strict";
  window.addEventListener("DOMContentLoaded", () => {
    const cont = document.querySelector(".main-container");
    cont.insertAdjacentHTML("afterbegin", INFOTEMP);
    cont.insertAdjacentHTML("beforeend", PLAYERTEMP);

    $(cont)
      .find(".carousel-item img")
      .each((_, el) => $(el).on("click", () => milkPAT()));
  });
})();
