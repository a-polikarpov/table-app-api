const router = require('express').Router();
const { getAll, create, remove, update } = require('../controllers/user');

router.get('/', getAll);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;
