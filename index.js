// Add your code here

function submitData(name, email){
  
   let userInfo =  {
      "name": name,
      "email": email
    }
  
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userInfo)
  }
  return fetch("http://localhost:3000/users", configObj)
  .then(resp => resp.json())
  .then(json => renderUser(json.id))
  .catch(function(error) {
    document.body.innerHTML = "Unauthorized Access"
    console.log(error)
  })
}

function renderUser(info){
  console.log(info)
  document.body.innerHTML = info
}
