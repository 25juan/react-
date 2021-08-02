## react 16新架构 (三大金刚、互相合作)

-. Scheduler(调度器)----顾名思义，调度任务的优先级，高任务优先进入Reconciler
-. Reconciler(协调器)----负责找出组件的变化, diff算法
-. Renderer(渲染器) --- 负责将变化的组件渲染到界面

###  Scheduler(调度器)
当浏览器有无剩余工作时间作为任务的中断标准，需要一种机制来通知我们浏览器是否有剩余的工作时间。
解决方案: `requestIdleCallback`
已被放弃
原因：  1. 兼容性问题
               2. 触发频率不稳定，受很多因素影响，比如浏览器切换tab之后，之前tab注册的`requestIdleCallback`触发频率会变得很低
代替方案：Scheduler(调度器)

### Reconciler(协调器)
React 15中递归处理虚拟dom，同步调用，无法中断。React16由递归变成了可以中断的循环过程，每次循环都会调用`shouldYield`判断当前是否有剩余时间
```js
/** @noinline */
function workLoopConcurrent() {
  // Perform work until Scheduler asks us to yield
  while (workInProgress !== null && !shouldYield()) {
    workInProgress = performUnitOfWork(workInProgress);
  }
}
```
在React16中，Reconciler与Renderer不再是交替工作。当Scheduler将任务交给Reconciler后，Reconciler会为变化的虚拟DOM打上代表增/删/更新的标记，类似这样：
```js
export const Placement = 0b0000000000010;
export const Update = 0b0000000000100;
export const PlacementAndUpdate =  0b0000000000110;
export const Deletion =0b0000000001000;
```
整个Scheduler与Reconciler的工作都在内存中进行。只有当所有组件都完成Reconciler的工作，才会统一交给Renderer。

### Renderer(渲染器) 
-. 能够根据 Reconciler为虚拟dom打上的标记，同步执行对应的dom操作
### React Fiber可以理解为
React内部实现的一套状态更新机制。支持任务不同优先级，可中断与恢复，并且恢复后可以复用之前的中间状态。

### Fiber的含义
1. 作为架构来说，之前React15的Reconciler采用递归的方式执行，数据保存在递归调用栈中，所以被称为stack Reconciler。React16的Reconciler基于Fiber节点实现，被称为Fiber Reconciler。

2. 作为静态的数据结构来说，每个Fiber节点对应一个React element，保存了该组件的类型（函数组件/类组件/原生组件...）、对应的DOM节点等信息。
3. 作为动态的工作单元来说，每个Fiber节点保存了本次更新中该组件改变的状态、要执行的工作（需要被删除/被插入页面中/被更新...）。

### 双缓存
当我们用canvas绘制动画，每一帧绘制前都会调用ctx.clearRect清除上一帧的画面。
如果当前帧画面计算量比较大，导致清除上一帧画面到绘制当前帧画面之间有较长间隙，就会出现白屏。
为了解决这个问题，我们可以在内存中绘制当前帧动画，绘制完毕后直接用当前帧替换上一帧画面，由于省去了两帧替换间的计算时间，不会出现从白屏到出现画面的闪烁情况。
这种在内存中构建并直接替换的技术叫做双缓存 (opens new window)。
React使用“双缓存”来完成Fiber树的构建与替换——对应着DOM树的创建与更新。

### 双缓存Fiber树
在React中最多会同时存在两棵Fiber树。当前屏幕上显示内容对应的Fiber树称为current Fiber树，正在内存中构建的Fiber树称为workInProgress Fiber树。
current Fiber树中的Fiber节点被称为current fiber，workInProgress Fiber树中的Fiber节点被称为workInProgress fiber，他们通过alternate属性连接。
```js
currentFiber.alternate === workInProgressFiber;
workInProgressFiber.alternate === currentFiber;
```


