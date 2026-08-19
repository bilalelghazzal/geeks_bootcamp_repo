// Get all menu items
const menu = require('../models/menuModel')

// get all menuitems : getmenu function 

exports.getMenu= async(req,res)=>{
    try{
        const items=await menu.getAllItems();
        res.status(200).json(items);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }   
}

// get menu items by name 
exports.getMenuItem=async(req,res)=>{
    try{
        const name=req.params.name;
        const item=await menu.getItemByName(name);
        if(item){
            res.json(item);
        }else{
            res.status(404).json({message:'Menu item not found '});
        }
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}



exports.addMenuItem=async(req,res)=>{
    try {
        console.log('headers', req.headers);
        console.log('body', req.body);
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: 'Request body is required and must be valid JSON' });
        }

        const name = req.body.name;
        const price = req.body.price;
        console.log('Received data:', { name, price });

        if (name === undefined || price === undefined) {
            return res.status(400).json({ message: 'Both name and price are required' });
        }

        const success = await menu.createItem(name, price);
        console.log('createItem result:', success);
        if(success){
            res.status(201).json({message :'Menu Item added Succesfully ', item: success});
        }else{
            res.status(400).json({message:'Failed to create menu item'});
        }
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

exports.updateMenuItem=async(req,res)=>{
    try {
        const id=req.params.id;
        const {name,price}=req.body;// what it does ? answer : it extracts the name and price properties from the request body. This is typically used when a client sends data to the server in a PUT or PATCH request, allowing the server to access the updated menu item details for the specified item ID.
        const success=await menu.updateItem(id,name,price);
        if(success){
            res.json({message:'Menu item updated successfully'});
        }
        else{
            res.status(404).json({message:'Menu item not found '});}
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
exports.deleteMenuItem=async(req,res)=>{
    try {
        const id=req.params.id;
        const success=await menu.deleteItem(id);
        if(success){
            res.json({message:'Menu item delted succesfully '}); 
        }else{
            res.status(404).json({message:'Menu item not found '});
        }
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
