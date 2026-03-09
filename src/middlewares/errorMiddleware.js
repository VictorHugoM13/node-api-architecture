module.exports = (err, req, res, next) => {
  const status = err.statusCode || 500;

  res.status(status).json({
    success: false,
    error: err.message || "Erro interno"
  });
};