js is sync-single threaded lang e
everything in js runs in execution context
(env varaible (mem), thread of execution (code))
Call stack manages the order of execution of the various execution contexts
Lexical scope in Node.js, as in JavaScript, refers to the scope of variables and functions determined by their location in the source code. It is a static scope that is resolved at compile time, meaning the accessibility of variables is based on where they are defined, not where they are called. This concept is crucial for understanding how variables and functions interact within nested structures.

Key Principles of Lexical Scope

Global Scope: Variables defined outside any function or block are accessible throughout the program.

Local Scope: Variables declared inside a function or block are accessible only within that specific function or block.

Nested Scope: Inner functions have access to variables in their parent functions due to the scope chain.

Block Scope: Variables declared with let or const are limited to the block in which they are defined.
"# gevme-test" 
