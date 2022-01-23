
    function signUp(){
        var country = document.getElementById('country').value
        var city = document.getElementById('city').value
        var username = document.getElementById('username').value
        var email = document.getElementById('email').value
        var password = document.getElementById('password').value
        // console.log(username,email,password)
        firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((res) => {
            let user = {
                username : username,
                country : country,
                city : city,
                email : email
            }
    
            console.log(user)
    
            firebase.database().ref(`Restaurant/${res.user.uid}`).set(user)
            .then(()=>
            {
                alert('Restaurent Data save in Database')
                window.location = "signin.html"
                
           })
        // console.log(data)
        // login1()
      })
      .catch((error) => {
        // var errorCode = error.code;
        var errorMessage = error.message;
         console.log(errorMessage)
         // ..
       });
    
    }
    

    // validation

    function check_city(city) {
        var message_="";
        if (city.value==="") {
            city.style.border='1px solid red';
            message_city="Please enter city name !";
            document.getElementById('message_city').innerHTML=message_city;
            return 0;
        } else {
            city.style.border='1px solid green';
            message_city="";
            document.getElementById('message_city').innerHTML=message_city;
            return 1;
        }
    }
    function check_country(country) {
        var message_="";
        if (country.value==="") {
            country.style.border='1px solid red';
            message_country="Please enter country name !";
            document.getElementById('message_country').innerHTML=message_country;
            return 0;
        } else {
            country.style.border='1px solid green';
            message_country="";
            document.getElementById('message_country').innerHTML=message_country;
            return 1;
        }
    }

function check_username(username) {
    var message_username="";
    if (username.value==="") {
        username.style.border='1px solid red';
        message_username="Please enter Restaurant name !";
        document.getElementById('message_username').innerHTML=message_username;
        return 0;
    } else {
        username.style.border='1px solid green';
        message_username="";
        document.getElementById('message_username').innerHTML=message_username;
        return 1;
    }
}

function validateEmail(email) {
    var re_mail = /^[a-zA-Z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+(\.[a-zA-Z]+)*$/;
    return re_mail.test(email);
}

function check_email(mail) {
    var message_mail="";
    if (mail.value==="") {
        mail.style.border='1px solid red';
        message_mail="Please enter your Email !";
        document.getElementById('message_mail').innerHTML=message_mail;
        return 0;
    } else if (!validateEmail(mail.value)) {
        mail.style.border='1px solid red';
        message_mail="Email invalid !";
        document.getElementById('message_mail').innerHTML=message_mail;
        return 0;
    } else {
        mail.style.border='1px solid green';
        message_mail="";
        document.getElementById('message_mail').innerHTML=message_mail;
        return 1;
    }
}


function check_password(password) {
    var message_password="";
    if (password.value==="") {
        password.style.border='1px solid red';
        message_password="Please enter your password !";
        document.getElementById('message_password').innerHTML=message_password;
        return 0;
    } else if (password.value.length < 6) {
        password.style.border='1px solid red';
        message_password="Passwords must be at least 6 characters long";
        document.getElementById('message_password').innerHTML=message_password;
        return 0;
    } else {
        password.style.border='1px solid green';
        message_password="";
        document.getElementById('message_password').innerHTML=message_password;
        return 1;
    }
}


    function check5(){
        var username = document.getElementById('username');
        var country = document.getElementById('country');
        var city = document.getElementById('city');
       var email = document.getElementById('email');
       var password = document.getElementById('password');
        check_username(username);
       if (check_username(username)==0) {
           return;
       };
       check_country(country);
       if (check_country(country)==0) {
           return;
       };
       check_city(city);
       if (check_city(city)==0) {
           return;
       };
       check_email(email);
       if (check_email(email)==0) {
           return;
       };
       check_password(password);
       if (check_password(password)==0) {
           return;
       };
       // window.location.reload(); //Refresh page
       signUp()
   }