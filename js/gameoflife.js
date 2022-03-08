function seed(x,y) {

  return arguments; 

}

function same([x, y], [j, k]) {

     let check = [x,y];
     let check2= [j,k];

     if(check!==check2){
      return false;
     }
     else{

       return true;
     }

}

// The game state to search for `cell` is passed as the `this` value of the function.
function contains(cell) {
    let el = this.cell;
 if(el){
   return true;
 }else{

   return false;
 }

}

const printCell = (cell, state) => {
 // let el = contains.call(this.cell);
  let element = contains.call(this.state);

  if(el2.contains(cell)){

    return '\u25A3';

  }
  else{
    return '\u25A2';
  }
};

const corners = (state = []) => {

  //const element = {topRight: [x,y], bottomLef: [x,y]}
  return { topRigth: [x,y], 
                  bottomLeft: [x,y]}

   //return element;
 
};

const printCells = (state) => {
  
  foreach(cell in state)
     printCell(" \n, \n, \n");
  

};


const getNeighborsOf = ([x, y]) => {

  return [x,y];
};

const getLivingNeighbors = (cell, state) => {

 // let element = this.contains(cell);
  let element2 = this.contains(state);

  if(this.element2){

    element2;
  }
  else{

    return false;
  }

    
};


const willBeAlive = (cell, state) => {

  let element = this.contains(state);

  if(this.cell===element(3) || this.cell===element(2)){

    return  this.cell;

  }
};


const calculateNext = (state) => {

  for (let i =0; i< state.length; i++){

    if(state.bottomLeft==[x,y] && state.topRigth==[x,y]){
       i++;

       corners(state[i]);

       willBeAlive(bottomLeft, topRigth);
    }
  }

};


const iterate = (state, iterations) => {

  let element = this.state;
  let element2 = iterations;

   foreach(elements in iterate)

   if(elements>= 2){

   calculateNext(elements+1);
   }
   
};

const main = (pattern, iterations) => {

  let element = pattern;
  let test = iterations;

   return iterate(pattern, iterations);
};

const startPatterns = {
    rpentomino: [
      [3, 2],
      [2, 3],
      [3, 3],
      [3, 4],
      [4, 4]
    ],
    glider: [
      [-2, -2],
      [-1, -2],
      [-2, -1],
      [-1, -1],
      [1, 1],
      [2, 1],
      [3, 1],
      [3, 2],
      [2, 3]
    ],
    square: [
      [1, 1],
      [2, 1],
      [1, 2],
      [2, 2]
    ]
  };
  
  const [pattern, iterations] = process.argv.slice(2);
  const runAsScript = require.main === module;
  
  if (runAsScript) {
    if (startPatterns[pattern] && !isNaN(parseInt(iterations))) {
      main(pattern, parseInt(iterations));
    } else {
      console.log("Usage: node js/gameoflife.js rpentomino 50");
    }
  }
  
  exports.seed = seed;
  exports.same = same;
  exports.contains = contains;
  exports.getNeighborsOf = getNeighborsOf;
  exports.getLivingNeighbors = getLivingNeighbors;
  exports.willBeAlive = willBeAlive;
  exports.corners = corners;
  exports.calculateNext = calculateNext;
  exports.printCell = printCell;
  exports.printCells = printCells;
  exports.startPatterns = startPatterns;
  exports.iterate = iterate;
  exports.main = main;  
  