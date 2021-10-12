const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';
function MyPromise(callback: Function) {
  const me = this;
  this.state = PENDING;
  this.value = null;
  this.resolveCallbacks = [];
  this.rejectCallbacks = [];
  function resolve(value) {
    if(me.state === PENDING) {
      me.value = value;
      me.resolveCallbacks.reduce(( result, func) => {
        return func(result);
      }, value);
    }
  }
  function reject(value) {

  }
  callback(resolve, reject())
};
MyPromise.prototype.then  = function (callback) {
  this.resolveCallbacks.push(callback);
  return this;
};
MyPromise.prototype.catch = function (callback) {
  this.rejectCallbacks.push(callback);
  return this;
};
export default MyPromise;
