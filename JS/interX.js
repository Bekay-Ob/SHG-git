var size = window.matchMedia("(max-width:600px)");
function Hidem(){
    if(size.matches)
    {
        document.getElementById("dropMenuList").style.visibility="hidden";
        document.getElementById('dropmenu').style.visibility="visible";
        document.getElementById('times').style.visibility="hidden";
        document.querySelector(".button").onclick = function() {
            document.getElementById("dropMenuList").style.visibility="hidden";
            document.getElementById('dropmenu').style.visibility="visible";
            document.getElementById('times').style.visibility="hidden";
        }
    }
    else{
        document.getElementsByClassName('MenuIcons').style.visibility="hidden";
        document.getElementById('dropMenuList').style.visibility="hidden";
    }

}
function Showm(){
    if(size.matches)
    {
        document.getElementById('dropmenu').style.visibility="hidden";
        document.getElementById('times').style.visibility="visible";
        document.getElementById("dropMenuList").style.visibility="visible";
        document.querySelector(".button").onclick = function() {
            document.getElementById("dropMenuList").style.visibility="hidden";
            document.getElementById('dropmenu').style.visibility="visible";
            document.getElementById('times').style.visibility="hidden";
        }
    }
    else{
        document.getElementsByClassName('MenuIcons').style.visibility="hidden";
        document.getElementById('dropMenuList').style.visibility="hidden";
    }

}