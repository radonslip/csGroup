class quiz extends Phaser.Scene
{
    constructor() {
        super('quiz');
        
    }

    create()
    {

    }
}





let config = 
{
    width: 800,
    height: 600,
    pixelArt: true,
    backgroundColor: "#678a7a",
    autoCenter: true,
    scene: [quiz]
}

let conf = new Phaser.Game(config);