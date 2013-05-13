"use strict"

var bits = require("bit-twiddle")
var dup = require("dup")

var UINT8   = dup([32, 0])
  , UINT16  = dup([32, 0])
  , UINT32  = dup([32, 0])
  , INT8    = dup([32, 0])
  , INT16   = dup([32, 0])
  , INT32   = dup([32, 0])
  , FLOAT   = dup([32, 0])
  , DOUBLE  = dup([32, 0])
  , DATA    = dup([32, 0])

function free(array) {
  if(array instanceof ArrayBuffer) {
    
  } else {
    var n = array.length|0
      , log_n = bits.log2(n)
    
    s
    
  }
  

}

function malloc(n, dtype) {
  n = bits.nextPow2(n)
  var log_n = bits.log2(n)
  if(dtype === undefined) {
  
  } else {
    switch(dtype) {
      case "uint8":
        var u8 = UINT8[log_n]
        if(u8.length > 0) {
          var r8 = u8[u8.length-1]
          u8.pop()
          return r8
        }
        return new Uint8Array(n)
      break
      
      case "uint16":
        var u16 = UINT16[log_n]
        if(u16.length > 0) {
          var r16 = u16[u16.length-1]
          u16.pop()
          return r16
        }
        return new Uint16Array(n)
      break
      
      case "uint32":
      break
      
      case "int8":
      break
      
      case "int16":
      break
      
      case "int32":
      break
      
      case "float":
      case "float32":
      
      break
      
      case "double":
      case "float64":
      
      break
      
      default:
        throw new Error("Invalid data type")
    }
  }
}