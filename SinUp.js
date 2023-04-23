document.getElementById("signUp").addEventListener("click", () => {
    console.log("system....");
    event.preventDefault(); // prevent form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email=document.getElementById('email').value;

    // add more fields here if needed
    let obj={
        name:username,
        pass:password,
        email:email
    }

    let detail = JSON.parse(localStorage.getItem('All_users'))
    if (detail == null) {
        detail = [];
        detail.push(obj);
    } else {
        detail.push(obj);
    }
    // console.log(details);
    localStorage.setItem('All_users', JSON.stringify(detail));
    });