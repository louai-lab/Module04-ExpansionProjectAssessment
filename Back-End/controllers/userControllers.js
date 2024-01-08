// userController.js
import dotenv from "dotenv";
import User from "../models/user.js";  
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

dotenv.config();

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
// res.status(400).json("userss")
};


// Register

const register = async (req, res) => {
    const { username, email, password , role } = req.body;
  
    try {
      const existingUser = await User.findOne({ where: {email} });
  
      if (existingUser) {
        return res.status(400).json({ error: "Email already exists" });
      }
  
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      const newUser = await User.create({
        username,
        email,
        password : hashedPassword,
        role:role || "view",
      });
  
      const token = jwt.sign({ userId: newUser.id , role:newUser.role}, process.env.SECRET_TOKEN, { expiresIn: '24h' });
      res.cookie('access_token', token, { httpOnly: true, secure: true, sameSite: 'None' });
      
  
      // await newUser.save();
      res.status(201).json(newUser);
      // console.log(newUser);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
      console.log(error);
    }
  };




  // delete an user

const deleteUser = async (req,res)=>{
    const userId = req.params.id;
  
    try{
        const userToDelete = await User.findOne({
            where:{id:userId}
        })
  
        if(!userToDelete){
            return res.status(404).json({ error: "user not found" });
        }
  
        await userToDelete.destroy();
  
        const oldImagePath = `public/images/${userToDelete.image}`;
  
        fs.unlink(oldImagePath, (err) => {
            if (err) {
              return res.status(500).json({ error: `error deleting the old image` });
            }
          });
      
          res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
  
  }



export {
  getAllUsers,register,deleteUser
};
