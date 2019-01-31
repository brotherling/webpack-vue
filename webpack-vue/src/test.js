// 这是Node中向外暴露成员的形式:
// module.exports = {}

//在ES6中 ,使用export default 和 export 向外暴露成员:
let info = {
    name: 'zs',
    age: 20
}
let gender = '男'
export default info

// export default gender
//注意: export default 向外暴露成员, 可以使用任意变量来接收
//注意: 在一个模块中, export default 只允许向外暴露1次
//注意: 在一个模块中, 可以同时使用export default 和 export 向外暴露成员

export var title = '小星星'
export var content = '哈哈哈'