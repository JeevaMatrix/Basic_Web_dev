date = document.getElementById('date')
month = document.getElementById('month')
year = document.getElementById('year')
day = document.getElementById('day')

hour = document.getElementById('hr')
mins = document.getElementById('mins')
secs = document.getElementById('secs')
ampm = document.getElementById('ampm')

function dt(){
    let dp = new Date();
    let hr = dp.getHours();
    let min = dp.getMinutes();
    let sec = dp.getSeconds();
    let dat = dp.getDate();
    let mon = dp.getMonth();
    let yr = dp .getFullYear()
    let days = dp.getDay()

    date.innerHTML = dat;
    month.innerHTML = mon+1;
    year.innerHTML = yr;
    day.innerHTML = fordays(days);

    if (hr>12){
        ampm.innerHTML = 'PM'
        hr = hr-12;
    }
    hour.innerHTML = padzero(hr);
    mins.innerHTML = padzero(min);
    secs.innerHTML = padzero(sec);
}

setInterval(dt,500)

function padzero(num){
    return num<10?'0'+num:num;
}

function fordays(d){
    switch(d){
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday';
        case 7:
            return 'sunday';
    }
}