let a = "qais";
let b = 5;
console.log(a + " " + b);
console.log(typeof (a + b));
const item = {
  Qais: true,
  ase: 76,
  Khan: undefined,
};
//we cant change the item cuz it is connected to the obj but we can add element in the obj
item["right"] = true;
item["ase"] = 78;
item["Qais"]=false;
console.log(item);