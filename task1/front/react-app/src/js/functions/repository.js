const baseUrl = 'http://localhost:5000';
const oneEmployeeRequestByIdURL = (id) => `${baseUrl}/${id}`;
const filteredEmployeesRequestURL = (inputValue) => `${baseUrl}/filter?inputValue=${inputValue}`;
const registrationUrl = `${baseUrl}/register`;
const authorizationUrl = `${baseUrl}/authorize`;
const registeredUsersUrl = `${baseUrl}/registeredUsers`;
const changeStatusUrl = `${baseUrl}/changeStatus`;

/* request wrapper */
function fetchGetRequest(url, method = 'GET') {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json'; // equal to JSON.parse()
        xhr.open(method, url);
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }
        xhr.onerror = () => {
            reject(xhr.response);
        }
        xhr.send();
    });
}

function fetchPostRequest(url, body, method = "POST") {
    const headers = { 'Content-Type': 'application/json' };
    return fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .catch(err => console.log(err));
}

const fetchRegistration = (body) => {
    return fetchPostRequest(registrationUrl, body);
}

const fetchAuthorization = (body) => {
    return fetchPostRequest(authorizationUrl, body);
}

const fetchStatus = (body) => {
    return fetchPostRequest(changeStatusUrl, body);
}

const fetchOneEmployee = (id) => {
    return fetchGetRequest(oneEmployeeRequestByIdURL(id));
}

const fetchAllEmployees = () => {
    return fetchGetRequest(baseUrl);
}

const fetchFilteredEmployees = (filter) => {
    return  fetchGetRequest(filteredEmployeesRequestURL(filter));    
};

const fetchRegisteredUsersLogin = () => {
    return fetchGetRequest(registeredUsersUrl);
}

export { fetchRegistration, fetchAuthorization, fetchStatus, fetchAllEmployees,
    fetchOneEmployee , fetchFilteredEmployees, fetchRegisteredUsersLogin };
