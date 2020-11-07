function getCityTime(city){
    time = document.getElementById('time');
    date = document.getElementById('date');
    //testowa zmiana

    var d = new Date();
    var timezone = d.getTimezoneOffset();

    switch(city){
        case 'Lublin': timezone+=(1*60); break //strefa GMT+1
        case 'Nowy York': timezone-=(5*60); break //strefa GMT-5
        case 'Sydney': timezone+=(11*60); break //strefa GMT+11
        default: break;
    }
    d.setMinutes(d.getMinutes()+timezone);
    day = d.getDate();
    if(day<10) day="0"+d.getDate();
    month = d.getMonth()+1;
    if(month<10) month="0"+(d.getMonth()+1);
    year = d.getFullYear();
    hour = d.getHours();
    if(hour<10) hour="0"+(d.getHours());
    minutes = d.getMinutes();
    if(minutes<10) minutes="0"+(d.getMinutes());

    time.textContent = `Godzina: ${hour}:${minutes}`;
    date.textContent = `Data: ${day}.${month}.${year}`;
}