# TypeScript Optional Parameter Bug

This repository demonstrates a common error in TypeScript related to optional parameters and function overloading.  The `greet` function is defined to accept a `Date` object, but omitting the date parameter results in a type error.  The solution showcases how to fix this issue by making the parameter optional using the `?` syntax. 

## Bug

The original `greet` function requires both the `person` and `date` parameters. Omitting the `date` parameter results in a compilation error because TypeScript cannot infer the type of the missing parameter.

## Solution

The solution demonstrates that it is enough to mark the date parameter as optional using `?` to fix this error. The solution also demonstrates that making date parameter optional alone fixes the compilation issue. 
