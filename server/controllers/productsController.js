const queries = require('../db/queries')

exports.getProducts = async (req, res, next) => {
  try {
    const products = await queries.getAll()
    res.status(201).json({
      type: 'success',
      products
    })
  } catch (error) {
    next(err)
  }
}