import express from "express";
import path from "path";
import { adminLogin, adminRegister, fetchInternship, fetchInternshipById, fetchJobs, fetchJobsById, saveApplication, saveInternship, saveJobs } from "../controllers/adminController.js";
import multer from "multer";

const router = express.Router();
const storage = multer.diskStorage(
    {
        destination:'./src/Images',
        filename:(req,file,cb)=>{
            return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
        }
    }
)
router.use(express.static('src/Images'));
const upload = multer({storage:storage});


router.post("/adminRegister",adminRegister);
router.post('/adminLogin',adminLogin);
router.post('/savejobs', saveJobs);
router.post('/saveInternship', saveInternship);
router.get('/getjobs/:id', fetchJobsById);
router.get('/fetchjobs', fetchJobs);
router.get('/fetchInternship/:id',fetchInternshipById);
router.get('/fetchinternship', fetchInternship);
router.post('/saveApplication',upload.single('file'),saveApplication);

export default router;