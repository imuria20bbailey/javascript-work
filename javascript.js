
/**
 * task
 * use switch statement to implement an elevator
 * Description if assignment
 * i am at level one waiting for an elevator to pick me, but the elevator is at level seven  to drop off some people. the elevator then comes down but stops at level three to pick up some people to level one where i am waiting for it to pick me.
 */
 let level = 1;

 switch(level){
    case 7:
        console.log('the elevator is at level 7, its coming for me')
        break;
    case 6:
        console.log('the elevator is at level 6, and its coming for me')
        break;
    case 5:
        console.log('the elevator is at level 5,its coming for me')
        break;
    case 4:
        console.log('the elevator is at level 4,still moving to pick me')
        break;
    case 3:
        console.log('the elevator stopped at level 3,and it open to pick someone')
        break;
    case 1:
        console.log('the elevator is at level 1, and its open for me')
        break;
    case 2:
        console.log('the elevator is at level 2, and its open for me')
    default:
        console.log('impossible to reach')

    
 }
 /**
  * comment on my work
  * so at first when i run case clauses and the var console plus the data alone without applying the break, on the console google, two results were seen, case clause 1 and case clause 2, why because even after the result was executed at case 1, javascript continues to run the code. so applying the break statement, helps terminate the switch satements below the executed code that may be run by javascript.
  * just as ifs..and else are used in conditinals, switch satements use case clauses. 
  
  */

