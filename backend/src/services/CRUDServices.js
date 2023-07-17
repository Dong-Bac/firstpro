
import e from 'express';
import db from '../models/index';
import bcrypt from 'bcryptjs';


const salt = bcrypt.genSaltSync(10);


let createNewUser=async(data)=>{
    let hashPassword = await hashUserPassword(data.password)
    await db.User.create({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password:hashPassword,
        address: data.address,
        phonenumber:data.phonenumber,
        gender: data.gender==='1'?true:false,
        roleId:data.roleId,
    })
}

let hashUserPassword=(pass)=>{
    return new Promise((resolve,reject)=>{

        try {
            let hashPassword = bcrypt.hashSync(pass, salt);
            resolve(hashPassword)
        } catch (error) {
            reject(error)
        }
    })
}

let getAllUser= async()=>{
    try {
       let Users= await db.User.findAll({
        raw:true
       })
       return Users
    } catch (error) {
        console.log(error)
    }
    
}

let getUerInfoById=(userId)=>{
    return new Promise(async(resolve, reject)=>{
        try{
            let user= await db.User.findOne({where:{id:userId},raw:true})
            
            if(user){
                resolve(user)
            }else{
                resolve([])
            }
        }catch(e){
            console.log(e)
        }
    })
}

let updataUserData=(data)=>{
    return new Promise(async(resolve, reject)=>{
        try{
            let user=await db.User.findOne({
                where:{id:data.id}
            })
            if(user){
                user.firstName=data.firstName;
                user.lastName=data.lastName;
                user.address=data.address;

                await user.save();
                resolve();
            }else{
                resolve()
            }
        }catch(e){
            reject(e)
        }
    })
}

let deleteUserById=(userId)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let user= await db.User.findOne({
                where:{id:userId}
            })
            if(user){
                await user.destroy()
            }

            resolve()
        } catch (error) {
            reject(error)
        }
    })
}

module.exports={
    createNewUser, 
    getAllUser,
    getUerInfoById,
    updataUserData,
    deleteUserById,
}