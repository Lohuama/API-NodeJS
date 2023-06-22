const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=>{
    res.send("Livros!");
})

router.post('/', (req, res)=>{
    res.send('Post')
})

router.patch('/', (req, res)=>{
    res.send("Patch!");
})

router.delete('/', (req, res)=>{
    res.send('Delete')
})


module.exports = router;