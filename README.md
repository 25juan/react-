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

