const body = document.body;

body.addEventListener("load", loggedIn());

function loggedIn(){
    console.log("LOG CHECK");
        if(window.localStorage.getItem("loggedIn") === true){
            return 0;
        } else{
            window.location.replace('/login')
        }
}