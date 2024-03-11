class quizScene extends Phaser.Scene
{
    constructor() {
        super('quiz');
        
    }

    preload()
    {

    }

    create()
    {
        let text = this.add.text(400,300,"hello").setOrigin(0.5,0.5).setResolution(10);
        text.setStyle({
            fontSize: '64px',
            fontFamily: 'Arial, Helvetica, sans-serif',
            color: '#000000',
            align: 'center',
        })

    }
}





let config = 
{
    type: Phaser.AUTO,
    input: { mouse: { preventDefaultWheel: false } },
    debug: true,
    backgroundColor: "#678a7a",
    pixelart: true,
    parent: quizScene,
    scale: {
        mode: Phaser.Scale.RESIZE, //Using the RESIZE Scale mode means that CSS can be used to define how to game will be viewed
        parent: 'quizDiv', //Make Phaser Viewport fit into HTML div
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600
    },
    scene: [quizScene]
}

let conf = new Phaser.Game(config);