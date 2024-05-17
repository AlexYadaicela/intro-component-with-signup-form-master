const form = document.querySelector("form"); 
const inputAll = document.querySelectorAll("input"); 

const errorMsg = {
    fName : "First Name cannot be empty", 
    lName: "Last Name cannot be empty", 
    email: "Looks like this is not an email", 
    pwd: "Password cannot be empty" 
}

form.addEventListener("submit", (event)=>{
    event.preventDefault(); 
    validateUserInformation(); 
    
})

function validateUserInformation(){
    let validFormCounter = 0; 
    //check if input field is empty
    for(let index = 0; index < inputAll.length - 1; index++){
        const current = form[`${inputAll[index].name}`].value; 
        const displayError = document.querySelector( `#${inputAll[index].id}`+ "+ span");
        const msg = errorMsg[`${inputAll[index].name}`]; 
        if(current.length === 0){ 
            displayError.textContent = msg; 
            validFormCounter++; 
        }else{
            displayError.textContent = ''; 
        }
    }

    if(validFormCounter === 0){
        clearForm(); 
    }
}

function clearForm(){
    for(let index = 0; index < inputAll.length - 1; index++){
        form[`${inputAll[index].name}`].value = '';
    }
}
