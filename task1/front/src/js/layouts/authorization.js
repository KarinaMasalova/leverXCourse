import { fetchAuthorization } from '../repository';
import styles from '../../sass/style.css';

const saveInputValue = (inputId) => document.getElementById(inputId).value;

const authorize = () => {
    const body = {
        login: saveInputValue('authorization-login'),
        password: saveInputValue('authorization-password')
    }
    fetchAuthorization(body)
        .then(data => {
            sessionStorage.setItem('login', data.login);
            sessionStorage.setItem('status', data.status);
        })
        .catch(err => console.log(err));
};

window.authorize = authorize;

export default authorize;
