const express = require('express');
const {createClient, updateClient, getClientId, getClient, deleteClient, getClientPages} = require('../controller/client');

const router = express.Router();

router.get('/', getClient);
router.get('/paginate', getClientPages);
router.get('/identity/:id', getClientId);
router.post('/', createClient);
router.put('/:id', updateClient);
router.delete('/:id', deleteClient);

module.exports = router;