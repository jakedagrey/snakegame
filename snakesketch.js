let t=0
let i=0
let snake
let rez=10
let food;
let w
let h
var canvas

 
        const wax = new waxjs.WaxJS({
    rpcEndpoint: 'https://wax.eosphere.io'
   
  });



 async function sign() {
  
       const updater = wax.userAccount
        userp=getItem("user")
        memo='snake test'
           play={username:updater,score:userp,memo:memo}
     try{      
             await fetch("http://localhost:2052/create", {
                "method": "POST",
                "headers": {
                    "content-type": "application/json"
                },
                "body": JSON.stringify(play)
            });
           } catch (e) {
        console.error(e);
    }
         
                      
}
   
function storeData(){
	storeItem("user",Number(i)+Number(userp))
	}

function setup() {

	storeItem("user",0)

canvas=createCanvas(900, 600)
canvas.position(00,50)
    frameRate(7*3)
  w =floor(width);
  h= floor(height);
  r=rez

  snake = new Snake(); 

   
  foodLocation();

      
  
   if (!wax.api){   

   button=createButton("Wax Login")
 }


  async function login() { const userAccount = await wax.login(); 
 
        await getCurrentMessage();  }
                  
                  async function getCurrentMessage() {
    const res = await wax.rpc.get_table_rows({
      json: true,
      code: 'test.wax',
      scope: 'test.wax',
      table: 'messages',
      lower_bound: wax.userAccount,
      upper_bound: wax.userAccount,
    });

    const message = res.rows[0] ? res.rows[0].message : `<No message is set for ${wax.userAccount}>`;

  }
  

button.mousePressed(login)
    
    if (wax.api){   if (!snake.endGame()){text(wax.userAccount,600/rez,300)
 textSize(3)  };   
 
 


 



 
}}

function foodLocation(){ 
let x=floor(random((w/rez)))
    y=floor(random((h/rez)))
  food=createVector(x,y)
    }
 

function keyPressed(){if (wax.api){
  if (keyCode=== LEFT_ARROW){snake.setDir(-1,0);
     } else if  (keyCode=== RIGHT_ARROW){snake.setDir(1,0);
     } else if  (keyCode=== UP_ARROW){snake.setDir(0,-1);
     } else if  (keyCode=== DOWN_ARROW){
       snake.setDir(0,1);
     } else if  (keyCode=== ENTER){restart()
       

     
                                  } } 

        }
       
        
 function restart() {
   
                       storeData()
   setup()  
          draw()
        loop()
      i=0
      signn=0
                    }



                    

signn=0
         

 


function draw() {
  
 
                    
  if (snake.eat(food)){
	  
	  
	  foodLocation();
                       snake.grow();
                      i++;
                      
                      
 if (wax.api){
    
      fill(0,random(180),0)
       background(60,0,30)

  text(wax.userAccount,10,48)
  textFont('Arial')

  
    }


                }

  scale(rez)
  background(0,240,0);
  snake.update()
  snake.show()

  if (snake.endGame()){
	  
	   userp=getItem("user")
                       storeData()
      if (signn===0){
		  sign()
		  signn=1}
     fill(180,0,0)
    background(60,0,30)
     text("GAME OVER \n you have eaten "+userp+" LEEF \n Hit 'enter' to restart",rez,rez)
  textFont('Arial') 
noLoop()
    }; 
    if (!wax.api){
    
      fill(0,random(180),0)
       background(60,0,30)
        
  text("LOGIN",40,28)
  textFont('Arial')

  
    }
     
  noStroke()
 
  fill(30,130,30)
 
 rect(food.x,food.y,(i*0.01)+1,(i*0.01)+1)
 



}

