import mongoose, { Schema } from "mongoose";


const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: 'admin' },
  });

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    experience: { type: String, required: true},
    salary: { type: String, required: true},
    type: { type: String, required: true},
    location: { type: String, required: true},
    positions: { type: Number, required: true},
    requirement: { type: [String], required: true},
    highlight: { type: [String], required: true}
})


const internshipSchema = new mongoose.Schema({
    title:{ type: String, required: true},
    duration: { type: Number, required: true },
    stipened: { type:  String, required: true},
    positions: { type: Number, required: true},
    type: { type: String, required: true},
    description: { type: String, required: true},
    responsibilities: { type: [String]},
    requirements: { type: [String]},
    benifits:{ type: [String]},
    experience: { type: String},
    perks: { type: String},
    eligibility:{ type: String}
})

const applicationSchema = new mongoose.Schema({
    name:{ type: String, required: true},
    email: { type:  String, required: true},
    contact: { type: String},
    file:{ type: String}
})

export const adminModel = new mongoose.model("admin", adminSchema);
export const jobModel = new mongoose.model("job", jobSchema);
export const internshipModel = new mongoose.model("internship", internshipSchema);
export const applicationModel = new mongoose.model("application",applicationSchema);