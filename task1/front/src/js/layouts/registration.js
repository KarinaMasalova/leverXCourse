import { fetchRegistration } from '../repository';
import styles from '../../sass/style.css';

const saveInputValue = (inputId) => document.getElementById(inputId).value;

const register = (login, password, status) => {
    const body = {
        login: login,
        password: password,
        status: status
    }
    fetchRegistration(body)
        .then(data => console.log(data))
        .catch(err => console.log(err));
};

window.addRegisteredUserToJson = function() {
    let statusRadioButtons = document.querySelectorAll('.registration-role');
    let status;
    let login = saveInputValue('registration-login');
    let password = saveInputValue('registration-password');

    statusRadioButtons.forEach((input) => {
        if(input.checked) {
            status = input.value;
        }
    });
    register(login, password, status);
}

export default addRegisteredUserToJson;
