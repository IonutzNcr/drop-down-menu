function dropDown(li, nav) {
  const navs = document.querySelectorAll("nav");

  li.addEventListener("click", () => {
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < navs.length; i++) {
      navs[i].classList.add("hidden");
    }
    nav.classList.toggle("hidden");
  });
}

const homeLi = document.querySelector("#home-li");
const clothesLi = document.querySelector("#clothes-li");
const bagsLi = document.querySelector("#bags-li");
const supportLi = document.querySelector("#support-li");

const homeNav = document.querySelector("#home-nav");
const clothesNav = document.querySelector("#clothes-nav");
const bagsNav = document.querySelector("#bags-nav");
const supportNav = document.querySelector("#support-nav");

console.log(
  homeLi,
  homeNav,
  clothesLi,
  clothesNav,
  bagsLi,
  bagsNav,
  supportLi,
  supportNav
);

dropDown(homeLi, homeNav);
dropDown(clothesLi, clothesNav);
dropDown(bagsLi, bagsNav);
dropDown(supportLi, supportNav);
