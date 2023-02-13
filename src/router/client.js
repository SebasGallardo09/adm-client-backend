const express = require('express');
const {createClient, updateClient, getClientId, getClient, deleteClient} = require('../controller/client');

const router = express.Router();

router.get("/:id", getClientId);
router.get("/", getClient);
router.post("/", createClient);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);

module.exports = router;