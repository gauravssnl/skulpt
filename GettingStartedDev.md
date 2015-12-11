There's a python script named "m" in the root that performs common operations. 'm' is a python script, so you'll need python installed.

## Run unit tests ##

The most important one: **run unit tests**. This runs the tests on V8 (the d8 shell), but it's included as a binary in the source tree so you shouldn't need to bother building it (if you're on Ubuntu anyway). Simply:

`$ ./m`

There's different categories of tests for `tokenize`, `parse`, `run`, and `interactive`, which are under the same name in the `test` directory. Most new tests end up in `run` now: `run` tests are simply a chunk of python code which is run on real Python and compared to the Skulpt output. When you add a new file to the `test/run` subdirectory, you'll need to do `$ ./m regenruntests`. This reruns python on the test input and caches the output to make running the Skulpt tests faster.

## More tests and making the distribution ##

More thorough tests and build the combined one-file version of Skulpt. This combines all the source files into one, runs the tests on the combined version, runs jslint on the combined version, compresses it using YUI, runs the tests on the compressed version, and if all goes well, copies the final versions into 'dist' and 'doc':

`$ ./m dist`

## Debugging ##

Generally, I don't debug in the browser because it's too cumbersome. A couple tricks for debugging (though it depends on where things are going wrong of course):

  * `print(JSON2.stringify(object, null, 2))` is the first stop to see what's going on.
  * `print(astDump(ast))` if you're dealing with an AST tree.
  * `$ ./m debug test/run/t123.py` pretty-prints the _compiled_ version of `test/run/t123.py` (i.e. the JS code), and starts a d8 shell so you can interactively call functions, or inspect values using the debug functionality of d8.

## New tests ##

In order to fabricate a test case for something new to work on, just generally write a "blah.py" that does something you're interested in, and then do:

`$ python blah.py`

<... output ...>

`$ ./m run blah.py`

<... output ...>

If the outputs don't match, then there's something to be fixed. Try to narrow it down to something minimal that just has one specific bug, and then add it to the test suite as test/run/tXXX.py.

There's a helper script that just looks for the next available XXX and opens _vim_ to let you paste the test case: `./m nrt` (standing for New Run Test).

Also, make sure to run `./m regenruntests` after adding a new test. That runs python on all the `.py` files and saves the output to the same name with the extension `.py.real`, which is what the test suite uses to compare against when running in Skulpt.