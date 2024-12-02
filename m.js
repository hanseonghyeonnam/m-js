class m {
  
  
  
  static gan_getLoss() {
     let _batch = [];
    let loop = 101
    for(let i = 0; i < loop; i++){
      let _rand = Math.floor(Math.random() * 9999 - 30);
      console.log(`took  ${i}, res : ${_rand}, loss ${Math.sqrt(_rand)}`);
     _batch.push(`${i}:res${_rand}:loss${Math.sqrt(_rand)}`); // 정렬화 전의 데이터를 ':' 형식으로 저장
    }
    
    return _batch
  }
  
  static gan_정렬화(array) { 
    let returnBox = [];
    let 최소Loss = 50
    for(let i of array) {
      let loss = i.split('loss')[1]; // i에서 내용을 읽어와, ':' 형식을 기준, loss을 저장
      let number1 = i.split(':res')[1]; // i에서 내용을 읽어와, ':' 형식을 기준, res number을 저장

      if( loss >= 최소Loss){
        returnBox.push(`Target${number1}:loss${loss}`) // 최소Loss인 50을 기준, 넘거나 같은 것들만 기준하여 ':' 형식을 기준, 저장
      }
    }
    
    return returnBox
  }
  static Deve(int , value , x , y , z = 204) {
    if(! int || !value || !x || !y || !z ) throw "Invalid argument."
   
    let rand = Math.floor(Math.random() * 0 - 1000);
    if(! rand) throw "Invalid data. the value of rand is wrong."
    
    let v1 = int + value - x+y+z 
    if(v1 < 0) throw "Invalid argument. int and value is must high than x/y/z."
    
  
    let reqVal = Math.sqrt(int + value);
    
    if(typeof reqVal === "NaN") throw "Invalid argument. int and value is looks wrong."
    
  
    
    
   
  
   
    let u = m.gan_getLoss()
    let v = m.gan_정렬화(u)
    
    console.log(`정렬화 전 : \n ${u}`)
    console.log(`정렬화 후 : \n ${v}`)
  }
}


m.Deve(24, 45245, 1, 1, 1, "")