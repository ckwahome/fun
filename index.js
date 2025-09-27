let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');
let show = document.getElementById('show');
let btn=document.querySelector('button')
let p= document.getElementById('greet');

show.onclick=function(){


    if(passwordInput.type === "password"){
        passwordInput.type = "text";
        show.innerText = "hide";
        
    }


    //if input type is text
    else{
        passwordInput.type = "password";
        show.innerText = "show";
        show.cursor = "pointer";
    }
}

btn.onclick=function(){
p.innerText = `hello ${usernameInput.value} welcome to our website`;
}