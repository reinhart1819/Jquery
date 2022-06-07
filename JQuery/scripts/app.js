function User(email,password,fname,lname,age,address,phone,pay,color){
    this.emial= email;
    this.password= password;
    this.firstName=fname;
    this.lastName=lname;
    this.age=age;
    this.address=address;
    this.phone=phone;
    this.payment=pay;
    this.color=color;
}

function register(){
    let userName = $("#txtEmail").val()
    let userPass = $("#txtPassword").val()
    let userFirstName = $("#txtFirstN").val()
    let userLastName = $("#txtLastN").val()
    let userAge = $("#age").val()
    let userAddress = $("#age").val()
    let userPhone = $("#age").val()
    let userPay = $("#age").val()
    let userColor = $("#age").val()

    let newUser = new User (userName,userPass,userFirstName,userLastName,userAge,userAddress,userPhone,userPay,userColor)
    $('input').val("")
    console.log(newUser)

}
 
function init(){
    console.log("register")
    $("#registerBtn").click(register);
}

window.onload=init;

