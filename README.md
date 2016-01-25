This repo contains all core `gulp` build tasks which can be configured and used in any FEAR projects alltogether or individually.

The Core tasks in this repo are provided in a factory function format for developer convenience, so you can use the functionality but can give any name to the task you create and configure it as much as the Core Task API makes it possible (see examples below).

## Installation

To use any of the provided Core gulp tasks, please install the module first:

```
$ npm install --save-dev git+ssh://git@github.com:DigitalInnovation/fear-core-build.git
```

**PLEASE NOTE** the above command requires `npm` version `2.7.1` or above, see this [issue](https://github.com/npm/npm/issues/7121).

### Post install script

When `npm` installs the this core module, it will run the included `postinstall` script which copies default config files to the application / project's root folder, unless they exist.

```
$ npm install
FEAR Core tasks: skipped copying default karma.conf.js
File already exists in project root
```

### Usage in gulptask.js

In `gulpfile.js` pull in `fear-core-build`

```js
var fearCoreTasks = require('fear-core-build');
```

* [Website](http://digitalinnovation.github.io/fear-core-build)
* [Technical documentation](http://digitalinnovation.github.io/fear-core-build/docs/)
* [Wiki](https://github.com/DigitalInnovation/fear-core-build/wiki)
* [How to create a new core task](https://github.com/DigitalInnovation/fear-core-build/wiki/How-to-create-a-new-core-task)
* [Available Core tasks](https://github.com/DigitalInnovation/fear-core-build/wiki/Available-Core-tasks)
