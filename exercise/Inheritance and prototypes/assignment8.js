let Parent =
{
    parent1 : "father",
    parent2 : "mother",

    Occupation (occ1,occ2)
    {
        this.occ1 = occ1;
        this.occ2 = occ2;

    }
}

let Childs = 
{
    child1 : "elder girl",
    child2 : "younger brother",
    child3 : "younger sister",
    family : function()
            {
                console.log(this.parent1,this.parent2,this.child1,this.child2,this.child3);
            }
}

Childs.__proto__ = Parent ;
Childs.family();
const family1 = Object.create(Childs);
console.log(Object.keys)
Childs.Occupation("engineer","doctor");
console.log(Childs);
// console.log("A family");
// console.log(Childs.parent1,Childs.parent2,Childs.child1,Childs.child2,Childs.child3);


console.log(Childs.__proto__);
console.log(Childs.__proto__.__proto__);
console.log(Childs.__proto__.__proto__.__proto__);


ex = [1,2,3,4,5];
let sum = ex.reduce((sum,n)=>sum+n,0);
console.log(sum);
data = [3,4,3,20];
let sub = data.reduce((sub,i)=>sub-i,0);
console.log(sub);

let obj = Object.keys(Childs);
let getName = function()
{
    // console.log(Object.keys);
    console.log(obj);
}
getName();

