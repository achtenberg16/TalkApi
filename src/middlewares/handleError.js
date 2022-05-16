function handleError(err, _req, res, _next) {
console.log(err.message);
return res.status(err.statusCode || 400).json({ message: err.message });
}

module.exports = handleError;