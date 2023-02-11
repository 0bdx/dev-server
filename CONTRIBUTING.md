# Contributing

## __Set up your development machine__

1.  Check your __Git__ version:  
    `git --version # should be 'git version 2.20.1' or greater`
2.  Check your __Node__ version:  
    `node --version # should be 'v14.0.0' or greater`
3.  Check your global __TypeScript__ version:  
    `tsc --version # should be 'Version 4.9.4' or greater`  
    There is no actual TypeScript code in this project, but TypeScript can infer
    types from the JavaScript code and JSDoc comments.
    - VS Code uses `tsserver` to highlight errors in __src/__ JavaScript files
    - `tsc` is needed to generate the __dev-server.d.ts__ type declaration

## __Set up VS Code__

1.  Check your __VS Code__ version:  
    `code --version # should be '1.74.3' or greater`
2.  Install and enable the [`jeremyljackson.vs-docblock`
    ](https://marketplace.visualstudio.com/items?itemName=jeremyljackson.vs-docblock)
    extension.
3.  Install and enable the [`dnamsons.kimbie-dark-plus`
    ](https://marketplace.visualstudio.com/items?itemName=dnamsons.kimbie-dark-plus)
    theme.  

## __Set up the repo locally__

Clone the repository, and `cd` into it:  
`git clone git@github.com:0bdx/dev-server.git && cd dev-server`

Install the runtime dependency, and the three dev-dependencies:  
`npm i`  
@0bdx/semi-parser 0.0.6, 1 package, 39 kB for 6 items  
@0bdx/build-helpers 0.0.4, 1 package, 22 kB for 6 items.  
@types/node 18.11.19, 1 package, 3.6 MB for 126 items.  
rollup 3.14.0, 2 packages, 2.5 MB for 31 items.  

Open `dev-server` in VS Code:  
`code .`

## __Handy dev commands__

Run all tests on the in-development source code:  
`npm test`

Build __dev-server.js__ and __dev-server.d.ts__:  
`npm run build:prod`  
`npm run build:types`

Run all tests on the built __dev-server.js__ file:  
`npm run preflight:test`

Check that __dev-server.js__ uses all types correctly:  
`npm run preflight:types` @TODO fix this

Or run all the build and preflight steps in one line, eg before committing:  
`npm run build && npm run preflight`

Display what will be published:  
`npm publish --dry-run`

Publish to [npmjs.com/package/@0bdx/dev-server](
https://www.npmjs.com/package/@0bdx/dev-server):  
`npm publish`
