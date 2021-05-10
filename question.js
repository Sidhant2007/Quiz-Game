class Question{
    constructor(){
    this.question = createElement('h2')
    this.option1 = createElement('h3')
    this.option2 = createElement('h3')
    this.option3 = createElement('h3')
    this.option4 = createElement('h3')
    this.input1 = createInput('name')
    this.input2 = createInput('Answer')
    this.button = createButton('Submit')
    this.title = createElement('h1')
    }

    hide(){
        this.question.hide()
        this.option1.hide()
        this.option2.hide()
        this.option3.hide()
        this.option4.hide()
        this.input1.hide()
        this.input2.hide()
        this.button.hide()
        this.title.hide()
    }

    display(){
        this.title.html("Quiz Game")
        this.title.position(350, 50)
        this.question.html("Question: What starts and ends with the letter 'E', but has only one letter????")
        this.question.position(150, 100)
        this.option1.html("1. Everyone")
        this.option1.position(150, 150)
        this.option2.html("2.Envelope")
        this.option2.position(150, 200)
        this.option3.html("3. Estimate")
        this.option3.position(150, 250)
        this.option4.html("4. Example")
        this.option4.position(150, 300)
        this.input1.position(150, 350)
        this.input2.position(350, 350)
        this.button.position(200, 400)

        this.button.mousePressed(()=>{
            this.input1.hide()
            this.input2.hide()
            this.button.hide()
            contestant.name = this.input1.value()
            contestant.answer = this.input2.value()
            contestantCount = contestantCount + 1
            contestant.index = contestantCount
            contestant.update()
            contestant.updateCount(contestantCount)
            })
    }
    


}