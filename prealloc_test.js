var malloc = require("./pool_prealloc.js")

for(var i=0; i<1000000; ++i) {
  var x = malloc(128)
  x.free()
}

