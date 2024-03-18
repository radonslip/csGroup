class startQuiz extends Phaser.Scene
{
    constructor() {
        super('s_quiz');
        
    }

    preload()
    {
        this.load.image("square", "../csGroup/images/square.png")
    }

    create()
    {
        let { width, height } = this.sys.game.canvas;

        // define the text style at the beginning of the scene
        let textStyle = {
            fontSize: '64px',
            fontFamily: 'Arial, Helvetica, sans-serif',
            color: '#000000',
            align: 'center',
        }

        this.add.text(width/2,height/4,"Interactive Learning Experience").setOrigin(0.5,0.5).setResolution(10).setStyle(textStyle);

        let startQuizButText = this.add.text(width/2,height/2,"Start").setOrigin(0.5,0.5).setResolution(10).setStyle(textStyle);

        let startQuizButRect = this.add.image(width/2,height/2,"square").setScale(200,100).setTint(0xffffff).setDepth(-1);

        startQuizButText.setInteractive().on("pointerdown", () => startQuiz(this));
        startQuizButRect.setInteractive().on("pointerdown", () => startQuiz(this));


        function startQuiz(context)
        {
            console.log("start");
            context.scene.launch("d_quiz").stop();
        }

    }
}

class quiz extends Phaser.Scene
{
    constructor() {
        super('d_quiz');
        
        
    }

    preload()
    {
        this.load.image("square", "../images/square.png")
    }

    create()
    {
        let { width, height } = this.sys.game.canvas;

        // define the text style at the beginning of the scene
        let textStyle = {
            fontSize: '32px',
            fontFamily: 'Arial, Helvetica, sans-serif',
            color: '#000000',
            align: 'center',
            wordWrap: { width: 600, useAdvancedWrap: true }
        }

        //Define the Questions and Answers
        let q1 = new quizQuestion("Which is an essential element of security that determines who can access certain information/data? ", "Access Control", ["Firewall","Winrar", "Github"]);

        let questions = [q1];

        q1.formQArray();

        this.add.text(width/2,height/4, q1.question).setOrigin(0.5,0.5).setResolution(10).setStyle(textStyle);
        this.add.text(width/2,3*height/4, q1.opt).setOrigin(0.5,0.5).setResolution(10).setStyle(textStyle);
        console.log(q1.correctPos);





        



    }
}

class quizQuestion
{
    constructor(question, answer, wrong)
    {
        this.question = question;
        this.answer = answer;
        this.wrongAnswers = wrong;
    }

    formQArray()
    {
        let options = this.wrongAnswers;
        options.push(this.answer);

        this.shuffle(options);

        this.opt = options;
        this.correctPos = this.linearSearch(this.opt,this.answer)
        return options;
    }
 
    // Currently Borrowed from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex > 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      

    }
    
    //Borrowed from https://dev.to/mdqayyumshareef/linear-search-algorithm-javascript-mb4
    linearSearch(array, target) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === target) {
            return i;
            }
        }
        return -1;
    }

}






let config = 
{
    type: Phaser.AUTO,
    input: { mouse: { preventDefaultWheel: false } }, //Allow for scrolling over the phaser window
    debug: true,
    backgroundColor: "#adadff",
    pixelart: true,
    parent: startQuiz,
    scale: {
        mode: Phaser.Scale.FIT, //Using the FIT scale mode will resize the game view to fit into the available space, relatiley responsive
        parent: 'quizDiv', //Make Phaser Viewport fit into HTML div
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [startQuiz, quiz]
}

let conf = new Phaser.Game(config);