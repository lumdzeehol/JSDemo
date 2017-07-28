/* 
* @Author: Marte
* @Date:   2017-07-27 13:48:36
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-27 14:08:57
*/

window.onload = function(){
    var is12hour = false;

    start_clock(3,44,42);
    function start_clock(hour,min,sec){
        clock_run();
        setInterval(clock_run, 1000);
        /*时间运行函数*/
        function clock_run(){
            // var time = new Date();
            // var hour = time.getHours();
            // var min  = time.getMinutes();
            // var sec  = time.getSeconds();
            /*时间数组*/
            var time = [0,0,0,0,0,0];
            if (hour<10) {
                time[0] =  Number('0');
                time[1] =  Number(hour.toString());
            }else{
                time[0] = Number((hour.toString())[0]);
                time[1] = Number((hour.toString())[1]);
            }
            if(min<10){
                time[2] =  Number('0');
                time[3] =  Number(min.toString());
            }else{
                time[2] = Number((min.toString())[0]);
                time[3] = Number((min.toString())[1]);
            }
            if(sec<10){
                time[4] =  Number('0');
                time[5] =  Number(sec.toString());
            }else{
                time[4] = Number((sec.toString())[0]);
                time[5] = Number((sec.toString())[1]);
            }       
            for(var i = 0; i < time.length; i++){
                var timeBlock = document.getElementById('time_'+i);
                timeBlock.style.background = 'url(imgs/'+time[i]+'.png)';
            }
        }
    }
}