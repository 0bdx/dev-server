# dev-server

__A simple Node.js server, for zero-build development on your local machine.__

∅&nbsp; __Version:__ 0.0.1  
∅&nbsp; __Repo:__ <https://github.com/0bdx/dev-server>  
∅&nbsp; __Homepage:__ <https://0bdx.com/dev-server>

@TODO add an overview

---

## How to create a repo like this, from scratch

### __1. Create the initial repo__

1. At GitHub, click the ‘+’ icon, and ‘New repository’
2. Name it, describe it, tick ‘Add a README file’, choose MIT license
3. Click ‘Create repository’
4. Click the ‘Code’ button, ‘Local’ tab, ‘SSH’, and the copy icon
5. In your Terminal, `cd` to wherever you work
6. `git clone ` and paste something like ‘git@github.com:kim/my-app.git’
7. `cd` into the new directory, eg `cd my-app`

### __2. Add the .gitignore file__

```
.DS_Store
```

### __3. Add the initial package.json file__

```sh
npm init --yes
sed -ix 's/: "1.0.0",/: "0.0.1",/' *.json
sed -ix 's/"author": "/"author": "0bdx <hi@0bdx.com> (0bdx.com)/' *.json
sed -ix 's/: "ISC",/: "MIT",/' *.json
sed -ix 's/"main": "index.js"/"type": "module"/' *.json
rm package.jsonx
```

1. Create a default __package.json__ file:  
   `npm init --yes`
2. Change the version to 0.0.1:  
   `sed -ix 's/: "1.0.0",/: "0.0.1",/' *.json`
3. Insert your name, email and domain:  
   `sed -ix 's/"author": "/"author": "0bdx <hi@0bdx.com> (0bdx.com)/' *.json`
4. Change the license to MIT:  
   `sed -ix 's/: "ISC",/: "MIT",/' *.json`
5. Remove the ‘main’ property because this is an app not a library,  
   and also tell Node to use `import` not `require()` (avoids needing .mjs):  
   `sed -ix 's/"main": "index.js"/"type": "module"/' *.json`
6. Delete the temporary __package.jsonx__ file:  
   `rm package.jsonx`
