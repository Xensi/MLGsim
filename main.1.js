var game = new Phaser.Game(1350, 610, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update, render: render});

var style = { font: "20px Arial", fill: "#ffffff", align: "center" };

var mlgLevel = 0;
var music;
var cursors;
var MLGlogo;
var dankmemes;
var crosshair;
var enemy;
var enemy2;
var rank;
var rankNumber = 1;
var mlgBackground;
var gun;
var mememaster;
var ultimateTrigger = 0;
var snipersnd;
var dankmaster = undefined;
var crosshair2;
var enemies;
function preload() {
    game.load.image('doritos', 'assets/doritos-nacho-cheese.png');
    game.load.image('mtnDew', 'assets/7550-mtn-dew.png');
    game.load.image('MLG', 'assets/MLG-logo-feature.png');
    game.load.image('sniper', 'assets/sniper.png');
    game.load.image('enemy','assets/40.png'); 
    game.load.image('enemy2','assets/41.png'); 
    game.load.image('scope','assets/sniperscope.png'); 
    game.load.image('hitmarker','assets/hitmarker.png'); 
    game.load.image('gun','http://cdn.photonesta.com/images/img1.wikia.nocookie.net/__cb20110514033211/callofduty/images/9/9a/Intervention_MW2.png'); 
    game.load.image('elmo','assets/elmo.png'); 
    game.load.image('illuminati','assets/Illuminati-Logo.png');
    game.load.image('shrek','assets/images.jpg');
    game.load.image('doge','assets/doge.png');
    game.load.image('mlgdog','assets/mlgdog.png');
    game.load.image('troll','assets/Trollface.png');
    game.load.image('lenny','assets/LennyFace.png');
    game.load.image('frog','http://t3.rbxcdn.com/96d3bd4bc0074c10ddb4f544b0d966bf');
    
    game.load.audio('hitsnd',"assets/hitsnd.mp3");
    game.load.audio('snipersnd',"assets/snipersnd.mp3");
    game.load.audio('music','assets/sandstorm.mp3');
    game.load.audio('mememaster', 'assets/dj.mp3');

   {
    game.load.image('rank1', 'assets/ranks/csgo-ranks.1.png');
    game.load.image('rank2', 'assets/ranks/csgo-ranks.2.png');
    game.load.image('rank3', 'assets/ranks/csgo-ranks.3.png');
    game.load.image('rank4', 'assets/ranks/csgo-ranks.4.png');
    game.load.image('rank5', 'assets/ranks/csgo-ranks.5.png');
    game.load.image('rank6', 'assets/ranks/csgo-ranks.6.png');
    game.load.image('rank7', 'assets/ranks/csgo-ranks.7.png');
    game.load.image('rank8', 'assets/ranks/csgo-ranks.8.png');
    game.load.image('rank9', 'assets/ranks/csgo-ranks.9.png');
    game.load.image('rank10', 'assets/ranks/csgo-ranks.10.png');
    game.load.image('rank11', 'assets/ranks/csgo-ranks.11.png');
    game.load.image('rank12', 'assets/ranks/csgo-ranks.12.png');
    game.load.image('rank13', 'assets/ranks/csgo-ranks.13.png');
    game.load.image('rank14', 'assets/ranks/csgo-ranks.14.png');
    game.load.image('rank15', 'assets/ranks/csgo-ranks.15.png');
    game.load.image('rank16', 'assets/ranks/csgo-ranks.16.png');
    game.load.image('rank17', 'assets/ranks/csgo-ranks.17.png');
    game.load.image('rank18', 'assets/ranks/csgo-ranks.18.png');
    
   }
   game.load.image('background', 'http://i.imgur.com/Fg039oD.png');
}

function create(){
    game.stage.backgroundColor = '#ffffff';
    mlgBackground = game.add.sprite(0,-50,'background');
    mlgBackground.scale.setTo(10,3);
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    MLGlogo = game.add.sprite(75, -100, 'MLG');
    MLGlogo.scale.setTo(.75, .75);
    MLGlogo.alpha = 0.0;
    hitsound = game.add.audio('hitsound');
    music = game.add.audio('music');
    music.loopFull();        
    mememaster = game.add.audio('mememaster');
    snipersnd = game.add.audio('snipersnd');
    rank = game.add.sprite(10,0,'rank1');
    rank.scale.setTo(.8,.8);
    
    dankmemes = game.add.emitter(game.world.centerX, -500, undefined);
    dankmemes.makeParticles(['doritos', 'mtnDew', 'elmo','illuminati','sniper', 'frog']);
    dankmemes.minParticleScale = 0.1;
    dankmemes.maxParticleScale = 0.1;
    dankmemes.start(false,9999, 1000);
    
    var dankmemes1 = game.add.emitter(game.world.centerX+500, -500, undefined);
    dankmemes1.makeParticles(['doritos', 'mtnDew', 'elmo','illuminati','sniper', 'frog']);
    dankmemes1.minParticleScale = 0.1;
    dankmemes1.maxParticleScale = 0.1;
    dankmemes1.start(false,9999, 1000);
    
    var dankmemes2 = game.add.emitter(game.world.centerX , -500, undefined);
    dankmemes2.makeParticles(['doritos', 'mtnDew', 'elmo','illuminati','sniper', 'frog']);
    dankmemes2.minParticleScale = 0.1;
    dankmemes2.maxParticleScale = 0.1;
    dankmemes2.start(false,9999, 1000);
    
    
    //   DO NOT DELETE!!!!!!!!
    
    // enemy = game.add.sprite(200,200,'enemy');
    // game.physics.arcade.enable(enemy);
    // enemy.enableBody = true;
    // enemy.scale.setTo(0.5,0.5);
    // enemy.body.setSize(70, 90, 85, 15);
    // enemy.inputEnabled = true;
    // enemy.events.onInputUp.add(testClick, this);
    
    
    
    
    enemies = game.add.group();
    enemies.enableBody = true;
    enemies.inputEnabled = true;
    // enemies.events.onInputDown.add(enemyClick, this);

    enemies.physicsBodyType = Phaser.Physics.ARCADE;

    for (var i = 0; i < 10; i++)
    {
        enemy = game.add.sprite(game.world.randomX,game.world.randomY,'enemy');
        enemies.add(enemy);
        game.physics.arcade.enable(enemy);
        enemy.enableBody = true;
        enemy.inputEnabled = true;
        enemy.scale.setTo(0.1,0.1);
        enemy.body.setSize(70, 90, 85, 15);
        enemy.events.onInputUp.add(enemyClick, this);
        enemy.body.velocity.x = 100;
        enemy.checkWorldBounds = true;
        enemy.events.onOutOfBounds.add(resetEnemy, this);
    }
    for (var i = 0; i < 10; i++)
    {
        enemy2 = game.add.sprite(game.world.randomX,game.world.randomY,'enemy2');
        enemies.add(enemy2);
        game.physics.arcade.enable(enemy2);
        enemy2.enableBody = true;
        enemy2.inputEnabled = true;
        enemy2.scale.setTo(0.1,0.1);
        enemy2.body.setSize(70, 90, 85, 15);
        enemy2.events.onInputUp.add(enemyClick2, this);
        enemy2.body.velocity.x = -100;
        enemy2.checkWorldBounds = true;
        enemy2.events.onOutOfBounds.add(resetEnemy2, this);
        
    }



    
    
    gun = game.add.sprite(0,0,'gun');
    cursors = game.input.keyboard.createCursorKeys();
    
    
    crosshair2 = game.add.image(0,0,'scope');
    crosshair2.scale.setTo(.8,.8);
    crosshair2.kill();
    
    
}
 
function update(){
        if(mlgLevel < 14200){
        music.volume = mlgLevel * 0.0001;
        MLGlogo.alpha = mlgLevel *0.00005;
        mlgBackground.alpha = mlgLevel*0.00003;
        }
        else{
        music.volume = .6969;
        MLGlogo.alpha = 100;
        mlgBackground.alpha = 100;
        if(ultimateTrigger == 0){
        mememaster.loopFull();
        ultimateTrigger = 1;
        mememaster.volume = 1;
        }
        }
        if (cursors.up.isDown){ 
        mlgLevel += 1;
        }
        else if (cursors.down.isDown && mlgLevel != 0){
        mlgLevel -= 1; 
        }
        else if (cursors.right.isDown){
        mlgLevel = 14200;    
        }
        else if (cursors.left.isDown){
        mlgLevel = 0;    
        }
        if(mlgLevel>14200){
            mlgLevel = 14200;
        }
        
    gun.x = game.input.mousePointer.x - 20;
    gun.y = game.input.mousePointer.y - 60;
    crosshair2.x = game.input.mousePointer.x - 1600;
    crosshair2.y = game.input.mousePointer.y - 1600;
    
    if(mlgLevel < 100){
        rank.loadTexture('rank1', 0);//silver1
        mememaster.pause();
    }
    
    else if(mlgLevel < 500){
        rank.loadTexture('rank2', 0);//silver2
        mememaster.pause();
    }
    else if(mlgLevel < 1000){
        rank.loadTexture('rank3', 0);//silver3
        mememaster.pause();
    }
    
    else if(mlgLevel < 1500){
        rank.loadTexture('rank4', 0);//silver3
        mememaster.pause();
    }
    
    else if(mlgLevel < 2000){
        rank.loadTexture('rank5', 0);//silver3
        mememaster.pause();
    }
    
    else if(mlgLevel < 2500){
        rank.loadTexture('rank6', 0);//silver3
        mememaster.pause();
    }
    
    else if(mlgLevel < 3000){
        rank.loadTexture('rank7', 0);//silver3
        mememaster.pause();
    }
    
    else if(mlgLevel < 3500){
        rank.loadTexture('rank8', 0);//silver3
        mememaster.pause();
    }
    else if(mlgLevel < 4000){
        rank.loadTexture('rank9', 0);//silver3
        mememaster.pause();
    }
    
    else if(mlgLevel < 4500){
        rank.loadTexture('rank10', 0);//silver1
        mememaster.pause();
    }
    
    else if(mlgLevel < 5000){
        rank.loadTexture('rank11', 0);//silver2
        mememaster.pause();
    }
    else if(mlgLevel < 5500){
        rank.loadTexture('rank12', 0);//silver3
        mememaster.pause();
    }
    
    else if(mlgLevel < 6000){
        rank.loadTexture('rank13', 0);//silver3
        mememaster.pause();
    }
    
    else if(mlgLevel < 6500){
        rank.loadTexture('rank14', 0);//silver3
        mememaster.pause();
    }
    
    else if(mlgLevel < 7000){
        rank.loadTexture('rank15', 0);//silver3
        mememaster.pause();
    }
    
    else if(mlgLevel < 7500){
        rank.loadTexture('rank16', 0);//silver3
        mememaster.pause();
    }
    
    else if(mlgLevel < 8500){
        rank.loadTexture('rank17', 0);//silver3
        mememaster.pause();
    }
    else if (mlgLevel >= 14200){
        rank.loadTexture('rank18', 0);//silver3
        music.pause();
        mememaster.resume();
        if (dankmaster == undefined){
    dankmaster= game.add.emitter(game.world.centerX, -500, 999);
    dankmaster.makeParticles(['doritos', 'mtnDew', 'elmo','illuminati','doge','shrek','mlgdog','troll','lenny','frog',]);
    dankmaster.minParticleScale = 0.3;
    dankmaster.maxParticleScale = 0.6;
    dankmaster.start(false,9999, 100);
            
        }
    }
    
    if(game.input.activePointer.isDown && snipersnd.isPlaying == false){
    if(crosshair2.alive == false){
    crosshair2.reset(0,0);
    gun.kill();
    game.world.bringToTop(crosshair2);
    }
    }
    else {
    if(crosshair2.alive){
    
    crosshair2.kill();
    gun.reset(0,0);
    snipersnd.play();
    game.world.bringToTop(gun);
    }    
    }
        

}// function end

function resetEnemy (enemy) {

    enemy.reset(game.world.randomX,game.world.randomY);
    
    enemy.body.velocity.x = 100;

}
function resetEnemy2 (enemy2) {

    enemy2.reset(game.world.randomX,game.world.randomY);
    
    enemy2.body.velocity.x = -100;

}
function enemyClick(enemy,pointer){
    if(snipersnd.isPlaying == false){
    mlgLevel += 420;
    resetEnemy(enemy);
    dankExplosion(game.input.mousePointer.x , game.input.mousePointer.y);
    }
}
function enemyClick2(enemy2,pointer){
    if(snipersnd.isPlaying == false){
    mlgLevel += 420;
    resetEnemy2(enemy2);
    dankExplosion2(game.input.mousePointer.x , game.input.mousePointer.y);
    }
}
function dankExplosion(mousex, mousey){
    var dankExplosion = game.add.emitter(mousex, mousey, undefined);
    dankExplosion.makeParticles(['doritos', 'mtnDew', 'elmo','illuminati','sniper', 'frog']);
    dankExplosion.minParticleScale = 0.1;
    dankExplosion.maxParticleScale = 0.2;
    dankExplosion.start(false,9999, 1);
    
}
function dankExplosion2(mousex,mousey){
    var dankExplosion = game.add.emitter(mousex, mousey, undefined);
    dankExplosion.makeParticles(['doritos', 'mtnDew', 'elmo','illuminati','sniper', 'frog']);
    dankExplosion.minParticleScale = 0.1;
    dankExplosion.maxParticleScale = 0.2;
    dankExplosion.start(false,9999, 1);
}

function render(){
    game.debug.text(mlgLevel, 20, 70);
}
