
let formEl = document.querySelector('.login-form');
const response = {};

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log(event.target.elements);
    // const [email, password] = event.target.elements;
    // console.log(email.value);
    // console.log(password.value);
    // response.email = email.value;
    // response.password = password.value;
    // console.log(response)
    const formData = new FormData(event.target);
    formData.forEach((value, name) => {
        if(value == '') {
            return alert('все поля должны быть заполнены');
        }
        response[name] = value;
        console.log(response);
        document.querySelector('.login-form').reset();
    });
});
