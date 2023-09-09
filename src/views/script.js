const form= document.querySelector('#form');
const username= document.querySelector('#username');
const password= document.querySelector('#password');
const password2= document.querySelector('#password2');
const email= document.querySelector('#email');
function showError(input,message){
    const formControl= input.parentElement;
    // formControl.className= 'form-control error';
    const small= formControl.querySelector('small');
    small.innerText= message;
    small.style.color='red'
    small.style.transition='color 1s ease-in-out'
    setTimeout(function(){
        small.style.color='white'
    }, 3000);
}
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input, `${getFieldName(input)} is required`);
        }
    });
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([username, email, password, password2]);
});