let submitForm = document.querySelector('form#create-task-form');


document.addEventListener("DOMContentLoaded", () => {
  
  });


submitForm.addEventListener('click', submitClick)




function submitClick(event){
  event.preventDefault()
  let input = event.target.querySelector('input#new-task-description').value
  let li = document.createElement("li")
  li.innerText = input
  comments.append(li)
  event.target.reset()
}


