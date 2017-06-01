# csnext
A dashboard SPA based on Aurelia.

## Prerequisites

We use `lerna` to manage plugin dependencies and `yarn` for installing packages, so you need them both, globally.
```console
npm i -g lerna yarn
```

## Installation

To develop client, server and new plugins, run the following command from the root folder:

```console
yarn
```

This is the same as `yarn install` and it will also call (via an `npm` post install script):
```console
lerna bootstrap --hoist  # initialize all packages, and hoist (i.e. install most of them) in the root `node_modules` folder.
lerna run link  # so you can link to it when developing new clients locally
```

Finally, run `yarn run build` to start the typescript compiler in watch mode for each package.

## Package overview

- @csnext/cs-core: contains common classes and interfaces
- @csnext/cs-client: contains classes for the web client
- @csnext/cs-server: contains classes for the web server

## Developing your own client

Clone [@csnext/cs-example]().
