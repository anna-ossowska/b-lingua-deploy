import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  if (!document.getElementById("banner-typed-text")) {
    return
  }
  new Typed('#banner-typed-text', {
    strings: ["                    ",
    "Meet a buddy, learn a language.",
    "Møt en venn lær et språk.",
    "Träffa en vän, lära sig ett språk.",
    "Møde en ven, lære et sprog.",
    "قابل صديق ، تعلم لغة."],
    typeSpeed: 30,
    loop: true, 
    showCursor: false,
  });
}

export { loadDynamicBannerText };