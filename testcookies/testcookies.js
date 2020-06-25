var calendar;
var real_calendar=new Array;
var beers;
var real_beers=new Array;


function createcookie(){
	/* alert(document.cookie);
	document.cookie= "myarray=['1','2','3']";
	*/
}


function viewCookie(){
		var cookiearray=document.cookie.split(';');
		for(i=0;i<cookiearray.length;i++){
			//alert("value of "+i+": "+cookiearray[i]);
		}
		calendar=cookiearray[0].substr(9);
		calendar=Array.from(calendar);

		beers=cookiearray[1].substr(7);
		beers=Array.from(beers);

		var counter=0;
		var last_value="";
		
		for (i=0;i<calendar.length;i++){
			if (calendar[i]!="[" && calendar[i]!="]" && calendar[i]!=","){
						if (calendar[i]=="'"){
							if (counter==1){
								counter=0;

								real_calendar.push(last_value);
								last_value="";

							}
							else{
								counter=1;
								
							}
							
						}
						else{
							
							
							last_value=last_value+calendar[i];
						}
						
				
			}
			
		}



		for(i=0;i<real_calendar.length;i++){
			alert ("real_calendar["+i+"]: "+real_calendar[i]);
		}


		var counter=0;
		var last_value="";
		
		for (i=0;i<beers.length;i++){
			if (beers[i]!="[" && beers[i]!="]" && beers[i]!=","){
						if (beers[i]=="'"){
							if (counter==1){
								counter=0;
								
								real_beers.push(last_value);
								last_value="";

							}
							else{
								counter=1;
								
							}
							
						}
						else{
							
							
							last_value=last_value+beers[i];
						}
						
				
			}
			
		}

		for(i=0;i<real_beers.length;i++){
			alert ("real_beers["+i+"]: "+real_beers[i]);
		}
}

function changeCookie(){
	document.cookie="calendar=['1','22','33333']";
	document.cookie="beers=['guinness','voll-damm','amstel']";
	alert(document.cookie);
}

function deleteCookie(){
	document.cookie="";
	document.cookie="calendar=";
	document.cookie="beers=";
}