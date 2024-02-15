(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  function scrollFilters(direction) {
    const filtersContainer = document.getElementById('filters');
    const scrollAmount = 100; // Adjust the scroll amount as needed

    if (direction === 'left') {
        filtersContainer.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        filtersContainer.scrollLeft += scrollAmount;
    }
}
//toggle effect
let taxSwitch = document.getElementById("flexSwitchCheckDefault");
  taxSwitch.addEventListener("click",()=>{
    let taxInfo = document.getElementsByClassName("tax-info");
    for(info of taxInfo){
      if(info.style.display != "inline"){
      info.style.display = "inline";
      }else{
        info.style.display = "none";
      }
    }
  });