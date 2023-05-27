const UsersData = [
    {
      email: "nest@gmail.com",
      password: "hey123",
    }
  ];
  function Login() {
    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPass").value;
  
    for (let i = 0; i < UsersData.length; i++) {
      if (UsersData[i].email == email && UsersData[i].password == pass) {
        foundUsers = true;
        console.log("Logged in successfully");
        window.location.replace("./2p.html");
      }
    }
    if (!foundUsers) {
      alert("таны имэйл эсвэл нууц үг буруу байна!");
    }
  }