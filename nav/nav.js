var style =  document.getElementById(`item`).style

function openNav() {
  if (style.display=="flex"){
    return closeNav()
  }else{
    style.display = "flex";
    style.width = "100%";
  } 
}

function closeNav() { 
    style.display = "none";
    style.width = "0%"; 
}  

