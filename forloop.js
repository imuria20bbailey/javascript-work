 //loops
//  console.log("code:" + 1)
//  console.log("code:" + 2)
//  console.log("code:" + 3)
//  console.log("code:" + 4)
//  console.log("code:" + 5)

for(let i = 5; i >= 0; --i){
    console.log("code:" + i)
 }

 //while loop
 let i = 1

 while(i < 5){
    console.log("code:" + i)
    i++
 }
 //break and continued keyword

 for(let i = 5; i >= 0; --i){
    if(i == 3){
        break;
    }
    console.log("code:" + i)
    
 }

 //Array 

 var names = [1,2,4];
 console.log(names[0])

 names[0] = 6
 console.log(names[0])


 var names = ["john","joy"];
 console.log(names[0])

 names[0] ='peter'
 console.log(names[0])

 //for in loop
 
 var names = ["jane","jeff","john"]
 for (let i in names){
     console.log(names[i])
 }


