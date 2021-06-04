/*
    CIT 281 Project 1
    Name: Alex Salazar
*/
function one(day) {
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
let two = day.getDay();
return days[two];
}
let day = new Date()
let weekday = one(day)
console.log(weekday)