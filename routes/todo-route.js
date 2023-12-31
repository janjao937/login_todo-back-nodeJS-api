const express = require("express");

const router = express.Router();
const todoController = require("../controller/todo-controller");
const authenticateMiddleware = require("../middleware/authenticate");


router.use(authenticateMiddleware);
router.post("/",todoController.createTodo);
router.get("/",todoController.getAllTodo);

module.exports = router;