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
var present;
var after;
var times=[
    nineAm,tenAm,elevenAm,twelvePm,onePm,twoPm,threePm,fourPm,fivePm
];
var i=0;
var timet=0;
function displaytime(){
    var datetime=moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(datetime);
    var time=moment().format('H');
    JSON.stringify(time);
    timet=parseInt(time);
    checkTime();
    function checkTime(){
        if(timet>9&&timet<17){
            for(i;i<10;i++){
                times[i].css('background-color', 'green');
                times[i].css('color', 'white');
            }
        }
        else if(timet>17){
            for(i;i<10;i++){
                times[i].css('background-color', 'grey');
                times[i].css('color', 'white');
            }
        }
        else{
            times[i].css('background-color', 'red');
        }
    }

}
setInterval(displaytime,0);