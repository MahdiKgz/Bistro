import {
  getAndShowComments,
  getAndShowMenuCard,
  getAndShowServices,
} from "./funcs/shared.js";

window.addEventListener("load", () => {
  getAndShowMenuCard();
  getAndShowServices();
  getAndShowComments();
});

const typeWritterElement = document.getElementById("h1Writter");
//typeWritter effect for title
let headerWritter = new Typewriter(typeWritterElement, {
  loop: true,
  autoStart: true,
  cursor: "|",
});
headerWritter
  .pauseFor(500)
  .typeString("بهترین غذاها برای ذائقه شما")
  .pauseFor(500)
  .deleteChars(20)
  .pauseFor(500)
  .typeString("مقالات آشپزی در کشور")
  .deleteChars("مقالات آشپزی در کشور".length)
  .pauseFor(500)
  .typeString("مشاوران تغذیه")
  .pauseFor(750)
  .start();
