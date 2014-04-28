# grunt-sass-themes
=======================

[![Build Status](https://travis-ci.org/acolchado/grunt-sass-themes.svg?branch=master)](https://travis-ci.org/acolchado/grunt-sass-themes)
[![NPM version](https://badge.fury.io/js/grunt-sass-themes.svg)](http://badge.fury.io/js/grunt-sass-themes)
[![Dependency Status](https://david-dm.org/acolchado/grunt-sass-themes.png?theme=shields.io)](https://david-dm.org/acolchado/grunt-sass-themes)
[![devDependency Status](https://david-dm.org/acolchado/grunt-sass-themes.png?theme=shields.io)](https://david-dm.org/acolchado/grunt-sass-themes#info=devDependencies)
[![Coverage Status](https://coveralls.io/repos/acolchado/grunt-sass-themes/badge.png)](https://coveralls.io/r/acolchado/grunt-sass-themes)

Compile theme-able SASS files to CSS.

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-sass-themes --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sass-themes');
```

*This plugin was designed to work with Grunt 0.4.x. If you're still using grunt v0.3.x it's strongly recommended that [you upgrade](http://gruntjs.com/upgrading-from-0.3-to-0.4).

## sass-themes task
_Run this task with the `grunt sassThemes` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

This task is an extension of the [node-sass](https://github.com/andrew/node-sass) task. The options from that task are also compatible with this one.

#### output
Type: `String`
Default: 'generated'

This option defines the output directory for the `grunt-sass-theme` task.

#### themeDir
Type: `String`
Default: 'themes'

This option defines the directory where all the themes are hosted

#### themes
Type: `Array`

This option provides the `grunt-sass-themes` task with the names of each theme. This name is used to in finding the theme and in the generated file.

#### placeholder
Type: `String`
Default: '{{theme}}'

This option is the placeholder string used in the output CSS filename. The name of each theme will replace this placeholder.

#### themeImport
Type: `String`
Default: 'theme'

This option is the name of the theme file that is imported into each SASS file for compilation.


### Usage Examples

#### Simple

```js
sassThemes: {
    dev: {
        options: {
            output: 'path/to/output'
        },
        files: {
            'example_{{themeName}}.css': 'simple.scss'
        }
    }
}
```

#### Complex

```js
sassThemes: {
    dev: {
        options: {
            output: 'path/to/output',
            themeDir: 'path/to/themes'
        },
        files: {
            'core_{{themeName}}.css': ['core/*.scss'],
            'common_{{themeName}}.css': ['common/*.scss'],
            'components_{{themeName}}.css': ['components/*.scss']
        }
    }
}
```