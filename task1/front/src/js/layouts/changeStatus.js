import { fetchRegisteredUsersLogin, fetchStatus } from '../repository';
import { mapLoginInTable } from '../mapping';
import styles from '../../sass/style.css';

const registeredUsersTableBody = document.getElementById('status-table-tbody');
const registeredUserTemplate = document.getElementById('registeredUser').textContent;

let users;

const createRegisteredUser = (template, user) => {
    registeredUsersTableBody.innerHTML += mapLoginInTable(template, user);
};

const createUser = (user) => {
    createRegisteredUser(registeredUserTemplate, user);
};

fetchRegisteredUsersLogin()
    .then((data) => {
        users = data.users;
        users.map((user) => createUser(user));
    })
    .catch(err => console.log(err));

window.changeStatus = function(login, status) {
    const body = {
        login: login,
        status: status
    }
    fetchStatus(body)
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err));
}

window.colorButtonByClick = function(eventTarget, userStatus, buttonName, login) {
    const statusButtons = document.getElementById(`status-buttons-${login}`);
    Array.from(statusButtons.children).forEach((button) => { // Array.from() convert an array-like structure to an actual array
        let isColored = button.classList.contains('status-button_colored');
        if (userStatus !== buttonName && isColored) {
            button.value = buttonName;
            button.classList.add('status-button_bordered');
            button.classList.remove('status-button_colored');
            eventTarget.classList.add('status-button_colored');
        }
    });
}

export default changeStatus;