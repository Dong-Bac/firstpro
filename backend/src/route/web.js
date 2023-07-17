import express from "express"
import HomepageController  from "../controllers/homeController";

let router=express.Router();

let initWebRoutes=(app)=>{
    router.get('/',HomepageController.getHomepage)
    router.get('/crud',HomepageController.getCRUD)

    router.post('/post-crud',HomepageController.postCRUD)
    router.get('/get-crud',HomepageController.displayCRUD)
    router.get('/edit-crud',HomepageController.getEditCRUD)
    router.post('/put-crud',HomepageController.putCRUD)
    router.get('/delete-crud',HomepageController.deleteCRUD)
    return app.use("/",router)
}

module.exports=initWebRoutes;