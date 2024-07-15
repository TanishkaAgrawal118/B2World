import { StatusCodes } from "http-status-codes";
import { adminModel, applicationModel, internshipModel, jobModel } from "../models/Schema.js";
import bcrypt from "bcrypt";

export async function adminRegister(req, res) {
  try {
    const hashedPassword = bcrypt.hashSync(req.body.password, 12);
    req.body["password"] = hashedPassword;

    const existingAdminByEmail = await adminModel.findOne({
      email: req.body.email,
    });
    const existingSchool = await adminModel.findOne({
      schoolName: req.body.schoolName,
    });

    if (existingAdminByEmail) {
      return res.status(400).json({ message: "Email already exists" });
    } else if (existingSchool) {
      return res.status(400).json({ message: "School name already exists" });
    } else {
      const admin = new adminModel(req.body);
      const result = await admin.save();
      result.password = undefined;
      return res.status(201).json(result);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
}

export async function adminLogin(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const admin = await adminModel.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    admin.password = undefined;
    return res.status(200).json(admin);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
}


export async function saveJobs(req, res){
    try {
      const job = new jobModel(req.body);
      const saveJobs = await job.save();
      res.status(StatusCodes.CREATED).json(saveJobs);
    } catch (error) {
      console.error(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}
export async function saveInternship(req, res){
  try {
    const internship = new internshipModel(req.body);
    const saveInternship =await internship.save();
    res.status(StatusCodes.CREATED).json(saveInternship);
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
  }
}

export async function fetchJobsById(req, res){
  try {
    const { id } = req.params;
    const job = await jobModel.findById(id);
    if (job) {
      job._id = undefined;
      res.status(StatusCodes.OK).json(job);
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "job not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.NOT_FOUND).json();
  }
}
export async function fetchInternshipById(req, res){
  try {
    const { id } = req.params;
    const internship = await internshipModel.findById(id);
    if(internship){
      internship._id = undefined;
      res.status(StatusCodes.OK).json(internship);
    } else{
      console.error(error);
      res.status(StatusCodes.NOT_FOUND).json();
    }
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.NOT_FOUND).json();
  }
}

  export async function fetchJobs(req, res){
    try {
      const response = await jobModel.find();
      res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.error(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
  }

  export async function fetchInternship(req, res){
    try {
      const response = await internshipModel.find();
      res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.error(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
  }

  export async function saveApplication(req, res){
    try {
      if (!req.file) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: 'File is required' });
    }
    // console.log('File received:', req.file);
    // console.log('Request body:', req.body);
      const file = `http://localhost:3200/${req.file.filename}`;
    req.body['file'] = file;
    const application = await applicationModel(req.body);
    const saveForm = await application.save();
    res.status(StatusCodes.CREATED).json(saveForm);
    } catch (error) {
      console.error(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
    
  }

 