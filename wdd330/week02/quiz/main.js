document.getElementById('welcome').innerHTML = "Welcome to Quiz Ninja!";

const buttonAction = document.getElementById('action');

const onClick = () => {
    document.getElementById("feedback").innerHTML = "You answered: " + document.getElementById("answer").value;
}

buttonAction.addEventListener('click', onClick);
