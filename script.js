let email=document.getElementById("email");
let password=document.getElementById("password");
let btn=document.getElementById("btn");

email.addEventListener("input",()=>{
    let email_err=document.getElementById("email_err");
    if(email.value.length<=3 || !email.value.includes('@') || !email.value.includes('.')){
        email_err.textContent="Make sure email is more than 3 charactor and has @ and a."
        email_err.style.color="red"    
    }
    else{
        email_err.innerHTML=""
        email_err.style.color="green"
        email_err.textContent = "All good to go!";
    }
})
password.addEventListener("input",()=>{
    let password_err=document.getElementById("password_err");
    if(password.value.length<8 ){
        password_err.textContent="Make sure password is more than 8 charactor"
        password_err.style.color="red"
    }
    else{
        password_err.innerHTML=""
        password_err.style.color="green"
        password_err.textContent = "All good to go!";
    }
})

btn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    let email_err = document.getElementById("email_err").textContent;
    let password_err = document.getElementById("password_err").textContent;

    // Check if there are no error messages
    if (email_err === "All good to go!" && password_err === "All good to go!") {
        let confirmation = confirm("Are you sure you want to submit?");
        if (confirmation) {
            alert("Successful signup!");
            window.location.reload();
        } else {
             // Reload the page
             window.location.reload();
        }
    } else {
        alert("Please fix the errors in the form before submitting.");
        window.location.reload(); // Reload the page to clear inputs
    }
});


