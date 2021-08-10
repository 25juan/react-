class Stack<T> {
  constructor(private stack:Array<T>) {
  }
  push(item:T) {
    this.stack.push(item);
  }
  back() {
    this.stack.pop();
  }
  length() {
    return this.stack.length;
  }
}
const routes = new Stack<string>([]);
routes.push('hello');
