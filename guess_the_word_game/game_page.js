player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    get_ques = document.getElementById("word").value;
    ques = get_ques.toLowerCase();
    firstchar = ques.charAt(1);
    console.log(firstchar);
    lengthdiv2 = Math.floor(ques.length / 2);
    secondchar = ques.charAt(lengthdiv2);
    console.log(secondchar);
    lengthmin1 = ques.length - 1;
    thirdchar = ques.charAt(lengthmin1);
    console.log(thirdchar);
    remove_firstchar = ques.replace(firstchar, "_");
    console.log(remove_firstchar);
    remove_secondchar = remove_firstchar.replace(secondchar, "_");
    console.log(remove_secondchar);
    remove_thirdchar = remove_secondchar.replace(thirdchar, "_");
    console.log(remove_thirdchar);
    question = "<h4 id='word_display'> Q : " + remove_thirdchar + "</h4><br>";
    input_box = "<h4>Answer : <input id='input_answer' placeholder='Enter your answer'></h4>";
    check = "<br><button type='button' onclick='checking();' class='btn btn-info'>Check</button>";
    row = question + input_box + check;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value="";
}

question_turn = "player1";
answer_turn = "player2";

function checking() {
    get_answer = document.getElementById("input_answer").value;
    answer = get_answer.toLowerCase();
    if (ques == answer) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }
}
