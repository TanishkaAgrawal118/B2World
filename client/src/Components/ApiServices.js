import axios from "axios";

export function fetchJobs(data){
    return axios.get('http://localhost:3200/fetchjobs', data);
}
export function fetchJobsById(jobId) {
    return axios.get(`http://localhost:3200/getjobs/${jobId}`);
}

export function fetchInternship(data){
    return axios.get(`http://localhost:3200/fetchInternship`,data);
}

export function fetchInternshipById(internshipId){
    return axios.get(`http://localhost:3200/fetchInternship/${internshipId}`);
}

export function saveApplication(formDataToSend){
    return axios.post(`http://localhost:3200/saveApplication`,formDataToSend);
}