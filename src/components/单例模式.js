// 单例模式
// 单：单一，一个
// 例：实例
// 一个构造函数一生只能有一个实例
// 不管你 new 多少次，都是这一个实例
// 自定义弹出层


/*
  单例模式的核心代码
  let instance = null

  function singleton() {
    if(!instance) instance = 实例对象

    return instance
  }

*/

class Person {
  constructor([name, age]) {
    this.name = name
    this.age = age
  }
} 

let instance = null

function singlo(...options) {
  // 当第一次调用 single 的时候 instance 为 null，直接为instance赋值
  // 当第二次调用 single 的时候 直接返回上一次调用产生的instance
  if(!instance) instance = new Person(options)
  
  return instance
}


const p1 = singlo('李磊', '18')
const p2 = singlo('韩梅梅', '19')
console.log(p1)
console.log(p2)
  



