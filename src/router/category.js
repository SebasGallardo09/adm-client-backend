const express = require('express');
const {
    getAllCategory, getIdCategory, createCategory, updateCategory,
    deleteCategory, getPaginateCategory,
} = require('../controller/category');

const router = express.Router();

router.get('/', getAllCategory);
router.get('/paginate', getPaginateCategory);
router.get('/identity/:id', getIdCategory);
router.post('/', createCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;
