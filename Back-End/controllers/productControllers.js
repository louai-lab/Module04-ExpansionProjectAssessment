import express from 'express'
import Product from '../models/product.js';
import User from '../models/user.js';
import '../associations/association.js'

const getAllProducts = async (req, res) => {
    // try {
    //   const products = await Product.findAll();
    //   res.status(200).json(products);
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).json({ error: 'Internal Server Error' });
    // }
  res.status(400).json("products")
  };
  
//   User.hasMany(Product);
//   Product.belongsTo(User);
  
  // Your AddProduct function:
  
//   const AddProduct = async (req, res) => {
//     const { title, category, description, price, supplier } = req.body;
//     const userId = req.query.id;
  
//     try {

//         console.log('Received data:', title, category, description, price, supplier, userId);

//       const user = await User.findByPk(userId);
  
//       if (!user) {
//         return res.status(404).json({ error: 'User not found' });
//       }
  
//       const product = await Product.create({
//         title,
//         category,
//         description,
//         price,
//         supplier,
//       });
  
//       // Associate the product with the user
//     //   await product.setUser(user);

//     await product.set('userId', user.id);


//       await product.save()
  
//       res.status(200).json(product);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   };


const AddProduct = async (req, res) => {
    const { title, category, description, price, supplier } = req.body;
    // const userId = req.query.id;
  
    try {
      // const user = await User.findByPk(userId);
  
      // if (!user) {
      //   return res.status(404).json({ error: 'User not found' });
      // }
  
      const product = await Product.create({
        title,
        category,
        description,
        price,
        supplier,
      });
  
      // Explicitly set the user using set method
      // await product.set('userId', user.id);
  
      // Save the product with the associated user
      // await product.save();
  
      res.status(200).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

  export {
    getAllProducts ,AddProduct
  };