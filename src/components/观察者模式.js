// 观察者模式

// 观察者
// 被观察者
// 当被观察者触发了一些条件，观察者触发方法


// 观察者模式：监控一个对象的状态，一旦状态发生改变，马上触发方法
/*
  =》 需要两个构造函数来实现
  1，创建被观察者
    =》属性，自己的状态
    =》队列，记录都有谁观察者自己，数组
    =》方法，能设置自己的状态，当我需要改变的时候，要触发这个方法改变状态
    =》方法，添加观察者
    =》方法，删除观察者

  2，创建观察者
    =》身份证明
    =》需要一个回调

*/

/*
  观察者
*/
class Observer {
  constructor(name, fn = () => {}) {
    this.name = name
    this.fn = fn
  }
}


/*
  创建观察者
*/

const  eat = new Observer('吃', () => { console.log('吃') })
const  jump = new Observer('跳', () => { console.log('跳') })

// 被观察者

class Subject {
  constructor(state) {

    // state记录自己状态
    this.state = state
    // 数组用来保存观察者
    this.observers = [] 
  }

  // 设置自己状态

  setState(val) {
    this.state = val
    // 就需要把 所有观察者触发
    // 遍历 所有的观察者

    this.observers.forEach(item => {
      // 告诉观察者当前的状态
      item.fn(this.state)
    
    })

  }

  addObserver (obs) {
    // 谁是观察者，谁就传进来
    // 判断观察者已经存在则不再添加
    const res = this.observers.includes(obs)
    if(!res) {
      this.observers.push(obs)
    }
  }

  delObserver(obs) {
    // 将obs观察者删除
    this.observers = this.observers.filter(item => item !== obs)
  }
}

// 创建被观察者


const xiaoming = new Subject('学习')

xiaoming.addObserver(eat)
xiaoming.addObserver(jump)
xiaoming.setState('吃')
xiaoming.delObserver(eat)
xiaoming.setState('吃')
console.log(xiaoming)