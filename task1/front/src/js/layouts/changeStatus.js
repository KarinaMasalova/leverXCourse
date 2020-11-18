import { fetchRegisteredUsersLogin, fetchStatus } from '../repository';
import { mapLoginInTable } from '../mapping';
import styles from '../../sass/style.css';

const registeredUsersTableBody = document.getElementById('status-table-tbody');
const registeredUserTemplate = document.getElementById('registeredUser').textContent;

let users;

const createRegisteredUser = (template, user) => {
    registeredUsersTableBody.innerHTML += mapLoginInTable(template, user);
    // registeredUsersTableBody.getElementById(`status-button-user-${user.login}`).addEventListener('click', () => {
    //     console.log(user);
    // });
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

export default changeStatus;