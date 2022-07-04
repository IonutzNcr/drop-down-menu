
// Main elements 
const triggers = document.querySelectorAll(".trigger");
const victims = document.querySelectorAll(".victim");

// adding events listener
triggers.forEach(e=>{
  const {id} = e.dataset;
  
  let victim;
  // eslint-disable-next-line no-plusplus
  for(let i=0;i<victims.length;i++){
    // iterate trough the navs to find the one that correspond au trigger
    if(victims[i].dataset.id===id){
      victim = victims[i];
      break
    }
  }
 
  
  e.addEventListener("mouseover",()=>{
    // removes the class for all navs ( victims )
    victims.forEach(e=>{
      e.classList.remove("action-acheter")
    })
    victim.classList.toggle("action-acheter");
    
  });

  e.addEventListener("mouseout",()=>{
    victim.classList.remove("action-acheter");
  })

  victims.forEach(e=>{
    e.addEventListener("mouseover",()=>{
      e.classList.add("action-acheter")
    })
    e.addEventListener("mouseout",()=>e.classList.remove("action-acheter"))
  })

  

})



/* Need to indetify trigger & victim */

/* Psuedo
  Attribuer a chaque trigger son propre evenement.
  Mais est ce que l'evenement n'est pas identique.

  Evenement décrit : Sur un click d'un trigger faire descendre le nav qui lui correspond.
  Egalement reset le precédent trigger on lui enlevant la classe qui declanche l'action. 
*/

/* Victim = le nav qui subit l'action 
   TRIGGER = le li qui declenche l'action de la victim
   */

