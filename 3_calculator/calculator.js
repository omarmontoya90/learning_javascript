function sum() {
  let a = document.getElementById("number-a").value
  let b = document.getElementById("number-b").value

  if(a && b){
    let result = parseFloat(a) + parseFloat(b)
    document.getElementById("result").innerHTML = result
  }else{
    document.getElementById("message-error").innerHTML = "Missing numbers to operate"
  }
}

function substraction() {
  let a = document.getElementById("number-a").value
  let b = document.getElementById("number-b").value

  if(a && b){
    let result = parseFloat(a) - parseFloat(b)
    document.getElementById("result").innerHTML = result
  }else{
    document.getElementById("message-error").innerHTML = "Missing numbers to operate"
  }
}

function multiply() {
  let a = document.getElementById("number-a").value
  let b = document.getElementById("number-b").value

  if(a && b){
    let result = parseFloat(a) * parseFloat(b)
    document.getElementById("result").innerHTML = result
  }else{
    document.getElementById("message-error").innerHTML = "Missing numbers to operate"
  }
}

function division() {
  let a = document.getElementById("number-a").value
  let b = document.getElementById("number-b").value

  if(a && b){
    let result = parseFloat(a) / parseFloat(b)
    document.getElementById("result").innerHTML = result
  }else{
    document.getElementById("message-error").innerHTML = "Missing numbers to operate"
  }
}
