const express = require('express');
const {
    createClient, updateClient, getClientId, getClient, deleteClient, getClientPages,
} = require('../controller/client');

const router = express.Router();

router.get('/', getClient);
router.post('/', createClient);
router.get('/paginate', getClientPages);
router.get('/identity/:id', getClientId);
router.put('/:id', updateClient);
router.delete('/:id', deleteClient);

module.exports = router;
