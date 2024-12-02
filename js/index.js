
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled", "true")
        }
    })
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbw9R9VLF__6MhdEdfdrCEjKzzyPK6vTZNlwQjIxN0_OCC5HfwpnMGJqX7aNYb4Qqpuc/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = " "
        },5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})


