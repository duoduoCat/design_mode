/*
  发布订阅：
    有一个对象，有人一直看着他
    当这个对象发生变化时，第三方通知这个看着的人，触发回调
  只需要一个构造函数
    => 创建一个第三方的身份
    
    属性：任务队列，消息队列
    {
      click：[fn1，fn2]
      abc： [fn1，fn2，fn3]
    }
    方法：能向消息队列中添加内容

    方法：删除消息队列里面的内容

    方法：能触发消息队列里面的内容
*/


class ObServer {
  constructor () {
    this.message = {}
  }

  // 向消息队列里添加内容 订阅
  on(type, fn) {
    // type 为行为事件
    // fn 在行为发生的时候做的事情
    // on方法将这些方法记录在消息队列中
    // this.message[type] = [ fn ]
    // 1，判断message中有没有行为别注册过
    //  如果没有，就应该赋值一个行为，值赋值为[]
    if(!this.message[type]) {
      // 表示消息队列中没有注册过
      this.message[type] = []
    } 
    this.message[type].push(fn)
  }
  
  // 删除消息队列里的内容
  off(type, fn) {
    if(!fn) {
      // fn不存在直接取消事件代理
      // 将message里面的a成员是删除掉
      delete this.message[type]
      return 
    }

    // 代码能来到这里表示fn存在
    
    // 判断是否真的订阅过
    if(!this.message[type]) {
      return
    }

    // 使用filter删除
    this.message[type] = this.message[type].filter( item => item !== fn )

  }

  // 触发消息队列 发布
  emit(type) {
    if(! this.message[type]) return

    this.message[type].forEach(item => {
      item()
    })
  }
}

// 使用构造函数创建一个实例
const person1 = new ObServer()

// 当向拜托这个person1，帮你观察一些内容的时候
// 告诉你一个行为，当行为出现的时候，告诉你干什么

// 订阅
person1.on('abc', handlerA)
person1.on('abc', handlerB)


// person1.off('abc') // 把属于abc消息队列中的数组清空
person1.off('abc', handlerA)
console.log(person1)

person1.emit('abc')

function handlerA() {console.log('handlerA')}
function handlerB() {console.log('handlerB')}
