import { DataTypes } from "sequelize";
import sequelize from "../config/dbConnection.js";

const User = sequelize.define(
  "User",
  {
    username:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    role:{
      type: DataTypes.ENUM('creator', 'view'),
      // defaultValue: 'creator',
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    // image:{
    //   type:DataTypes.STRING,
    //   allowNull:false
    // }
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
)

export default User
