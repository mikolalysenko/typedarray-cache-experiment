var cache = require("./pool_buffer.js")

for(var i=0; i<100000; ++i) {
  var x = new Float64Array(cache.malloc(128))
  cache.free(x.buffer)
}