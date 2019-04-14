var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var player;
var red_tiles;
var green_tiles;
var ball;

/* Score variables */
var score = 0;
var scoreText;


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

    player = this.physics.add.sprite(400, 550, "tile");
    player.setCollideWorldBounds(true);
    cursors = this.input.keyboard.createCursorKeys();

    red_tiles = this.physics.add.group({
        key: 'red_tile',
        repeat: 5,
        width: 100,
        height: 40,
        setXY: { x: 100, y: 100, stepX: 110 }
    });

    green_tiles = this.physics.add.group({
        key: 'green_tile',
        repeat: 5,
        width: 100,
        height: 40,
        setXY: { x: 100, y: 200, stepX: 110 }
    });
    
    scoreText = this.add.text(16,16, 'Score : 0', {fontSize: '32px', fill: '#ff0000'});


}

function update ()
{
    handleInputKeyboard();
    
}

function handleInputKeyboard()
{
    if (cursors.left.isDown)
    {
        player.setVelocityX(-600);
        
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(600);
    }
    else
    {
        player.setVelocityX(0);
    }

}