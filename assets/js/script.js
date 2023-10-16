// console.log('hi');
var fetchBtn = document.querySelector('.fetchData');
var data = [];

fetchBtn.addEventListener('click', generateItems);

function handler() {
    // initiating xhr object
    var xhr = new XMLHttpRequest();

    // open the object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    // when the response is ready
    xhr.onload = function () {
        data = JSON.parse(this.response);
        // console.log(data);
        var content = document.querySelector('.content');
        var title = '';
        for (let i = 0; i < 6; i++) {
            title += `<li>
            <h1>${i + data[i].title}</h1>
            <p>${i + data[i].body}</p>
            </li>`;
        }
        content.innerHTML = title;
    }
    // send the request to the server
    xhr.send();
}

handler();

var initialValue = 6;

function generateItems() {

    var endValue = initialValue + 6;

    content = document.querySelector('.content');
    title = '';

    for (let i = initialValue; i < endValue && i < data.length; i++) {
        title += `<li>
        <h1>${i + data[i].title}</h1>
        <p>${i + data[i].body}</p>
        </li>`;
    }
    initialValue += 6;
    content.innerHTML += title;
    console.log(endValue);
    if (endValue >= data.length) {
        fetchBtn.style.display = 'none';
    }
}