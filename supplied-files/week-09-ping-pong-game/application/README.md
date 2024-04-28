## Getting started

-   Create a project folder (say `application`) and change directory to it.

```
cd application
```

-   From within the project folder, run this to create a package.json

```
npm init -y
```

-   Install the TypeScript compiler

```
npm i --save-dev typescript
```

-   Create the Typescript configuration file - `tsconfig.json`

```
./node_modules/.bin/tsc --init
```

-   Configure the options like so within `tsconfig.json` - most are already configured. You need to change `module`, `rootDir` and `outDir`

```json
{
    "compilerOptions": {
        /* Language and Environment */
        "target": "ES2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,

        /* Modules */
        "module": "ES2015" /* Specify what module code is generated. */,
        "rootDir": "./src" /* Specify the root folder within your source files. */,

        /* Emit */
        "outDir": "./dist" /* Specify an output folder for all emitted files. */,

        /* Interop Constraints */
        "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,
        "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,

        /* Type Checking */
        "strict": true /* Enable all strict type-checking options. */,

        /* Completeness */
        "skipLibCheck": true /* Skip type checking all .d.ts files. */
    }
}
```

-   Create an `src` folder and add a file within - `src/hello.ts`

```ts
let message: string = "Hello, world!";
console.log(message);
```

-   Add the `build` and `build:watch` scripts within package.json

```
"build": "tsc",
"build:watch": "tsc --watch"
```

-   Run the build to generate the dist folder. You will see the dist folder generated with `hello.js`

```
npm run build:watch
```

-   In another terminal execute the generated file (using `node` and NOT `npm`). You should see the message string in the output.

```
node dist/hello.js
```

-   If you are building an application, then additionally install `http-server`

```
npm i -D http-server
```

-   Setup `start` script within package.json

```
"start": "http-server --port 8000 -c-1"
```

-   Create an index.html file in the project folder

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hello, world!</title>
    </head>
    <body>
        <h1>Hello, world!</div>

        <script src="dist/hello.js"></script>
    </body>
</html>
```

-   Run the server

```
npm start
```

-   Make a request to the server from the browser

```
http://localhost:8000/
```

-   You will find the HTML page shown. If you open the console in the browser you will find the message output from the script as well.
