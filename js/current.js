const showTime = document.getElementById("time-date");
// this function for navbar date 
function updateTime() {
    let now = new Date();

    let dayName = now.toLocaleDateString(undefined, { weekday: 'long' });

    let dateOptions = { day: '2-digit', month: 'long', year: 'numeric' };
    let formattedDate = now.toLocaleDateString(undefined, dateOptions);

   
    const div= document.createElement("div");
    div.innerHTML= `
        <div class="rounded-lg ">
            <p> ${dayName} ,</p>
            <p class ="font-bold text-lg">${formattedDate}</p>     
        </div>
    `
     showTime.appendChild(div);
    
    
}
updateTime();

// this function for log activitys time 
function updateLocalTime() {
    var now = new Date();
    var hours = now.getHours(); 
    var minutes = now.getMinutes();

   
    if (minutes < 10) minutes = "0" + minutes;

    var timeString = hours + ":" + minutes;

    
   document.getElementById("local-time").innerText = timeString;
   l
}

setInterval(updateLocalTime, 60000);

updateLocalTime();


       


