var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image("tile", "../assets/tile.png");
    this.load.image("red_tile", "../assets/red_tile.png");
    this.load.image("green_tile", "../assets/green_tile.png");
    this.load.image("background", "../assets/background.jpg");
}

function create ()
{
    this.add.image(400, 300, "background");
}

function update ()
{
}