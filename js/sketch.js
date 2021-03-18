var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var fruits;
var score=0
var score2=0
var fruits2,fruits3,fruits4,fruits5,fruits6,fruit7,fruits8,fruits9,fruits10,fruits11,fruits12,fruits13,fruits14,fruits15,fruits16
var fruits17,fruits18,fruits19,fruits20,fruit21,fruits22,fruit23,fruits24,fruit25,fruits26,fruits27,fruits28
var fruitGroup;
var fruitGroup2, fruitGroup3,fruitGroup4,fruitGroup5, fruitGroup6, fruitGroup7, fruitGroup8,fruitGroup9,fruitGroup15,fruitGroup16,fruitGroup10,fruitGroup11,fruitGroup12,fruitGroup13,fruitGroup14
var fruitGroup15,fruitGroup16,fruitGroup17,fruitGroup18,fruitGroup19,fruitGroup20,fruitGroup21,fruitGroup22,fruitGroup23,fruitGroup24,fruitGroup25,fruitGroup26,fruitGroup27,fruitGroup28
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var n = 30
var a= 50 , b = 100, c= 80, d= 120 , e = 70, f= 130


function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
  fruitGroup2 = new Group();
  fruitGroup3 = new Group();
  fruitGroup4 = new Group();
  fruitGroup5 = new Group();
  fruitGroup6 = new Group();
  fruitGroup7 = new Group();
  fruitGroup8 = new Group();
  fruitGroup9 = new Group();
  fruitGroup10 = new Group();
  fruitGroup11 = new Group();
  fruitGroup12 = new Group();
  fruitGroup13 = new Group();
  fruitGroup14 = new Group();
  fruitGroup15 = new Group();
  fruitGroup16 = new Group();
  fruitGroup17 = new Group();
  fruitGroup18 = new Group();
  fruitGroup19 = new Group();
  fruitGroup20 = new Group();
  fruitGroup21 = new Group();
  fruitGroup22 = new Group();
  fruitGroup23 = new Group();
  fruitGroup24 = new Group();
  fruitGroup25 = new Group();
  fruitGroup26 = new Group();
  fruitGroup27 = new Group();
  fruitGroup28 = new Group();





}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  
  background(back_img);
 
 
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
     textSize(20);
     fill("white");
     stroke(10)
     text("Player 1 score:"+score,50,100)
     text("Player 2 score:"+score2,50,150)
   }
   if (gameState === 2) {
    
     game.end();
   }
  
}