typedarray-cache-experiment
===========================

An experiment comparing different caching strategies for typed arrays.  The first strategy creates an array buffer, while the second preallocates all typed array variants.


## Results

    $ time node nocache_test.js

      real	0m9.860s
      user	0m9.816s
      sys	0m0.097s
      
    $ time node buffer_test.js
    
      real	0m6.974s
      user	0m6.974s
      sys	0m0.036s

    $ time node prealloc_test.js a

      real	0m0.335s
      user	0m0.327s
      sys	0m0.009s
      
    $ time node array_test.js

      real	0m0.545s
      user	0m0.537s
      sys	0m0.009s


## Conclusion

Caching without preallocating typed arrays is not really worth it.  So there are really only two credible choices:

* preallocating arrays in batches
* preallocating a pool for each typed array

The batch preallocation is faster, has better overall cache performance and uses less memory, but the separate pool per typed array has a simpler interface.  It isn't clear to me what the best solution here is.  Even though it is slower, I think that the array pool has a lot going for it AND has the advantage that it could easily be adapted to work with arrays that are allocated outside the main pool of objects (for example, caching typed arrays used for communication with web workers).

