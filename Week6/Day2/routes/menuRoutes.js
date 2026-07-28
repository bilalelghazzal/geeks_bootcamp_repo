//Define the REST API routes:
const express=require('express');
const router=express.Router();
const menuController=require('../controllers/menuController');

router.get('/menu',menuController.getMenu);
// GET /api/menu/:name - Retrieve a menu item by name
router.get('/menu/:name',menuController.getMenuItem);
// POST /api/menu 
router.post('/menu',menuController.addMenuItem);
//put menu/:id -
router.put('/menu/:id',menuController.updateMenuItem);
// delete 
router.delete('/menu/:id',menuController.deleteMenuItem);

module.exports=router;

