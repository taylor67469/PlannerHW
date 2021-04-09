var nineAm=$(".9am");
var tenAm=$(".10am");
var elevenAm=$(".11am");
var twelvePm=$(".12pm");
var onePm=$(".1pm");
var twoPm=$(".2pm");
var threePm=$(".3pm");
var fourPm=$(".4pm");
var fivePm=$(".5pm");
var before;
var present=true;
var after;
var times=[
    nineAm,tenAm,elevenAm,twelvePm,onePm,twoPm,threePm,fourPm,fivePm
];
var timecheck=0;
var timet=0;
var a =0;
function displaytime(){
    var datetime=moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(datetime);
    var time=moment().format('H');
    JSON.stringify(time);
    timet=parseInt(time);
    a =timet-9;
    checkTime();
}
function checkTime(){
    if (present){
        times[a].css('background-color', 'red');
        times[a].css('color', 'white');
    if(timet>9&&timet<17){
        for(var i=a+1;i<times.length;i++){
            times[i].css('background-color', 'green');
            times[i].css('color', 'white');
        }
        for (var b=a-1;b>=0;b--){
            times[b].css('background-color', 'grey');
            times[b].css('color', 'white');
        }
    }
    else if(timet>17||timet<9){
        for(var i=0;i<times.length;i++){
            times[i].css('background-color', 'green');
            times[i].css('color', 'white');
        }
    }
    }   
}
setInterval(displaytime,0);