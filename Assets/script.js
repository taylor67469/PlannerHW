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
var data1=$("#localD1");
var data2=$("#localD2");
var data3=$("#localD3");
var data4=$("#localD4");
var data5=$("#localD5");
var data6=$("#localD6");
var data7=$("#localD7");
var data8=$("#localD8");
var data9=$("#localD9");
var localDataArray=[
    data1,data2,data3,data4,data5,data6,data7,data8,data9
];
//data array for textarea
var times=[
    nineAm,tenAm,elevenAm,twelvePm,onePm,twoPm,threePm,fourPm,fivePm
];
//number array
var numbers=[
    num1=0,num2=0,num3=0,num4=0,num5=0,num6=0,num7=0,num8=0,num9=0,
];
var timet=0; //current time
var a =0;
var count=0;
//displays time and does everything
function displaytime(){
    var datetime=moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(datetime);
    var time=moment().format('H');
    JSON.stringify(time);
    timet=parseInt(time);
    if(timet>0){
    a=timet-9;
    checkTime();
    }
    else{
        timet=24;
        a=timet-9;
        checkTime();
    }
}
//colors rows
function checkTime(){
    if (present){
        if(timet>17){
            a=0;    
        }
        times[a].css('background-color', 'red');
        times[a].css('color', 'white');
    if(timet>=9&&timet<17 || timet ===17){
        for(let i=a+1;i<times.length;i++){
            times[i].css('background-color', 'green');
            times[i].css('color', 'white');
        }
        for (let b=a-1;b>=0;b--){
            times[b].css('background-color', 'grey');
            times[b].css('color', 'white');
        }
    }
    else if(timet>17||timet<9){
        for(let i=0;i<times.length;i++){
            times[i].css('background-color', 'green');
            times[i].css('color', 'white');
        }
    }
    }   
}
//save local data to storage
function saveToStorage(row,dataAsAString){
    count++;
    return localStorage.setItem(row,dataAsAString);
}
//get row data from storage
function getFromStorage(row){
    return localStorage.getItem(row);
}
//sets local storage
setInterval(displaytime,0);
$('.buttons1').mouseover(function(event){
    let s= event.target.id;
    let mynew=s.replace("D","");
    saveToStorage(mynew,(localDataArray[count].val()));
});
function populate(){
for (let i=1;i<localDataArray.length+1;i++){
    let test=JSON.stringify(i);
    let myStorage=getFromStorage(test);
    if(myStorage!=='null'){
        localDataArray[i-1].text(myStorage);
    }
}
}
if(localStorage.length>0){
$('.reset1').mouseover(function(event){
    let myID=event.target.id;
    let reseting=myID.replace("S","");
    if (localStorage!="")
    localStorage.removeItem(reseting);
});
}
populate();