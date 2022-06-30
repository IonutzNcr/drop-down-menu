function dropDown(li, nav) {
  
  li.addEventListener("mouseover", () => {
    // eslint-disable-next-line no-plusplus
    
    nav.classList.toggle("effect");
    
    
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
