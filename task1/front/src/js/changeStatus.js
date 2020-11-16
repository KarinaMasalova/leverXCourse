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
