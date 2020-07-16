import compute from './utils.js'
import a from './css/a.css'
import b from './css/b.css'
import demo from './css/demo.less'
// import 'babel-polyfill'

// var compute = require('./utils.js');

// require(["./utils"], function(compute) {

// })

document.write('webpack 编译啊啊啊 ???');

console.log('we are', compute(1, 5));

let arr = [1, 2, 3, 4];

arr.find(tar => tar === 4);

// arr.from('foo')

function* func() {
  console.log('generator: ???');
}

(() => {
  console.log('>>>>>');
})()