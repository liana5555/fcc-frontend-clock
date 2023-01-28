
function creating_string(minutes, seconds) {

    let seconds_string;
    let minutes_string;

    if (seconds < 10) {
        seconds_string = "0" + seconds
    }
    else {
      seconds_string = seconds
    }


    if (minutes < 10) {
        minutes_string = "0" + minutes
    }
    else{
      minutes_string = minutes
    }

    return (minutes_string + ":" + seconds_string)

}





const time = new Date()

const start = new Date(Date.now())


const end= new Date(start.getTime() + 9*60*1000)

//console.log(start)

//console.log(end)

//console.log(end.getTime() - start.getTime())

//console.log((((end.getTime() - start.getTime())/1000)/60) + ":" + ((end.getTime() - start.getTime())/1000)%60 )

let minutes = ((end.getTime() - start.getTime())/1000)/60
let seconds = ((end.getTime() - start.getTime())/1000)%60 
/* 
let seconds_string;
let minutes_string;

if (seconds < 10) {
    seconds_string = "0" + seconds
}

if (minutes < 10) {
    minutes_string = "0" + minutes
}

*/


//console.log("remaining time " + minutes_string + ":" + seconds_string)



while (minutes !== 0 && seconds >= 0) {
        let currenttime = new Date(Date.now())
        minutes = Math.floor(((end.getTime() - currenttime.getTime())/1000)/60)
        seconds = Math.floor(((end.getTime() - currenttime.getTime())/1000)%60)
        if (((end.getTime() - currenttime.getTime())%1000) === 0) {
            console.log(creating_string(minutes, seconds))
        } 
        

        
}






