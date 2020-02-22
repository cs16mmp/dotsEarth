var _daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var _monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var _data = [];
let _today = Date.now()

function CalendarData(days) {
        for (let index = 0; index < days; index++) {

            _today = _today + 8.64e+7 // Add one day 
            var dateObject = new Date(_today)
            var newData = {
                id: index,
                date: dateObject.getDate(),
                day: _daysArray[dateObject.getDay()],
                month: _monthsArray[dateObject.getMonth()]
            }
            _data.push(newData)
        }
        return _data;
}
export default CalendarData;