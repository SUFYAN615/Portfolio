function run() {

  let username= document.getElementById("name").value
  let email =document.getElementById("email").value
  let message = document.getElementById("message").value

  document.getElementById("name").value =""
  document.getElementById("nameerror").innerHTML = ""


  document.getElementById("email").value =""
  document.getElementById("emailerror").innerHTML = ""

  document.getElementById("message").value =""
  document.getElementById("msgerror").innerHTML = ""

  let isvalid = true


  if(username === ""){
      document.getElementById("name").style.border="1px solid red"
      document.getElementById("nameerror").innerHTML = "this field is rquired"
      isvalid =false
  }

    if(email === ""){
      document.getElementById("email").style.border="1px solid red"
      document.getElementById("emailerror").innerHTML = "this field is rquired"
      isvalid =false
  }

    if(message === ""){
      document.getElementById("message").style.border="1px solid red"
      document.getElementById("msgerror").innerHTML = "this field is rquired"
      isvalid=false
  }

  if(isvalid){
    alert("success")
document.getElementById("name").value=""
document.getElementById("email").value=""
document.getElementById("message").value=""


console.log(username)
console.log(email)
console.log(message)

  }


}