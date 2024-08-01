function clock(){
        var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        // var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        var today = new Date();
        document.getElementById('date').innerHTML = (monthNames[today.getMonth()] + ' ' + today.getDate());
        var h = today.getHours();
        var m = today.getMinutes();
       
        h = h<10? '0' +h: h;
        m = m<10? '0' +m: m;
        if (h > 12){
            h = h-12;

        }
        else if( h == 0){
            h = 12;

        }
        document.getElementById('hours').innerHTML = (h);
        document.getElementById('mins').innerHTML = (m);
        
    }var inter = setInterval(clock,400);