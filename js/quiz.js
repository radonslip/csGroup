class quizScene extends Phaser.Scene
{
    constructor() {
        super('quiz');
        
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
            fontSize: '64px',
            fontFamily: 'Arial, Helvetica, sans-serif',
            color: '#000000',
            align: 'center',
        }

        this.add.text(width/2,height/4,"Interactive Learning Experience").setOrigin(0.5,0.5).setResolution(10).setStyle(textStyle);

        let startQuizButText = this.add.text(width/2,height/2,"Start").setOrigin(0.5,0.5).setResolution(10).setStyle(textStyle);

        let startQuizButRect = this.add.image(width/2,height/2,"square").setScale(200,100).setTint(0xffffff).setDepth(-1);

        startQuizButText.setInteractive().on("pointerdown", () => startQuiz());
        startQuizButRect.setInteractive().on("pointerdown", () => startQuiz());


        function startQuiz()
        {
            console.log("start");
        }

    }
}





let config = 
{
    type: Phaser.AUTO,
    input: { mouse: { preventDefaultWheel: false } }, //Allow for scrolling over the phaser window
    debug: true,
    backgroundColor: "#678a7a",
    pixelart: true,
    parent: quizScene,
    scale: {
        mode: Phaser.Scale.FIT, //Using the FIT scale mode will resize the game view to fit into the available space, relatiley responsive
        parent: 'quizDiv', //Make Phaser Viewport fit into HTML div
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [quizScene]
}

let conf = new Phaser.Game(config);