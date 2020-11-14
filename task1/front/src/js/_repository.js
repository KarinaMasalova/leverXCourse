const allEmployeesRequestURL = 'http://localhost:5000';
const oneEmployeeRequestByIdURL = (id) => `http://localhost:5000/${id}`;
const filteredEmployeesRequestURL = (inputValue) => `http://localhost:5000/filter?inputValue=${inputValue}`;

/* request wrapper */
function fetch(url, method = 'GET') {
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

const fetchOneEmployee = (id) => {
    return fetch(oneEmployeeRequestByIdURL(id));
}

const fetchAllEmployees = () => {
    return fetch(allEmployeesRequestURL);
}

const fetchFilteredEmployees = () => {
    let inputValue = saveInputValue();
    return  fetch(filteredEmployeesRequestURL(inputValue));    
};
