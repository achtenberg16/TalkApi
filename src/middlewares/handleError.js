function handleError(err, _req, res, _next) {
console.log('rodou');
return res.status(err.statusCode || 400).json({ message: err.message });
}

module.exports = handleError;