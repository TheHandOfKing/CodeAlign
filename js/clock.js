function startTime(){
    var vreme = new Date();
    var h = vreme.getHours();
    var m = vreme. getMinutes();
    var s = vreme.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById("clock").innerHTML = h + ":" + m +  ":" + s;
    var t = setTimeout (startTime, 900);
}
    function checkTime(i){
       if( i < 10 ){
           i = "0" + i ;
       }
        return i;
    }