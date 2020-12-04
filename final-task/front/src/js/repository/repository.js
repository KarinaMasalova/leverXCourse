const baseUrl = 'http://localhost:5000';
const oneRequestCardByIdUrl = (id) => `${baseUrl}/${id}`;
const addingRequestUrl = `${baseUrl}/add`;

function fetchGetRequest(url, method = 'GET') {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json'; // equal to JSON.parse()
        xhr.open(method, url);
        xhr.onload = () => {
            if (xhr.status >= 400) reject(xhr.response);
            else resolve(xhr.response);
        }
        xhr.onerror = () => reject(xhr.response);
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

const fetchOneRequestCard = (id) => {
    return fetchGetRequest(oneRequestCardByIdUrl(id));
}

const fetchAllRequestCards = () => {
    return fetchGetRequest(baseUrl);
}

const fetchAddingRequest = (body) => {
    return fetchPostRequest(addingRequestUrl, body);
}

export { fetchOneRequestCard, fetchAllRequestCards, fetchAddingRequest };
