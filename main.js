(async () => {
    let questions = await API.getData()
    let quiz = makeQuiz(questions)

    const mainH = document.querySelector(".container h1");
    const options = document.querySelectorAll(".option")

    startQuiz()

    function startQuiz() {
        let currentQuestion = quiz.getCurrentQuestion()
        mainH.innerHTML = currentQuestion.text
        currentQuestion.options.forEach((option, index) => {
            options[index].innerHTML = option;
            options[index].onclick = checkAns;
        })
    }

    function checkAns() {
        let answer = this.innerHTML
        quiz.checkAnswer(answer)

        if (!quiz.isEnd()) {
            startQuiz()
        }
    }
})()





