import { apiCall, appendArticles } from "./main.js"
let main = document.getElementById("main")
async function  storeSearchterm(term) {
      console.log(term)
    let url = `https://shrouded-earth-23381.herokuapp.com/api/search/?q=${term}`
    let res = await fetch(url);
    let data = await res.json();
    console.log('data:', data)

 //   console.log('res:', news_data)
    appendArticles(data,main)
      
    }

let item = localStorage.getItem("search_term");
console.log(item)
storeSearchterm(item)


export default storeSearchterm
