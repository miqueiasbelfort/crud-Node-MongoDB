const express = require("express")
const router = express.Router()

const ProductController = require("../controllers/ProductControllers")

router.get("/create", ProductController.createProduct)
router.post("/create", ProductController.createProductPost)
router.post("/remove/:id", ProductController.removeProduct)
router.get("/:id", ProductController.getProduct) //pegar apenas um produto
router.get("/edit/:id", ProductController.editProduct)
router.post("/edit", ProductController.editProductPost)
router.get("/", ProductController.showProducts)

module.exports = router