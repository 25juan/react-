function create(clazz, ...args) {
  let instance = {};
  instance.__proto__ = clazz.prototype;
  clazz.call(instance, ...args);
  return instance;
}
function Person(name,age) {
  this.name = name;
  this.age = age;
}
create(Person, 'kongdong', 16);
