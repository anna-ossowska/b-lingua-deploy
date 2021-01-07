import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  if (!document.getElementById("banner-typed-text")) {
    return
  }
  new Typed('#banner-typed-text', {
    strings: ["Meet a buddy, learn a language.",
    "Møt en venn lær et språk.",
    "Träffa en vän, lära sig ett språk.",
    "Incontrare un amico, imparare una lingua.",
    "Møde en ven, lære et sprog.",
    "Poznaj nowych ludzi, naucz się języka.",
    "Einen Freund treffen, eine Sprache lernen.",     
    "Conocer a un amigo, aprender un idioma.",
    "قابل صديق ، تعلم لغة."],
    typeSpeed: 40,
    loop: true, 
    showCursor: false,
  });
}

export { loadDynamicBannerText };