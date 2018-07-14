const operations = {
    set: (input, arg )=> {
      return arg*1;
    },
    add: (input, arg)=> {
      //we need to add to something
      if(typeof input === 'undefined'){
        throw 'input required';
      }
      return input + arg*1;
    },
    mult: (input, arg)=> {
      //we need to multiply by something
      if(typeof input === 'undefined'){
        throw 'input required';
      }
      return input * arg*1;
    }
  };

  function pipelineSync(str){
    let commands = str.split(' | ');
    let input = 0;
    //console.log(commands);
    
    for(let i = 0; i < commands.length; i++){
        let temp = commands[i].split(" ")
        input = operations[temp[0]](input, temp[1]);
        console.log(input);
    }

    return input;
  }

  pipelineSync('set 1 | mult 10 | mult 4 | add 2');

  module.exports = pipelineSync;