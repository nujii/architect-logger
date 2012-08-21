# architect-logger

This plugin uses [winston](https://github.com/flatiron/winston) 
as a logging backend

## Config Format

```json
{
  packagePath: "./node_modules/architect-logger",
  exitOnError: false,
  transports: {
    'console': {
      colorize: true,
      level: 'verbose'
    }
    'file': {
      filename: './logs/errors.log',
      level: 'warn'
    }
  }
}
```

## Usage

Let's use that puppy in our plugin

```js
module.exports = function (options, imports, register) {

  var app = imports.express;

  // Do stuf here. It's just an express server.
};
```

## TODO
- Support for multiple categories
