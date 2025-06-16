/*
- what is tsconfig.json
- what does this options do
*/

const options = {
  compilerOptions: {
    target: "ES5", // what JavaScript version we will transpile our typescript
    module: "commonjs", // which module we want to use: commonjs or ECMAScript six
    moduleResolution: "node", // how module will be resolved
    noImplicitAny: true, // how to configure typescript to highlight errors, you need to specify the 'any' or change the code
  },
};

// we are using tscofig.son to configure TypeScript compiler
