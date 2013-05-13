var arr = require("./pool_arrays.js")

for(var i=0; i<1000000; ++i) {
  var x = arr.malloc(128, "double")
  arr.free(x)
}

