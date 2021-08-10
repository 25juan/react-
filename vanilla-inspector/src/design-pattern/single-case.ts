class Person {
  constructor(private name:string){

  }
  say() {
    console.log(this.name);
  }
}

const getInstance = (function () {
  let instance: any = null;
  return function (fn: any) {
    if(instance){
      return instance;
    }
    instance = fn.call(window, ...arguments);
    return instance;
  }
})();
getInstance((name: string) => {
  new Person(name)
})
// const getInstance = (function () {
//   let instance: null|Person = null;
//   return (name: string) => {
//     if(instance){
//       return instance;
//     }
//     instance = new Person(name);
//     return instance
//   }
// })();
// getInstance('Jack').say();
// getInstance('Tom').say();
