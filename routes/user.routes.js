import express from "express"
import { UserRegister,UserLogin,updateUserPoints,getForms, markOption, getUserPoints, uncompletedForms, formCompleted } from "../controllers/user.controller.js"
import { getUnpackedSettings } from "http2"






const router = express.Router()



router.route("/register").post(UserRegister)
router.route("/getPoints/:id").get(getUserPoints) //need to complete these paths
router.route("/updatePoints/:id").post(updateUserPoints)
router.route("/getForm/:adminId").get(getForms)
router.route("/mark/:userId").post(markOption)
router.route("/getuncompletedForms").post(uncompletedForms) //need to complete these paths
router.route("/updateCompletedForms").post(formCompleted)  ///need to complete these paths


export default router