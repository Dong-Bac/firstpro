import db from '../models/index';
import CRUDServices from '../services/CRUDServices'

let getHomepage=(req,res)=>{
    return res.render("homepage.ejs")
}

let getCRUD=(req,res)=>{
    return res.render('crud.ejs')
}

let postCRUD= async(req,res)=>{
    try{
        await CRUDServices.createNewUser(req.body)
        return res.redirect("/crud")
    }catch(err){
        console.log(err)
    }
   
}

let displayCRUD= async(req,res)=>{
    try {
        let data=await CRUDServices.getAllUser()
        return res.render('displayCRUD.ejs',{data:data})
    } catch (error) {
        console.log(error)
    }
}

let getEditCRUD= async(req,res)=>{
    let userData= await CRUDServices.getUerInfoById(req.query.id)
    
    return  res.render('editCRUD.ejs',{data:userData})
}

let putCRUD=async(req,res)=>{
    let data=req.body
    await CRUDServices.updataUserData(data)
    return res.redirect('/get-crud')
}

let deleteCRUD=async (req, res)=>{
    let id=req.query.id

    if(id){
        await CRUDServices.deleteUserById(id)
    
        return res.redirect('/get-crud')

    }else{
        return res.send('User not defound')
    }
}

module.exports={
    getHomepage,
    getCRUD,
    postCRUD,
    displayCRUD,
    getEditCRUD,
    putCRUD,
    deleteCRUD}