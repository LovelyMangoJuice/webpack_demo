function compute(a, b) {
  return a + b;
}

// CommonJs 规范
// module.exports = compute;

// ES规范
export default compute;

// AMD规范
// define([
//   'require',
//   'dependency'
// ], function(require, factory) {
//   'use strict';
//   return function(a, b) {
//     return a + b;
//   }
// });