
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



