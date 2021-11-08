
body {
    background-image: url("station.jpg");
    background-size: cover;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    text-align: center;
}

h1 {
    margin-top: 10px;
    margin-bottom: 10px;
}

h2 {
    font-size: 50px;
    margin-top: 0;
    margin-bottom: 20px;
}


let countEl= document.getElementById("count-el")
console.log(countEl)
let count=0

function increment() {
    count += 1;
    countEl.innerText = count
    console.log(count);

}