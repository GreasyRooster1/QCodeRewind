const loginButton = document.querySelector(".login-button");
const usernameInput = document.querySelector(".username-input");
const passwordInput = document.querySelector(".password-input");

const authErrorDisplayWrapper = document.querySelector(".auth-error");
const authErrorContent = document.querySelector(".auth-error-message");

let returnURL = "../";

loginButton.addEventListener("click", function(){
    let username = usernameInput.value;
    let password = passwordInput.value;

    firebase.auth().signInWithEmailAndPassword(extractEmailFromUsername(username), password)
        .then((userCredential) => {
            console.log("logged in user");
            storeUser(userCredential.user);
            window.location.replace(returnURL);
        })
        .catch((error) => {
            displayAuthErrors(handleAuthErrors(error));
        });
});

function showAuthError(msg){
    authErrorDisplayWrapper.style.display = "block"
    authErrorContent.innerHTML = msg;
}


//todo: create users
function createUserData(user) {
    database.ref('userdata/' + user.uid).set({
        badges:{
            0:{id:"user"}
        },
        projects:{},
        username:usernameInput.value,
    });
}

function getReturnURL(){
    const searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has("retUrl")) {
        returnURL = atob(searchParams.get("retUrl"));
    }
}

getReturnURL();