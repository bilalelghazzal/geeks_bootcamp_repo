// menu model (we are working with postgress)

const pool =require('../db');

class MenuItem {

// get all menu items
static async getAllItems() {
    try {
        const query='select * from menu_items';
        const result = await pool.query(query);
        return result.rows;// retturn an array of menu items
    } catch (error) {
        console.error('Erro fetching menu items', error.message); // log tha error .
        throw new Error(`Failed to fetch menu items: ${error.message}`); // throw an error to be handled by caller .
    }
}

// . 
static async getItemByName(name){
    try {
        const query='select  item_id, item_name, item_price FROM menu_items WHERE item_name = \$1';
        const result = await pool.query(query, [name]);
        return result.rows[0] ||null; 
    } catch (error) {
        console.error('Error fetching menu item by name', error.message);
        throw new Error(`Failed to fetch menu item: ${error.message}`);
    }
}
 
// create new menu item 

static async createItem(name,price){
    try {
        if (!name || name.trim()===''){
            throw new Error('item name is required cannot be empty');
        }
        if (name.length>20){
            throw new Error('item name cannot depass 20 characters');

        }
        if (price==null || isNaN(price) || price<=0 ){ 
            throw new Error('price must be possitive number');
        }
        const query ='inser into menu_items (item_name,item_price) values (\$1,\$2)'
        const result=await pool.query(query,[name.trim(),price]);
        return result.rowcount>0;
    } catch (error) {
        console.error('error creating menu item',error.message);
        throw error ;
    }
}

 static async updateItem(id, name, price) {
    try {
      if (!name || name.trim().length === 0) {
        throw new Error('Item name is required');
      }
      
      if (name.length > 20) {
        throw new Error('Item name must be 20 characters or less');
      }
      
      if (price < 0 || price ==null || isNaN(price)) {
        throw new Error('Price must be a posstive number and cannot be empty ');
      }
      
      const query = `
        UPDATE menu_items
        SET item_name = $1, item_price = $2
        WHERE item_id = $3
        RETURNING item_id, item_name, item_price
      `;
      
      const result = await pool.query(query, [name.trim(), price, id]);
      
      // Return the updated item or null if not found
      return result.rows[0] || null;
      
    } catch (error) {
      console.error('Error in updateItem:', error.message);
      throw error;
    }
  }

  
  static async deleteItem(id) {
    try {
      const query = `
        DELETE FROM menu_items
        WHERE item_id = $1
        RETURNING item_id, item_name, item_price
      `;
      
      const result = await pool.query(query, [id]);
      return result.rows[0] || null;
      
    } catch (error) {
      console.error('Error in deleteItem:', error.message);
      throw new Error(`Failed to delete menu item: ${error.message}`);
    }
  }
}
//export menu model
module.exports = MenuItem; 
