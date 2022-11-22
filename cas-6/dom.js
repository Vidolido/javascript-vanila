const buttonElement = document.getElementById('test');
console.log(buttonElement);

function changeText() {
    // event handler

    const paragraph = document.getElementById('text');
    paragraph.innerText = 'Goce'

}

buttonElement.style = 'color: blue'

// onclick event

buttonElement.onclick = changeText;