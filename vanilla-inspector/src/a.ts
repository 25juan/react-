export let a = {};
export default () => {
  return new Promise(resolve => {
    setTimeout(() => {
      a = 99;
      resolve(a);
    }, 5000)
  })
}
