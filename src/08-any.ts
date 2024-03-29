(() => {
let myDymanicVar: any;
myDymanicVar = 100;
myDymanicVar = null;
myDymanicVar = {};
myDymanicVar = '';

myDymanicVar = 'Hola';
const rts = (myDymanicVar as String).toLowerCase();
console.log(rts);

myDymanicVar = 212;
const rts2 = (<number>myDymanicVar).toFixed();
console.log(rts2);
})();
