# ES6 Playground [![Build Status](https://travis-ci.org/jeantimex/es6-playground.svg?branch=master)](https://travis-ci.org/jeantimex/es6-playground)
A place to learn and play ES6 features.

To use babel transpiler to compile ES6 to ES5:
npm install -g babel-cli
npm install --save-dev babel-preset-es2015

babel ./src -d ./lib --presets es2015
