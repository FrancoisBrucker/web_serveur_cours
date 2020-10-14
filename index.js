const logger = require('./logger')
const app = require('./app');

config = {
    baseUrl: "localhost",
    port: 3000
}


app.listen(config.port, () => {
    logger.info('server is running at: ' + 'http://' + config.baseUrl + ':' + config.port);
});
