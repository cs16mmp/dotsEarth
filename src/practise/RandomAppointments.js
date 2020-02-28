function generateAppointments(args) {

    var appointment = {
        user_id: '',
        appointment_id: '',
        clinic_id: '',
        band: 1,
        time: '',
        created_at: ''
    }

    appointment.created_at = new Date().getTime()
    appointment.clinic_id = args;

    //return selectClinic(appointment);

    return generateTime(appointment)
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

function generateTime(appointment) {

    var result = [];
    var tempAppointment = [];

    var hourTimeStamp;
    var dayTimeStamp = 1582965000; //29 - 08:30
    const oneDay = 86400;
    const oneHour = 3600;

    for (let i = 0; i < 4; i++) { //Add a day

        hourTimeStamp = dayTimeStamp;
        for (let j = 0; j < 8; j++) { //Add an hour

            appointment.time = hourTimeStamp

            appointment.appointment_id = Math.floor((Math.random() * 10000000) + 1)

            appointment.user_id = Math.floor((Math.random() * 10000000) + 1)

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

