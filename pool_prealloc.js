"use strict"

var bits = require("bit-twiddle")
var dup = require("dup")
var POOL = dup([32,0])

function PooledBuffer(log_n) {
  this.log_n = log_n|0
  this.size = 1<<this.log_n
  this.freed = false
  
  var ui8 = new Uint8Array(this.size)
  this.buffer = ui8.buffer
  this.uint8 = ui8
  this.uint16 = new Uint16Array(this.buffer)
  this.uint32 = new Uint32Array(this.buffer)
  this.int8 = new Uint8Array(this.buffer)
  this.int16 = new Uint16Array(this.buffer)
  this.int32 = new Uint32Array(this.buffer)
  this.float = new Float32Array(this.buffer)
  this.double = new Float64Array(this.buffer)
}

PooledBuffer.prototype.free = function() {
  if(this.freed) {
    throw new Error("Double free")
  }
  POOL[this.log_n].push(this)
  this.freed = true
}

function malloc(n) {
  n = bits.nextPow2(n)
  var log_n = bits.log2(n)
    , cache = POOL[log_n]
  if(cache.length > 0) {
    var result = cache[cache.length-1]
    result.freed = false
    cache.pop()
    return result
  }
  return new PooledBuffer(log_n)
}

module.exports = malloc