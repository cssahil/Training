// console.log(user);
// console.log(user in window ? "exists" : "do not exist");
// user="vijay";

// -------floating point
function test(){
    var x=0.1*0.2;
    x=x.toFixed(2); // display only 2 decimal places
    console.log(x);
}
test();

var num1 = 33;
console.log(num1+" is :",typeof num1);

var float1 = 3.14;
console.log(float1+" is :",typeof float1);

var boolean1 = true;
console.log(boolean1+" is :",typeof boolean1);

var string1 = "Vijay";
console.log(string1+" is :",typeof string1);

//undefined = non existed
var num3;
console.log(num3);
console.log(num3+" is :",typeof num1);

console.log("\njs automatic converts string to num sometimes");
console.log("100" + "10"); // treat as string
console.log("100" +  10);  // treat as string
console.log(100   + "10"); // treat as string
console.log("100" / "10"); // treat as number
console.log("100" * "10"); // treat as number
console.log("100" - "10"); // treat as number
console.log(10+20+"30");   // first number, second string

console.log("\nbut artimetic with alpbabets js gives NaN");
console.log("100*Apple is",100*"Apple");
console.log("type of NaN is :", typeof(k));

console.log("\nprint till infinity :")
// operation with NaN gives NaN
let num4 = 2;
while (num4 != Infinity) {
    num4 = num4*num4;
    console.log(num4);
}
console.log("type of Infinity is :", typeof num4);

console.log("\nnew Number() is object and different");
let d = 123;
let e = new Number(123);
console.log("123 is",typeof d,"& new Number(123) is",typeof e);
if (d!==e){
    console.log(true);
}

console.log("----------\n")

arr = new Array(5);
console.log("arr =",arr);

arr2 = [1,2,3];
arr3 = [4,5,6];
console.log("arr2 =",arr2);
console.log("arr3 =",arr3);

arr4 = arr2.concat(arr3); // merge two arrays
console.log("arr4 =",arr4);

arr5 = arr2.join("|"); // join string b/n arr elements
console.log("arr5 =",arr5);

console.log("arr2 =",arr2)

arr2.shift();
console.log("arr2 shift =",arr2); // removes first element

arr2.pop(); // removes last element
console.log("arr2 pop =",arr2);

arr2.unshift(1); // add element in first
console.log("arr2 unshift 1 =",arr2);

arr2.push(3); // add element in last
console.log("arr2 push 3 =",arr2);

console.log("\n-------")

arr7 = [10,20,30,40,50,60];
console.log("arr7 =",arr7);

arr8 = arr4.slice(1,3); // slice removes elements using index
console.log("arr7 slice value of (index 2 to 4) =",arr8);

arr7.splice(3,5,"hello"); // splice removes elements using index and update too
console.log("arr7 splice(index 3 to 5 & add hello) =",arr7);

arr9 = [11,22,33,44,55,66];
console.log("arr9 =",arr9);
arr9.reverse();      // reverse the arr
console.log("arr9 reverse =",arr9);

arr9.sort();        // sort or arrange the arr
console.log("arr9 sort =",arr9);

console.log("\n-------")

console.log("arr7 =",arr7);
tostring = arr7.toString(); // convert everything to string
console.log("arr7 toString =",tostring);

console.log("\n-------")

console.log("arr9 =",arr9);
tolocalestring = arr9.toLocaleString();
console.log("arr9 tolocalestring =",tolocalestring);

console.log("\n use of forEach to seperate each element:")
arr9.forEach(element => console.log(element));

map1 = arr9.map(x => x*2);
console.log("arr9 map =",map1);

arr10 = ["abc","four","banana","apple","destruction"];
console.log("arr10 =",arr10);
arr11 = arr10.filter(word => word.length > 4);
console.log("arr10 words > 4 =",arr11);

console.log("\narr9 =",arr9);
const isBelowThresold = (currentValue) => currentValue < 70; // is all element below range 70
console.log("every() to check all verify the condition < 70 =",arr9.every(isBelowThresold));

const even = (element) => element%2 === 0 ; // check any element is even
console.log("some() to check any one even =",arr9.some(even))

const initialValue = 0;
sum = arr9.reduce(
    (previousValue, currentValue) => previousValue + currentValue, 
    initialValue);
console.log("reduce() to go through elements one by one to add =",sum);

arr11 = [[0, 1], [2, 3], [4, 5]];
console.log("\narr11 =",arr11);
const result = arr11.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
console.log("reduceRight() to single value from right2left =",result);

arr12 = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log("\narr12 =",arr12);  // indexOf(search, fromIndex)
console.log("indexOf() to get index of 1st bison =",arr12.indexOf('bison'));
console.log("indexOf() to get index of 2nd bison =",arr12.indexOf('bison',2));
console.log("indexOf() to get index of non-array ele =",arr12.indexOf('lion'));

console.log("lastIndexOf() to get index from backward of bison =",arr12.lastIndexOf('bison',3));
console.log("lastIndexOf() to get index from backward of ant =",arr12.lastIndexOf('ant'));

console.log("\narr9 =",arr9);
let index = 2;
console.log(`at() index ${index} element = ${arr9.at(index)}`);
index = -2;
console.log(`at() index ${index} element = ${arr9.at(index)}`);

console.log(`\ncopyWithin(0,3,4) to copy element from inside = \n${arr9.copyWithin(0,3,4)}`);

console.log(`fill(100,2,4) to insert same element to any range = \n${arr9.fill(100,2,4)}`);

console.log(`\nentries() to get index of each element :`)
for (const [index, element] of arr9.entries()) {
    console.log(index,element);
}

console.log(`\n arr9 = ${arr9}`)

let found = arr9.find(element => element > 50);
console.log(`find() the first element > 50, if yes then = ${found}`);

found = arr9.find(element => element > 200);
console.log(`find() ele>200, if not then = ${found}`);

let isLarge = (element) => element > 50;
console.log(`findIndex() to get index of 1st ele > 50 = ${arr9.findIndex(isLarge)}`);

isLarge = (element) => element > 200;
console.log(`findIndex() to get index of 1st ele > 200 if not = ${arr9.findIndex(isLarge)}`);

arr13 = [0, 1, 2, [3, 4]];
console.log("\narr13 =",arr13);
arr14 = arr13.flat(1);
console.log("flat(1) to go one depth and new arr =",arr14);

arr15 = [0, 1, 2, [ [ [3, 4] ] ] ];
console.log("\narr15 =",arr15);
arr16 = arr15.flat(1);
console.log("flat(2) to go two depth and new arr =",arr16);

console.log("\n----------\n")

arr17 = [10,20,30,40];
console.log("arr17 =",arr17);
map2 = arr17.map(x => [x*2]);
console.log("map() func call to each ele and x*2 =\n", map2);

flatMap1 = arr17.flatMap(x => [x*2]);
console.log("flatMap() func call to each ele and x*2 =",flatMap1);
// flatMap() only goes for 1 depth

console.log("in arr17 check 20 =",arr17.includes(20));

pets = ['cat', 'dog', 'bat'];
console.log("pets =",pets);
console.log("includes() to check 'cat' =",pets.includes('cat'));
console.log("includes() to check 'at' =",pets.includes('at'));

const iterator1 = pets.values();
for (const item of iterator1) {
    console.log("values() to get current element of pets array =",item);
}

const iterator2 = pets.keys();
for (const key of iterator2) {
    console.log("keys() to get current key|index of pets array =",key);
}



/*
Array Methods Summary
-------------------------
Array.prototype.at()            :   returns element using index
Array.prototype.concat()        :   merge two array
Array.prototype.copyWithin()    :   (target,start,end) to copy element from inside
Array.prototype.entries()       :   to get index of each element
Array.prototype.every()         :   to check all element verify the condition 
Array.prototype.fill()          :   (element,start,end) to insert same element to any range
Array.prototype.filter()        :   filter out the element which satisfy condition
Array.prototype.find()          :   the first element which satisfy cond , if | yes = print ele | no = undefined
Array.prototype.findIndex()     :   index of first element which satisfy cond , if | yes = print index | no = -1
Array.prototype.flat()          :   to go one depth and give new arr
Array.prototype.flatMap()       :   func call to each ele and give new arr with x*2 
Array.prototype.forEach()       :   to seperate each element and print each ele on new line
Array.prototype.includes()      :   to check arr contains that ele, if | yes = true | no = false
Array.prototype.indexOf()       :   to get index of element by chossing the index {ele) or (ele, index)
Array.prototype.join()          :   join or insert anything b/n elements while printing, ex. "|" or "---"
Array.prototype.keys()          :   to get current key|index of array by iterating using for loop
Array.prototype.lastIndexOf()   :   from backwards to get index of element by chossing the index (ele) or (ele, index)
Array.prototype.map()           :   func call to each ele and apply x*2
Array.prototype.pop()           :   remove last element from arr
Array.prototype.push()          :   add element in last
Array.prototype.reduce()        :   to go through each element one by one and add them
Array.prototype.reduceRight()   :   go left2right and reduce multi arr into single arr
Array.prototype.reverse()       :   reverse the arr
Array.prototype.shift()         :   remove first element   
Array.prototype.slice()         :   cut out elements using index
Array.prototype.some()          :   to check any one element is even, if | yes = true | no = false
Array.prototype.sort()          :   sort arr
Array.prototype.splice()        :   remove|replace elements using index and insert too (start,deleteCount,item)
Array.prototype.toLocaleString():   elements represented as string, ex. displaying time and zone
Array.prototype.toString()      :   convert everything to string
Array.prototype.unshift()       :   add element in first
Array.prototype.values()        :   get current elements from arr 
*/  