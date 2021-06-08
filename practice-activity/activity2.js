function get_score(){
    score=localStorage.getItem("score");
    document.getElementById("update").innerHTML="<h1> SCORE : " + score + "</h1>";
}

function back(){
window.location="activity_1.html";
}