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
    console.log(num+" is a prime number");
}
else{
    console.log(num+"is not a prime number");
}