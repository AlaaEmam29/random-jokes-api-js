const result = document.querySelector(".result");
const btn = document.querySelector(".btn");
btn.addEventListener("click",function(){
    fetchDadJoke()
})
async function fetchDadJoke()
{
 result.innerHTML = "Loading....."

try {
const response = await fetch(`https://icanhazdadjoke.com/`,{
    headers: { Accept: "application/json",
    "User-Agent": "My Library (https://github.com/username/repo)"
}
})
const {joke} =await  response.json();   
result.innerHTML = joke
}
catch (error) {
    error.message = "There was an error..."
result.innerHTML = error.message
}


}
  
fetchDadJoke()

