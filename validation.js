var input = document.querySelectorAll('input')
var regex = {
   username : /^[a-zA-Z\d_]{5,}$/,
   email : /^([a-z\d\.+-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
   password : /^[a-zA-Z\d-@_]{8,20}$/,
   telephone : /^[0-9]{10}$/,
   git : /^[a-zA-Z\d-@]{8,20}$/
}

input.forEach((item)=>{
  item.addEventListener('keyup',(e)=>{
    validate(e.target,regex[e.target.name])
  })
})

function validate(field,regex){
  if(regex.test(field.value)){
    field.className = 'valid'
  }else{
    field.className = 'invalid'
  }
}
