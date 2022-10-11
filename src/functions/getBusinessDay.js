export default function getBusinessDay() {
    const holiday = ['20221010', '20230102']

    var businessDay = new Date();

    if (businessDay.getHours() < 14) {
        businessDay.setDate(businessDay.getDate() - 1);
    }

    if (businessDay.getDay() === 6) {
        businessDay.setDate(businessDay.getDate() - 1);
    } else if (businessDay.getDay() === 0) {
        businessDay.setDate(businessDay.getDate() - 2);
    }

    var year = businessDay.getFullYear();
    var month = businessDay.getMonth() + 1;
    var date = businessDay.getDate();

    var month = ('0' + month).slice(-2)
    var date = ('0' + date).slice(-2)

    businessDay = year + month + date


    switch (businessDay) {
        case holiday[0]:
            businessDay = '20221007';
            return businessDay
        case holiday[1]:
            businessDay = '20221230';
            return businessDay
        default:
            return businessDay
    }
}