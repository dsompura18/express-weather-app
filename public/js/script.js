var a = new Date();
var realDay="", realDate="", realMonth="", realTime="";
function myDate(){
    let day = a.getDate();
    let year = a.getFullYear();
    // console.log(day);
    realDate = day;
    realyear = year;
}

function myDay() {
    var weekdays = new Array(7);
    weekdays[0] = "Sun";
    weekdays[1] = "Mon";
    weekdays[2] = "Tue";
    weekdays[3] = "Wed";
    weekdays[4] = "Thu";
    weekdays[5] = "Fri";
    weekdays[6] = "Sat";
    var r = weekdays[a.getDay()];
    // document.getElementById("myId").innerHTML = r;
    // console.log(r);
    realDay = r;
}

function myMonth(){
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

    let month = months[a.getMonth()];
    // console.log(month);
    realMonth = month;
}

function myTime(){
   let hour = a.getHours();
   let min = a.getMinutes(); 
   let period = "AM"
   if(hour > 11){
    period = "PM";
    if(hour > 12) hour -=12;
   }
   if(min < 10 ){
        min = "0" + min;
    }
    realTime = hour + ":" + min + period;
}
myDay();
myDate();
myMonth();
myTime();

var dateData = `${realDay} | ${realMonth} ${realDate} | ${realTime}`;

 var forcastDate = `${realDate} ${realMonth}, ${realyear}`;
 console.log(forcastDate);

 var forcastDay = `${realDay}`;

// document.getElementById("dateData").innerHTML = `${dateData}`;

document.querySelector(".date_").innerHTML = `${forcastDate}`;
document.querySelector(".location_").innerHTML = `${forcastDay}`;




$('#get_location').on('click', function(e){
    
        if($('#user_location').val()==''){
            console.log("empty");
        }else{
            console.log("location exist");
        }    
});