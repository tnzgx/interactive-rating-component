let scoreList = document.getElementsByClassName("score");
    console.log(scoreList);
    for (let i = 0; i < scoreList.length; i++) {
      scoreList[i].addEventListener("blur", function (e) {
        localStorage.setItem("score", e.target.value);
        console.log(score);
      });
    }

function nextPage() {
        let score = localStorage.getItem("score");
        document.getElementById("rating").innerHTML = score;
        
        document.getElementById("first-page").style.display = "none";
        document.getElementById("second-page").style.display = "block";
}