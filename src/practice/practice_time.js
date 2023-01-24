const time = new Date()

const start = new Date(Date.now())


const end= new Date(start.getTime() + 9*60*1000)

console.log(start)

console.log(end)

console.log(end.getTime() - start.getTime())

console.log((((end.getTime() - start.getTime())/1000)/60) + ":" + ((end.getTime() - start.getTime())/1000)%60 )

let minutes = ((end.getTime() - start.getTime())/1000)/60
let seconds = ((end.getTime() - start.getTime())/1000)%60 
let seconds_string;
let minutes_string;

if (seconds < 10) {
    seconds_string = "0" + seconds
}

if (minutes < 10) {
    minutes_string = "0" + minutes
}


console.log("remaining time " + minutes_string + ":" + seconds_string)



