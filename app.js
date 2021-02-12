async function fetchAllData() {
    fetch('https://martin04-xmeme-api.herokuapp.com/memes')
    .then(res => {
        if(!res.ok){
            throw Error("ERROR");
        }
        return res.json();
    })
    .then(data => {
        const html = data.memes.map(meme => {
            return `
                <div class="user">
                    <hr id="rule">
                    <p>Meme Owner : ${meme.name}</p>
                    <p>Caption : ${meme.caption}</p>
                    <p><a href="https://martin04-xmeme-api.herokuapp.com/memes/${meme._id}"><img src="${meme.url}"></a></p>
                </div> 
            `;
        })
        .reverse()
        .join('');
        document.querySelector("#app").insertAdjacentHTML("afterend", html);
       
    })
    .catch(err => {
        console.log(err);
    })
}

fetchAllData();