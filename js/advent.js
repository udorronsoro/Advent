/*
try to retrieve cookie calendar
if empty then
create var calendar=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
try to retrieve cookie beers
if empty then
create var beers=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']; with random beers

At this point i should have both...

while calendar !='' then display beer in each box and get first closed window number

when clicking in a window, check if its the first closed window Number
    open and display beer from Array
    mark window as opened in calendar

write cookie calendar 
write cookie beers

*/
var next_window=0;

function reloading(){
    alert("I'm initializing")
    var json_str = getCookie('calendar');
    console.log(json_str);
    if (!json_str){
        var calendar=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
        var json_str = JSON.stringify(calendar);
        createCookie('calendar', json_str);
    }
    var calendar = JSON.parse(json_str);


    var json_str = getCookie('beers');
    if (!json_str){
        var beers=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
        for (i=0;i<=32;i++){
            //the contents of this array need to be created randomly. 1-10 for a start...check later to make it out of 24.
            beers[i]=(math.floor(math.random()*10))+1
        }
    
        var json_str = JSON.stringify(beers);
        createCookie('beers', json_str);
    }
    var beers = JSON.parse(json_str);

    for(i=0;i<=32;i++){
        if (calendar[i]!=''){
            document.getElementById('td'+i).innerHTML="<img src='"+images/beers/+beers[i]+".jpg' />";
        }
        next_window=i;
    
    
    }


}

function window_click(td_id){
    alert("I clicked")
    if (td_id=='td'+next_window){
        document.getElementById(td_id).innerHTML="<img src='images/beers/beer"+beers[i]+".jpg' />";
        calendar[i]=i;
    }
    var json_str = JSON.stringify(calendar);
    createCookie('calendar', json_str);

}


