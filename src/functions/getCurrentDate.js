function getCurrentDate() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1;
    var date = currentDate.getDate();
    var day = currentDate.getDay();

    if (day == 0) {
        date = date - 2;
    } else if (day == 6) {
        date = date - 1;
    }

    var month = ("0" + month).slice(-2)
    var today = year + month + date

    return today;
}

export { getCurrentDate };