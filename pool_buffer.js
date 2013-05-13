"use strict"

var bits = require("bit-twiddle")
var dup = require("dup")
var POOL = dup([32,0])

function free(buffer) {
  POOL[bits.log2(buffer.byteLength)].push(buffer)
}
exports.free = free

function malloc(n) {
  n = bits.nextPow2(n)
  var log_n = bits.log2(n)
    , cache = POOL[log_n]
  if(cache.length > 0) {
    var result = cache[cache.length-1]
    cache.pop()
    return result
  }
  return new ArrayBuffer(n)
}
exports.malloc = malloc