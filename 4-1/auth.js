function signin(){
    const email = document.getElementById("emailSign");
    const phoneNumber = document.getElementById("numberSign");
    const pass = document.getElementById("passwordSign");
    const confir = document.getElementById("confirmSign");
    const username = document.getElementById("usernameSign");
    const emailerr = document.getElementById("emailSignErr");
    const phoneerr = document.getElementById("numberSignErr");
    const passerr = document.getElementById("passwordSignErr");
    const confirerr = document.getElementById("confirmSignErr");
    const usererr = document.getElementById("usernameSignErr");
    let valid = true;
    emailtest=/\S+@\S+.\S+/;
    if(emailtest.test(email.value)) {
        emailerr.textContent = "منيح انك خلصتنا"
    }
    else{
        emailerr.textContent = "حج حط ايميلك ولا تتخوث"
        valid = false;
    }
    if(pass.value.length >= 6 && pass.value.length <= 18){
        passerr.textContent = "ايوه هيك"
    }
    else{
        passerr.textContent = "حط كلمة سر زي العالم"
        valid = false;
    }
    if(confir.value == pass.value){
        confirerr.textContent = "تمام يا غالي"
    }
    else{
        confirerr.textContent = "يعني صرت ناسيها من هسا؟؟"
        valid = false;
    }
    if(phoneNumber.value.length==10 && phoneNumber.value.substring(0,3) == "077"){
        phoneerr.textContent = "هيك امورك طيبة ومن اورنج"
    }
    else{
        phoneerr.textContent = " يا بتتخوث علينا يا انك مش اورنج"
        valid = false;
    }
    if(username.value.length >= 3){
        usererr.textContent = "امورك ماشية"
    }
    else{
        usererr.textContent = "!يعني اسمك اقل من 3 احرف ؟"
        valid = false;
    }
    if(valid){
        var iduser = parseInt(localStorage.getItem("iduser")) || 1;
        let user = {email : email.value , phone : phoneNumber.value , password : pass.value , name : username.value , id : iduser};
        iduser++;
        localStorage.setItem("iduser",iduser);
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "login.html";
        alert("hi");
    }
}
function login(){
    const emailL = document.getElementById("emailLog").value;
    const passL = document.getElementById("passwordLog").value;
    const numL = document.getElementById("numberLog").value;
    const emailLerr = document.getElementById("EmailErr");
    const passLerr = document.getElementById("passwordErr");
    let users = JSON.parse(localStorage.getItem("users")) || [];
    emailtest=/\S+@\S+.\S+/;
    if(emailtest.test(emailL)) {
        for(i=0;i<users.length;i++){
            if(emailL == users[i].email){
                if(passL == users[i].password){
                    sessionStorage.setItem("name",users[i].name);
                    sessionStorage.setItem("id",users[i].id);
                    window.location.href = "profile.html";
                }
                else{
                    passLerr.textContent = "كلمة السر غلط يا حشم"
                }
            }
            else{
                emailLerr.textContent = "شكلو ما عندك ايميل اعمل ايميل وتعال"
            }
        }
    }
    else{
        emailLerr.textContent = "اكتب الايميل مزبوط"
    }
}
function profile (){
            const usernamee= document.getElementById("showName");
            const iduser = document.getElementById("showId");
            let name = sessionStorage.getItem("name");
            let id = sessionStorage.getItem("id");
            usernamee.textContent = `Hello ${name}`;
            iduser.textContent = `you'r id ${id}`;
}