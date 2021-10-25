

function createNode(name) {
  const node = Object.create(null)
  node.name = name;
  node.next = null;
  return node;
}


class Linked {
  tail = null;
  append(node) {
    if(this.tail) {
      let tail = this.tail;
      while(tail.next) {
        tail = tail.next;
      }
      tail.next = node;
    }else {
      this.tail = node;
    }
  }
}
let linked = new Linked();
linked.append(createNode("1"));
linked.append(createNode("2"));
linked.append(createNode("3"));
// console.log(linked);
let arr = [1,3,4,5,10,33,9,6];

function minHeap(list) {
  let startIndex = Math.floor((list.length - 1)/2);

  while(startIndex >= 0){
    shiftDown(list, startIndex);
    startIndex--;
  }

}
function shiftDown(list, index) {
  const top = list[index];
  const left = list[2 *index + 1];
  let right = null;
  if(2 *index + 2 <= list.length) {
    right = list[2 *index + 2];
  }
  if(top > left) {

    list[index] = left
  }

}

minHeap(arr);
