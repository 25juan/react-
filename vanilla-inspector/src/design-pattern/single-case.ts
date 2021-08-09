import get = Reflect.get;

class Person {
  constructor(private name:string){

  }
  say() {
    console.log(this.name);
  }
}

const getInstance = (function () {
  let instance: null|Person = null;
  return (name: string) => {
    if(instance){
      return instance;
    }
    instance = new Person(name);
    return instance
  }
})();
getInstance('Jack').say();
