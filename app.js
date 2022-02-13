buttons = document.querySelectorAll('button');
var screen = document.querySelector('.hdata');
var output = document.querySelector('.odata');
let outputValue = '';
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.innerHTML = screenValue;
        }
        else if (buttonText == 'C' || buttonText=="CE") {
            screenValue = "";
			output.innerHTML = "";
            screen.innerHTML = screenValue;
        }
        else if (buttonText == '=') {
            output.innerHTML = "=  " + eval(screenValue);
			
        }
        else {
            screenValue += buttonText;
            screen.innerHTML = screenValue;
        }

    })
}