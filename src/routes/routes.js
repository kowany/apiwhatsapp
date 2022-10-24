const express = require('express');
const router = express.Router();
const whatsappControllers = require('../controllers/whatsappControllers');

router
    .get("/", whatsappControllers.VerifyToken)
    .post("/", whatsappControllers.RecieveMessage)

module.exports = router;
