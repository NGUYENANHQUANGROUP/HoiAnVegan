const express = require('express')

const router = express.Router()

const userSignupController = require('../controller/user/userSignup')
const userLoginController = require('../controller/user/userLogin')
const userDetailsController = require('../controller/user/userDetails')
const userLogoutController = require('../controller/user/userLogout')
const getAllUsersController = require('../controller/user/allUsers')
const updateUserController = require('../controller/user/updateUser')
const authToken = require('../middleware/authToken')
const getAllProductsController = require('../controller/product/allProducts')
const updateProductController = require('../controller/product/updateProduct')
const uploadProductController = require('../controller/product/uploadProduct')
const getCategoryProduct = require('../controller/product/getCategoryProductOne')
const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct')
const filterProductController = require('../controller/product/filterProduct')
const getProductDetails = require('../controller/product/getProductDetails')
const searchProduct = require('../controller/product/searchProduct')
const addToCartViewProduct  = require('../controller/user/addToCartViewProduct')
const addToCartController = require('../controller/user/addToCartController')
const countAddToCartProduct = require('../controller/user/countAddToCartProduct')
const updateAddToCartProduct = require('../controller/user/updateAddToCartProduct')
const deleteAddToCartProduct = require('../controller/user/deleteAddToCartProduct')
const getAllOrdersController = require('../controller/user/allOrders')

router.post("/signup", userSignupController)
router.post("/signin", userLoginController)
router.get("/user-details", authToken, userDetailsController)
router.get("/userLogout", userLogoutController)
router.get("/all-users", authToken,getAllUsersController)
router.post("/update-user", authToken, updateUserController)



router.get("/all-products",authToken,getAllProductsController)
router.post("/update-product",authToken,updateProductController)
router.post("/upload-product",authToken,uploadProductController)
router.get("/get-categoryProduct", getCategoryProduct)
router.post("/category-product", getCategoryWiseProduct)
router.post("/filter-product", filterProductController)
router.post("/product-details",getProductDetails)
router.get("/search",searchProduct)


//user add to cart
router.post("/addtocart", authToken, addToCartController)
router.get("/countAddToCartProduct", authToken, countAddToCartProduct)
router.get("/view-card-product", authToken, addToCartViewProduct)
router.post("/update-cart-product", authToken, updateAddToCartProduct)
router.post("/delete-cart-product", authToken, deleteAddToCartProduct)

router.post("/all-orders", authToken, getAllOrdersController)



module.exports = router