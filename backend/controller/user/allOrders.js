const addToCartModel = require("../../models/cartProduct")

async function getAllOrdersController (req, res){
    try {
        
        const allOrders = await addToCartModel.find().populate('userId');

        res.json({
            message: "All Orders ",
            data: allOrders,
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
module.exports = getAllOrdersController