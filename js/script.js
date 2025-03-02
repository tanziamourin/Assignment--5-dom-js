const completeButtons= document.querySelectorAll(".btn-cm");

for(let i = 0; i < completeButtons.length; i++){
    const completeBtn= completeButtons[i];

// complete button , alert

completeBtn.addEventListener("click", function(event) {
    completeBtn.setAttribute("disabled", true);
    alert("Board Updated Successful...");

    const completeTask = completeBtn.getAttribute("disabled") === "true" ? 1 : 0;
    const CurrentTask = parseInt(document.getElementById("task-assigned").innerText);
    const TotalCompletejob = parseInt(document.getElementById("total-complete-job").innerText);
    const remainingTask = CurrentTask - completeTask;

    if (remainingTask === 0) {
        alert("Congrats!! You have completed all the current tasks");
    }

    document.getElementById("task-assigned").innerText = remainingTask;
    const numOfCompleteJob = TotalCompletejob + completeTask;
    document.getElementById("total-complete-job").innerText = numOfCompleteJob;

    const taskTitle = document.querySelectorAll(".task-title")[i].innerText;

    // Get the current local time
    const currentTime = new Date().toLocaleTimeString();

    // Task log activity
    const taskLog = document.getElementById("task-log");

    const div = document.createElement("div");
    div.innerHTML = `
        <div class="bg-[#F4F7FF] p-4 text-justify rounded-lg space-y-3 logs">
            <p>You have completed the "${taskTitle}" at ${currentTime}</p> 
        </div>
    `;

    taskLog.appendChild(div);
});

}
// clear-log (removeing job)

document.getElementById("clear-logs").addEventListener("click", function () {
    const logs = document.querySelectorAll(".logs:not(.hidden)"); 

    if (logs.length > 0) {
        logs[0].classList.add("hidden"); 
       
        let totalCompleteJob = document.getElementById("total-complete-job");
        let count = parseInt(totalCompleteJob.innerText); 

        if (count > 0) {
            totalCompleteJob.innerText = count - 1; 
        }
    }
});



