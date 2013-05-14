var pool = require("typedarray-pool")

for(var i=0; i<1000000; ++i) {
  var x = pool.mallocDouble(16)
  pool.freeDouble(x)
}