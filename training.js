const trigger = document.querySelector(".trigger");
const victim = document.querySelector(".victim")

trigger.addEventListener("click",()=>{
    victim.classList.add("action");
})