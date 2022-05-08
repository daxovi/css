const logo = document.getElementById("logo");

const changeText = (textElement) => {
    if (textElement.innerText.length > 0) {
        var text = textElement.innerText;
        text = text.substring(1);
        console.log(text);
        textElement.innerText = text;
        setTimeout(() => { changeText(textElement); }, 1000);
    }

    // logo.innerText = newText;
}

var opacity = 0;

function MyFadeFunction() {
    if (opacity < 1) {
        opacity += .1;
        setTimeout(function () { MyFadeFunction() }, 100);
    }
    logo.style.opacity = opacity;
}
