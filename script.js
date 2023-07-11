//your JS code here. If required.
let s = prompt();
let o = {};
for(let i=0; i< s.length; i++){
  
  if(o[s[i]]){      
    o[s[i]]++;
  }
  else{
    o[s[i]] = 1;
  }
}

for(let i=0; i< s.length; i++){
  if(o[s[i]] === 1){
    alert(s[i]);
    break;
  }
}