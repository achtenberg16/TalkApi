function validateAuthorization(req, _res, next) {
  const { authorization } = req.headers;
  if (!authorization) return next({ statusCode: 401, message: 'Token não encontrado' });
  if (authorization.length !== 16) return next({ statusCode: 401, message: 'Token inválido' });
  next();
}

module.exports = validateAuthorization;