// connecting file 
function openNewFile() {
    window.open("blog.html", "_blank");
}
// back front page 
document.getElementById("back-btn").addEventListener("click", function(e){
    window.location.href = "index.html"
})