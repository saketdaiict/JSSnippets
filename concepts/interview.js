console.log("NOTE: Suggestions enclosed in () are possible follow up questions");

console.log("'1'+2: "+('1'+2));
console.log("'1'+2+3: "+('1'+2+3));
console.log("1+'2': "+(1+'2'));
console.log("1+2+'3': "+(1+2+'3'));
console.log("'1'+false+3: "+('1'+false+3));
console.log("1+true+'3': "+(1+true+'3'));

console.log('Q: which below block, should execute fastest, theoritically');

/*
var s = '0123456789';
for (var i = 0; i < s.length; i++) {
  s.charAt(i);
}

var s = new String('0123456789');
for (var i = 0; i < s.length; i++) {
    s.charAt(i);
}

Ans: 

Hint: auto-boxing

Follow-up questions can be on javascript data types : primitives and objects
strings: immutability

*/


console.log('Q1 : Write output of below snippet.');

/*var a = 5;
function foo1 () {
    console.log(a);
    var a = 2;
}
foo1();*/

console.log('Q2 : Write output of below snippet.');

/*

 var Foo = function (a) {
	function biz() {
		console.log(a);
	}
	this.baz = function(){
		console.log(a);
	}
}

Foo.prototype = {
	bar: function(){
		console.log(a);
	}
}

var f = new Foo(5);


f.biz();
f.baz();
f.bar();

=====================
Follow up question: Modify above snippet so that all three function invocations return 5

Ans:

var Foo = function (a) {
	this.a = a;
	this.biz = function () {
		console.log(this.a);
	}
	this.baz = function(){
		console.log(this.a);
	}
}

Foo.prototype = {
	bar: function(){
		console.log(this.a);
	}
}

var f = new Foo(5);


f.biz();
f.baz();
f.bar();

*/

console.log('Q3 : Write output of below snippet.(Modify code to print 0,1,2,3..9)');

/*function foo2 () {
	for(var i = 0; i < 10; i++){
		setTimeout(function(){
			console.log(i);
		}, 0);
	}
}
foo2();

Answers:

Wrong(this prints undefined 10 times):

function foo2 () {
	for(var i = 0; i < 10; i++){
		setTimeout(function(i){
			console.log(i);
		}, 0);
	}
}
foo2();

Correct:

function foo2 () {
	for(var i = 0; i < 10; i++){
		setTimeout((function(i){
			console.log(i);
		})(i), 0);
	}
}
foo2();
*/

console.log("Q4 : Write relevant HTML/CSS for design @ http://imgur.com/MSavAOA");

console.log('Q5 : Write a function _new (answer below), which will perform same result as new operator');

/*

 function Shape(x) {
	this.x = x;
}

function _new(Constr, args) {
	//code here...
}

var s1 = _new(Shape, 5);
var s2 = new Shape(5);
console.log(s1 instanceof Shape); //true
console.log(s2 instanceof Shape); //true


Ans:

function _new(Constr, args) {
	var res = {};
	res.__proto__ = Constr.prototype;
	Constr.call(res, args);
	return res;
}

*/

console.log('Q6 : Write a function copy, to copy a object');

//TODO: Research required on more flavours/usecases of copy

/*function copy(obj) {
	var copy = Object.create(Object.getPrototypeOf(obj));
	var propNames = Object.getOwnPropertyNames(obj);
	propNames.forEach(function(name) {
		var desc = Object.getOwnPropertyDescriptor(obj, name);
		Object.defineProperty(copy, name, desc);
	});
	return copy;
}

var obj1 = { a: 1, b: 2 };
var obj2 = copy(obj1);
console.log(obj2);*/

console.log('Q7 : Write output of below script.');

/*

--------------------------

function Quad(area) {
	this.area = area;
}

Quad.prototype.printArea = function() {
	console.log('Quadrilateral area is: '+this.area);
}

function Rectangle(l,b) {
	Quad.call(this, l*b);
	this.l = l;
	this.b = b;
}

Rectangle.prototype = Quad.prototype;
Rectangle.prototype.printArea = function() {
	console.log('Rectangle area is: '+this.area);
}

var q1 = new Quad(1);
q1.printArea();
var r1 = new Rectangle(2,3);
r1.printArea();

---------------------------

Now correct above snippet so that it returns

Quadrilateral area is: 1
Rectangle area is: 6

Ans:

NOTE: Below snippet is also the correct way to create sub class from a super class

function Quad(area) {
	this.area = area;
}

Quad.prototype.printArea = function() {
	console.log('Quadrilateral area is: '+this.area);
}

function Rectangle(l,b) {
	Quad.call(this, l*b);
	this.l = l;
	this.b = b;
}

Rectangle.prototype = Object.create(Quad.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.printArea = function() {
	console.log('Rectangle area is: '+this.area);
}

var q1 = new Quad(1);
q1.printArea();
var r1 = new Rectangle(2,3);
r1.printArea();

 */


console.log('Q8 add(1,2,3)(10) === add(1)(2)(3)(10) === add(1)(2,3)(10)') 

/*
function add(...args1) {
 
  var sumOperation = function(args) {
      return args.reduce(function(acc,val){return acc + Number(val) }, 0);
  };

  var sum = sumOperation(args1);
  
  const proxy = new Proxy(sumOperation, {
    get () {
      return () => sum;
    },
    apply (receiver, thisArg ,...args2) {
      sum += receiver(args2.flat());
      return proxy;
    },
  });
  return proxy
}

console.log(add(1)(2)(3)(10));  // 16  
console.log(add(1)(2,3)(10));   // 16   
console.log(add(1,2,3)(10));    // 16   
 
*/

/*=================TODOs==================

1) problems/patterns involving 'this' : http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/


=================TODOs==================*/


