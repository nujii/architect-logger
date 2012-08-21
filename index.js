
module.exports = function startup(options, imports, register) {
  var winston = require('winston');

  var exitOnError = options.exitOnError;
  var logger = new winston.Logger({
    transports: [],
    exitOnError: (exitOnError || true)
  });

  var transports = options.transports||{};

  for(transport in transports) {
    transportOptions = transports[transport];

    switch(transport){
      case 'console':
        logger.add(winston.transports.Console, transportOptions);
        break;
      case 'file':
        logger.add(winston.transports.File, transportOptions);
        break;
      case 'webhook':
        logger.add(winston.transports.Webhook, transportOptions);
        break;
      case 'http':
        logger.add(winston.transports.Http, transportOptions);
        break;
    }
  }

  register(null, {
    logger: logger
  });
};
