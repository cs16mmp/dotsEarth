var _monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function generateAppointments(clinic_id, days ) {

    var appointment = {
        appointment_id:'EMPTY',
        clinic_id:'',
        time:'',
        created_at:'',
        date:'',
        band:1,
    }

    appointment.created_at = new Date().getTime()
    appointment.clinic_id = clinic_id;

    //return selectClinic(appointment);

    return generateTime(appointment, days)
}
function selectClinic(appointment) {

    const _clinicsID = ["SE10UN", "W1D6AE", "0W67AL"]
    var result = [];

    for (let index = 0; index < _clinicsID.length; index++) {
        appointment.clinic_id = _clinicsID[index]
        result.push({ ...generateTime(appointment) })
    }
    return result;
}
function toHumanTime(time) {

    let dateObject = new Date(time);

    const hours = dateObject.getHours()
    const minutes = dateObject.getMinutes()
    const date = dateObject.getDate()
    const day = _daysArray[dateObject.getDay()]
    const month = _monthsArray[dateObject.getMonth()]
    const year = dateObject.getFullYear()

    return hours + ":" + minutes + " - " + date + "/" + month + "/" + year
}
function generateTime(appointment, days) {

    var result = [];
    var tempAppointment = [];

    const _today = new Date (Date.now())

    var hourTimeStamp;
    var dayTimeStamp = (new Date(_today.getFullYear(), _today.getMonth(), _today.getDate(), "08", "30").getTime()); //Today 8:30
    const oneDay = 86400 * 1000;
    const oneHour = 3600 * 1000;
    

    for (let i = 0; i < days; i++) { //Add a day

        hourTimeStamp = dayTimeStamp;
        for (let j = 0; j < 8; j++) { //Add an hour

            appointment.time = hourTimeStamp

            appointment.date = toHumanTime(hourTimeStamp)

            result.push({...appointment})

            hourTimeStamp = hourTimeStamp + oneHour

        }
        dayTimeStamp = dayTimeStamp + oneDay
    }
    return result;
}

export default generateAppointments

