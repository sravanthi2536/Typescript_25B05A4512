let num:number=12;
let isprime=true;
if(num<=1){
    isprime=false;
}
for(let i=2;i<num;i++){
    if(num%i==0){
        isprime=false;
        break;
    }
}
if(isprime){
    console.log("Prime");
}
else{
    console.log("Not prime");
}