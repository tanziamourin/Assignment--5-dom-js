// connecting file 
function openNewFile() {
    window.open("blog.html", "_blank"); // Opens newfile.html in a new tab
}
// back front page 
document.getElementById("back-btn").addEventListener("click", function(e){
    window.location.href = "index.html"
})