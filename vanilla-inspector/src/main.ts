import './style.css'

// channel使用
// const channel = new MessageChannel();
// channel.port1.onmessage = function (ev) {
//   console.log("port1...", ev.data)
// }
// channel.port2.onmessage = function (ev) {
//   console.log("port2...", ev.data)
// }
// channel.port1.postMessage('111'); // port2... 111


// 模拟继承
// function Person(name: string, age: number) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.say = function () {
//   console.log('hello world')
// }
//
// const person = new Person('Java', 28);
// console.log(person, person.__proto__);
// console.log(person, person.__proto__.constructor=== Person);

// const a = {
//   value: 1,
//   valueOf() {
//     return 2
//   },
//   [Symbol.toPrimitive]() {
//     return 3
//   }
// };
// console.log(1 + a)

// function runBreakPoint(breakIndex:number) {
//   const list = [1,3,54,34,6543,656,6436];
//   let index = 0;
//   while (index !== breakIndex) {
//     console.log(list[index]);
//     index++;
//   }
// }
// window.requestIdleCallback(e => {
//   console.log(e)
// });
// runBreakPoint(3)
