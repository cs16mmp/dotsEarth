var _daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var _monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var _data = [];

let _today = Date.now()

var _day = {
    id:"",
    time:"",
    date:"",
    day:"",
    month:""
}
var _days = []

// function CalendarData(days) {
//         for (let index = 0; index < days; index++) {

//             _today = _today + 8.64e+7 // Add one day 
//             var dateObject = new Date(_today)
//             var newData = {
//                 id: index,
//                 date: dateObject.getDate(),
//                 day: _daysArray[dateObject.getDay()],
//                 month: _monthsArray[dateObject.getMonth()]
//             }
//             _data.push(newData)
//         }
//         return _data;
// }

function CalendarData(numberDays){
    
   let _date = new Date(_today)
    
    var _todayTime = new Date(_date.getFullYear(), _date.getMonth(), _date.getDay()).getTime()
    

    for (let index = 0; index < numberDays; index++) {
 
        var _todayObject = new Date(_todayTime)

        _day = {
            id: index,
            time: _todayTime,
            date: _todayObject.getDate(),
            day: _daysArray[_todayObject.getDay()],
            month: _monthsArray[_todayObject.getMonth()] 

        }
        _todayTime = _todayTime + (86400 * 1000) // Add one day
        _days.push(_day)       
    }
    return _days
}

export default CalendarData;