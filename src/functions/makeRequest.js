async function makeRequest(url, callback) {
    let response = await fetch(url).then(res => res.json());

    if ((typeof callback) === 'function') {
        callback(response);
    }
}

export { makeRequest };