document.getElementById('LogIn').addEventListener("click", () => {
    let value = false;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    let users = JSON.parse(localStorage.getItem('All_users'));
    console.log(users);
    if (users != null) {
        for (i = 0; i < users.length; i++) {
            if (users[i].name == username) {
                if (users[i].pass == password) {
                    value = true;
                }
            }
            if (value == true) {
                alert('Login Succesfully');
                var a = document.getElementById('log'); //or grab it by tagname etc
                a.href = "language.html"

                return;
            }
        }
        if (value == false) {
            alert('Incorrect Name and Password. You can sign Up if uh r visiting for the first Time');
        }
    }
    else {
        alert('User not exist');
    }

})