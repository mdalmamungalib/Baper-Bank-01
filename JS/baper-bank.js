document.getElementById("btn-submit").addEventListener("click", function(){
    const userEmail = document.getElementById("user-email");
    const email = userEmail.value;
    // console.log(email);

    const userPassword = document.getElementById("user-password");
    const password = userPassword.value;
    // console.log(password);

    if( email === "mdalmamungalib3929@gmail.com" && password === "mamun3929"){
        // console.log("valid user");
        window.location.href = "bank.html";
    }
    else{
        alert ( "Tui Password vula gasis. Toka ami tajjo putro korlam!!!!")
    }
});