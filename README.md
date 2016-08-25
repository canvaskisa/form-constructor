# Form constructor

Test project for Frontend position in [Evil Martians](https://evilmartians.com/). This project implements simple form constructor application, build with React, Redux and PostCSS.

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![Build Status](https://travis-ci.org/canvaskisa/form-constructor.svg?branch=master)](https://travis-ci.org/canvaskisa/form-constructor)

## Installation and running:
Requirements:
- [Node@>=4](https://nodejs.org/en/)

Installation:
```console
$ npm install
```

Building component and it's styles:
```console
$ npm run build:component
```

Building example:
```console
$ npm run build
```

After example is builded – you can find it in `dist/index.html`. Simply open `index.html` in your favourite browser and it's done!

Running development:
```console
$ npm run watch
```

Now you can find your hot-reloadable application on `http://localhost:3000`!

All available `npm` commands you can find in [package.json](package.json).

## Component's API and props:
```js
import React from 'react';
import FormConstructor from 'FormConstructor';

export default () => (
	<FormConstructor
		onSave={state => console.log(state)}
		initialState={undefined}
		/>
);
```

### onSave: PropTypes.func
`FormConstructor` takes an optional `onSave` function, which will be called with constructed form's state, when save button is clicked.

### initialState: PropTypes.object
`FormConstructor` takes an optional `initialState` object, which can be used for initializing already saved form.

## Author
[Aleksandr Yakunichev](https://github.com/canvaskisa)
