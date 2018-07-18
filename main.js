
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



 function main(){
    rl.question('Please input your number:', (answer) => {
         
         for (let i=0;i<4;i++)
         {
          var randomNumber=~~(Math.random()*10);
         console.log(randomNumber);
         }
        

          if(!isNaN(answer)&&(answer.length==4))
          {
            console.log(`The answer is: 0A0B`);
          }
          else 
          {
            console.log('Wrong Input，Input again')
          }
        
        rl.close();
      });
 }

 main();
