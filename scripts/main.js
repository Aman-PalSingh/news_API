async function apiCall(url) {


    //add api call logic here
    try {
    let res = await fetch(url);
    let data = await res.json();
    return data;       
    }
    catch (error) {
        console.log('error:', error)
        
    }



}


function appendArticles(articles, main) {

    //add append logic here
    articles.forEach((elem) => {
    
        var div = document.createElement("div");
        let image = document.createElement("img");      
        let headline = document.createElement("h3");
        let description = document.createElement("p");
        image.src = elem.urlToImage;
        headline.innerText = elem.title;
        description.innerText = elem.description;
        div.onclick = () => {
    //        console.log(elem)
            localStorage.setItem("article", JSON.stringify(elem))
            window.location.href = "./news.html";

        };
        div.append(image, headline, description);
        main.append(div)
        
    })



}

export { apiCall, appendArticles }

