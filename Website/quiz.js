
// Event Listener 
document.getElementById("sub-btn").addEventListener("click", calcScore);

// Event Function
function calcScore() {
    //Variables
    let Score = 0;
    let QuestOne = document.getElementById("quest1").value.toLowerCase();
    let QuestTwo = document.getElementById("quest2").value.toLowerCase();
    let QuestThree = document.getElementById("quest3").value.toLowerCase();
    let QuestFour = document.getElementById("quest4").value.toLowerCase();
    
    // Output
    if (QuestOne === "akron, ohio" ) {
        Score++;
    }

    if (QuestTwo === "bob mckillop") {
        Score++;
    } 

    if (QuestThree === "40") {
        Score++;
    }

    if (QuestFour === "1st" || QuestFour === "first") {
        Score++;
    }

    // Output
    let percentage = (Score/4)*100;
    document.getElementById("score").innerHTML = 'You got ' + Score + ' /4! (' + percentage + '%)';
}