const signupname = document.querySelector(".signupname");
const signupemail = document.querySelector(".signupemail");
const signuppassword = document.querySelector(".signuppassword");
const confirmpassword = document.querySelector(".confirmpassword");
const signupbutton = document.querySelector(".signup");
// const signinname = document.querySelector(".signinname");
// const signinpassword = document.querySelector(".signinpassword");
// const loginButton = document.querySelector(".login");
const sigupemailissue = document.querySelector(".sigupemailissue");
const siguppasswordissue = document.querySelector(".siguppasswordissue");
const confirmpasswordissue = document.querySelector(".confirmpasswordissue");


signupbutton.addEventListener("click", () => {
    if( signupname.value === '' ||
        signupemail.value === '' ||
        signuppassword.value === '' ||
        confirmpassword.value === ''){
    alert('please fill out complete fields');
    return;
}
    if(signuppassword.value != confirmpassword.value){
        confirmpasswordissue.innerHTML = "password doesn't match";
        siguppasswordissue.innerHTML = "password doesn't match";
        return;
    }
    if(!signupemail.value.includes("@")){
        sigupemailissue.innerHTML = "email should contain @";
        return;
    }
    if(signuppassword.value.length < 8 || confirmpassword.value.length < 8){
        confirmpasswordissue.innerHTML = "password length should be atleast 8 characters";
        return;
    }

    sigupemailissue.innerHTML = "";
    confirmpasswordissue.innerHTML = "";
    siguppasswordissue.innerHTML = "";
});

// loginButton.addEventListener("click", () => {
//     if( signinname.value === '' ||
//         signinpassword.value === ''){
//     alert('please fill out complete fields');
//     return;
// }
// });