const menuWrap = document.getElementById('menuWrapBox').style.display = 'none';

document.getElementById("menuButton").onclick = function(){
    menuopen()
};
document.getElementById("menuButtonClose").onclick = function(){
    menuclose(
)};
document.getElementById("nabidkaButtonClose").onclick = function(){
    nabidkaButtonClose(
)};
document.getElementById("patickaButtonClose").onclick = function(){
    patickaButtonClose(
)};
document.getElementById("myWorkButtonClose").onclick = function(){
    myWorkButtonClose(
)};


function menuopen() {
    document.getElementById("menuWrapBox").style.display = "block";
}
function menuclose() {
    document.getElementById("menuWrapBox").style.display = "none";
}
function nabidkaButtonClose() {
    document.getElementById("menuWrapBox").style.display = "none";
}
function patickaButtonClose() {
    document.getElementById("menuWrapBox").style.display = "none";
}
function myWorkButtonClose() {
    document.getElementById("menuWrapBox").style.display = "none";
}


