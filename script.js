function validate(){
  var reg=document.getElementById('reg').value
  var Regregx=/^[0-9]{2}[A-Z]{3}[0-9]{4}/
  var result=Regregx.test(reg)
  if(result == "false")
    alert('Registration Number is not Valid')
}