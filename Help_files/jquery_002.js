jQuery.countdown = function(selector, datevalue) {
		var dateFuture = datevalue;
			dateNow = new Date();
			amount = dateFuture.getTime() - dateNow.getTime();
			delete dateNow;
			// catch past dates
			if(amount < 0){
				out="";
				out += "<span class='hour'>00</span>";
				out += "<span class='minute'>00</span>";
				out += "<span class='second'>00</span>";
				$(selector).html(out);
			}

			// date is in the future, calculate the diff
			else{
				days=0;hours=0;mins=0;secs=0;out="";

				amount = Math.floor(amount/1000);//kill the "milliseconds" so just secs

				//days=Math.floor(amount/86400);//days
				//amount=amount%86400;

				hours=Math.floor(amount/3600);//hours
				amount=amount%3600;

				mins=Math.floor(amount/60);//minutes
				amount=amount%60;

				secs=Math.floor(amount);//seconds

				//if(days != 0){out += days +" D"+((days!=1)?"s":"")+" ";}
				if(days != 0 || hours != 0)
				{
					out += "<span class='hour'>"+((hours<=9)?"0"+hours:hours)+"</span>";
				}
				else if(hours==0)
				{
					out += "<span class='hour'>00</span>";
				}
				if(days != 0 || hours != 0 || mins != 0)
				{
					out += "<span class='minute'>"+((mins<=9)?"0"+mins:mins)+"</span>";
				}
				else if(mins==0)
				{
					out += "<span class='minute'>00</span>";
				}
				out += "<span class='second'>"+((secs<=9)?"0"+secs:secs) +"</span>";
				
				$(selector).html(out);

				// run it all again
				setTimeout(function() {  
					$.countdown(selector, datevalue);
				}, 1000); 
				

			}
			

	};