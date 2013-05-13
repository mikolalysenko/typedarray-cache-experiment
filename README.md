typedarray-cache-experiment
===========================

An experiment comparing different caching strategies for typed arrays.  The first strategy creates an array buffer, while the second preallocates all typed array variants.


## Results

    $ time node nocache_test.js

      real	0m9.860s
      user	0m9.816s
      sys	0m0.097s
      
    $ time node buffer_test.js

      real	0m11.534s
      user	0m11.384s
      sys	0m0.212s

    $ time node prealloc_test.js a

      real	0m0.335s
      user	0m0.327s
      sys	0m0.009s

## Conclusion

Caching without preallocating typed arrays is not worth it.

