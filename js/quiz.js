class quiz extends Phaser.Scene
{
    constructor() {
        super('quiz');
        
    }

    create()
    {
        let text = this.add.text(400,400,"hello");
        text.setScale(3);
    }
}





let config = 
{
    width: 720,
    height: 1360,
    pixelArt: true,
    backgroundColor: "#678a7a",
    autoCenter: true,
    scene: [quiz]
}

let conf = new Phaser.Game(config);