/**
 * Created by stryker on 2014.03.05..
 */

var last_score;
var last_lives;
var last_health;


define(function(){
    //Private variables
    var _game = null,
        _health = null,
        _healthText = null,
        _lives = null,
        _livesText = null,
        _score = null,
        _scoreText = null,
        _stateText = null;
        

    return{
        init: function(game){
            _game = game;
        },
        preload: function(){
            //_game.load.image('ship', 'assets/img/player.png');
        },
        createStat: function(score,health,lives){
            _score = score;
            _scoreText = _game.add.text(10, 10, "Pònti: " + score, { fontSize: '34px', fill: '#fff' });
            _health = health;
            _healthText = _game.add.text(10, 50, "Fià: " + health, { fontSize: '34px', fill: '#fff' });
            _lives = lives;
            last_lives = lives;
            _livesText = _game.add.text(10, 90, "Ensiane: " + lives, { fontSize: '34px', fill: '#fff' });
            
            //_stateText.visible = false;
        },
        updateHealthText: function(health){
            _healthText.text = "Fià: "+health;
            last_health = health;
            console.log("salute ", health, "last_health ", last_health);
        },
        updateLivesText: function(lives){
            _livesText.text = "Ensiane: "+lives;
            last_lives = lives;
            console.log("vite ", lives, "last_lives ", last_lives);
        },
        updateScoreText: function(score){
            _scoreText.text = "Pònti: "+(_score+=score);
            last_score = _score;
            console.log("punteggio ",_score , "last_score ", last_score);
        },
        createTitle: function(title){
            _stateText = _game.add.text(_game.world.centerX,_game.world.centerY,
                                            title, {font: '40px Arial',fill: '#fff'})
            _stateText.anchor.setTo(0.5,0.5);
        }
    }
});