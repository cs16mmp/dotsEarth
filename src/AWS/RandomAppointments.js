

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

    let date = new Date(time * 1000);

    var humanHours = date.getHours()
    var humanMinutes = date.getMinutes()

    return humanHours + ":" + humanMinutes
}
function generateTime(appointment, days) {

    var result = [];
    var tempAppointment = [];

    var hourTimeStamp;
    var dayTimeStamp = 1582965000; //29 - 08:30
    const oneDay = 86400;
    const oneHour = 3600;

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

export default {
    generateAppointments,
}

