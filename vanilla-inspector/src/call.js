Function.prototype.myCalll = function () {
  const _this = this ;
  let [context, ...args] =  [...arguments];
  context = context || window;
 context[this.name] = _this;
 const result = context.fn(...args);
 delete context[this.name];
 return result;
}
Function.prototype.myApply = function () {
  const _this = this;
  let [context, rest = []] = [...arguments];
  context = context || window;
  context[this.name] = _this;
  const result = context[this.name](...rest)
  delete context[this.name];
  return result;
}

function bb(c) {
  console.log(c)
  return c;
}
bb.myApply(window, [1]);

Function.prototype.myBind = function (context) {
  const _this = this;
  return function () {
    let _context = context || window;
    _context[_this.name] = _this;
    const result = _context[_this.name](...arguments);
    delete _context[_this.name];
    return result;
  }
}
function dd() {
  console.log(this.name);
  return this.name ;
}
dd.myBind({
  name: 'Jack'
})(55)
