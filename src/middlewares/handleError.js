function handleError(err, _req, res, _next) {
return res.status(err.statusCode || 400).json({ message: err.message });
}

module.exports = handleError;