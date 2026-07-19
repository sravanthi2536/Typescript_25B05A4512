"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let any_value = 12;
any_value = "hello";
console.log(any_value);
let notknown = "unknown";
notknown = 12;
console.log(notknown);
function Notify(mess) {
    console.log("Message:" + mess);
    return "success";
}
let note = Notify("successfully executed programme");
console.log(note);
//# sourceMappingURL=special_types.js.map