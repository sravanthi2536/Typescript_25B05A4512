let any_value:any=12;
any_value="hello";
console.log(any_value);

let notknown:unknown="unknown";
notknown=12;
console.log(notknown);

function Notify(mess:string): string{
    console.log("Message:"+mess);
    return "success";
}
let note=Notify("successfully executed programme");
console.log(note);