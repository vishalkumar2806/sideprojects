module.exports = function ipObject(req, res, next) {
    req.client.ip = req.headers['x-forwarded-for'];
    req.client.ua = req.headers['user-agent'];
    next();
  };
  