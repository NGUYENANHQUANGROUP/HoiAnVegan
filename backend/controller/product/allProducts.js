const productModel = require("../../models/productModel");


async function getAllProductsController(req, res) {
    try {
        const allProducts = await productModel.find()

        res.json({
            message: "All Products ",
            data: allProducts,
            success: true,
            error: false
        })
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}
module.exports = getAllProductsController