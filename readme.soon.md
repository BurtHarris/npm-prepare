npm-prepare(1) -- Backward and backward compatibility for `prepare` scripts
===========================================================================

***Note:  preliminary release not ready for production ****

## SYNOPSIS

Q:  How can I *prepare* my package.json for the new `prepare` lifecycle event without loosing backward compatability?
A:  By using `npm-prepare` to update your scripts.

The end result will be 
1. any build steps previously in `prepublish` get moved into `prepare` (for forward compatability.)
2. a new `prepublish` script which runs `npm-prepare` (for backward compatability.)


When invoked during the `prepublish` script, `npm-prepare` executes `npm run prepare`, but only if the installed version of npm < v4.0.0.   If you are lucky enough to be runnign npm@>=4, that script has already been run, so `npm-prepare` exits without running it.  

In October 2016, the [npm version 4.0.0 relase notes][1] announced a planned breaking change to the lifecycle events model, stating that:

    > `prepublish` has been deprecated, replaced by `prepare`. A `prepublishOnly` script has been temporarily added, which will only run on npm publish.

In fac


Upcoming breaking changes to the npm lifecycle model were announced as part of npm version 4.0 [1][https://github.com/npm/npm/releases/tag/v4.0.0]

A package's build scripts can achievve both forward and backward compatability with planned changes in the npm lifecycle model by using this command in their package.json.  Typical use would be to include it in the package.json `prepublish` script.   If run from versions of npm < 4.0, it will run the packages `prepare` script, but if run from versions of npm >= 4.0, this is skipped as redundant.





In npm's `package.json` lifecycle model, the `prepublish` event is unusual: it runs not only as part of the `npm publish` command workflow, but as part of `npm pack', `npm link`, and `npm install` (when no package name was specified).    Before the `prepare` lifecycle event was added in npm version 4, a generally accpeted practice of running some build steps in the package.json `prepublish` script developed, 

Prior to npm version 4, the `prepare` lifecycle event wasn't implemented, and so many authors using transpilers like babel or TypeScript performed language translation build step using the `prepublish` script.   Despite the name `prepublish`, the npm cli ran this script ran at appropriate times, e.g. when running `npm install`, `npm pack` or `npm link` from the poject directory, not just when the `npm publish` command was run.

This behavior was surprising to some.   The npm cli team has decided to deprecate 

You can make your npm package.json build scripts both forward and backward compatible by renaming the existing build steps (such as running a transpiler) from `prepublish` to `prepare`, then adding a new `prepublish` script which runs this command.   

While npm version 4 and later will automatically run the `prepare` script at approprate times, earlier versions of npm don't implement

### Installation

```bash
$ npm install -D npm-prepare
```

### Example

```js
const npmAssure = require('npm-assure');

// your code here

```

### Contributing
- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3

### ISC

This work is licensed under the [ISC license](./LICENSE).

[1]: https://github.com/npm/npm/releases/tag/v4.0.0

---