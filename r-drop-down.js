
const activateTransition = (()=>{
    const victims = document.querySelectorAll(".victim");
    const triggers = document.querySelectorAll(".trigger");

    function removeAction(){
        victims.forEach(e=>e.classList.remove("action"))
    }
    
    function getAimation(e){
        const victim = document.querySelector(`.victim[data-id="${e.target.dataset.id}"]`);
        removeAction();
        victim.classList.toggle("action");
        victim.addEventListener("mouseover",()=>{
            victim.classList.add("action");
        })
        victim.addEventListener("mouseout",removeAction)
    }
    
    triggers.forEach(e=>{
        e.addEventListener("mouseover",getAimation);
        e.addEventListener("mouseout",removeAction);
    })
})()

export default activateTransition;
