function makeQuiz(questions) {
    class Quiz {
        questionIndex = 0;
        score = 0
        constructor(questions) {
            this.questions = questions;
        }

        getCurrentQuestion() {
            let current = this.questions[this.questionIndex]
            let randOptions = [];
            for (let i = 0; i < 4; i++) {
                let rand = Math.floor(Math.random() * current.options.length)
                randOptions.push(current.options[rand]);
                current.options.splice(rand, 1);

            }
            current.options = randOptions
            return current

        }
        checkAnswer(answer) {
            if (this.getCurrentQuestion().answer === answer) {
                this.score = this.getCurrentQuestion().points
            }
            this.questionIndex++;

        }
        isEnd() {
            return this.questions.length === this.questionIndex
        }

    }
    return new Quiz(questions)
}

