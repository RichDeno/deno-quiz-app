let Questions = [];
const questionId = document.getElementById("questionId");

async function fetchQuestions() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=10");
        if (!response.ok) {
            throw new Error(`Something went wrong!!
        Unable to fecth the data`);
        }
        const data = await response.json();
        Questions = data.results;
    } catch (error) {
        console.log(error);
        ques.innerHTML = `<h5 style='color: red'>
        ${error}</h5>`;
    }
}
fetchQuestions();
