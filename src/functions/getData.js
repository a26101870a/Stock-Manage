function getData(url) {
    let copyObj;

    fetch(url)
        .then(res => res.json())
        .then(res => copyObj = res)
        .catch(error => console.log(error))

    return copyObj;
}

export { getData };