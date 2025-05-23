const form = document.querySelector("form");
const signupname = document.querySelector(".signupname");
const signupemail = document.querySelector(".signupemail");
const signuppassword = document.querySelector(".signuppassword");
const confirmpassword = document.querySelector(".confirmpassword");
const signupbutton = document.querySelector(".signup");
const sigupemailissue = document.querySelector(".sigupemailissue");
const siguppasswordissue = document.querySelector(".siguppasswordissue");
const confirmpasswordissue = document.querySelector(".confirmpasswordissue");


form.addEventListener("submit", async () => {

    e.preventDefault();

    if( signupname.value === '' ||
        signupemail.value === '' ||
        signuppassword.value === '' ||
        confirmpassword.value === ''){
    alert('please fill out all fields');
    return;
}
    if(!signupemail.value.includes("@")){
        sigupemailissue.innerHTML = "email should contain @";
        return;
    }
     if(signuppassword.value.length < 8){
        confirmpasswordissue.innerHTML = "password length should be atleast 8 characters";
        return;
    }
    if(signuppassword.value != confirmpassword.value){
        confirmpasswordissue.innerHTML = "password doesn't match";
        siguppasswordissue.innerHTML = "password doesn't match";
        return;
    }
    
    sigupemailissue.innerHTML = "";
    confirmpasswordissue.innerHTML = "";
    siguppasswordissue.innerHTML = "";

   alert("your form has been submitted")

    // Now send data via fetch to backend
  const data = {
    user_name: signupname.value,
    user_email: signupemail.value,
    user_password: signuppassword.value,
  };

  try {
    const res = await fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    alert(result.message);
  } catch (error) {
    alert("Error submitting form");
  }
});


