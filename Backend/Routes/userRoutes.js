import express from "express";
import { authUser, resgisterUser } from "../Controllers/userController.js";

const router = express.Router();

router.route('/').post(resgisterUser)
router.post('/login', authUser);

export default router;
