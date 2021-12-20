import axios from "axios"

axios.interceptors.response.use(response => response.data)
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// AUTHORIZATION
const token = JSON.parse(localStorage.getItem('HS_token'));
axios.interceptors.request.use(function (config) {
    config.headers.Authorization =  `Bearer ${token}`;
    return config;
});
// const url = process.env.VUE_APP_API;
const url = "/api/v1/";
const admin = "/api/v1/admin/";
const tutor = "/api/v1/tutor/";

// State Url
const state = 'https://locationsng-api.herokuapp.com/api/v1/';

export default {
    //methods
    login(data){
        return axios.post(`${url}login`,data)
    },
    logClass(data){
        return axios.post(`${url}classes`,data)
    },
    learner(data){
        return axios.post(`${url}learner`,data)
    },
    logSubject(data){
        return axios.post(`${url}subject`,data)
    },
    getClass(){
        return axios.get(`${url}classes`)
    },
    student(payload){
        return axios.get(`${url}student`,{
            params: payload
        })
    },
    logRegistration(data){
        return axios.post(`${url}registration`,data)
    },


    // Admin
    getUsers(){
        return axios.get(`${admin}all-users`);
    },
    getTutor(){
        return axios.get(`${admin}tutor`);
    },
    getStudent(){
        return axios.get(`${admin}learner`);
    },
    deleteClass(payload){
        return axios.delete(`${admin}class/${payload}`,);
    },
    deleteTutor(payload){
        return axios.delete(`${admin}tutor/${payload}`,);
    },
    deleteLearner(payload){
        return axios.delete(`${admin}learner/${payload}`,);
    },





    // Tutor
    state(){
        return axios.get(`${state}cities`);
    },
    lgas(data){
        return axios.get(`${state}states/${data.lga}/lgas`);
    },
    createTutor(payload){
        return axios.post(`${tutor}tutor`,payload);
    },
    createEducation(payload){
        return axios.post(`${tutor}education`,payload);
    },
    createExperience(payload){
        return axios.post(`${tutor}experience`,payload);
    },
    createReferee(payload){
        return axios.post(`${tutor}referee`,payload);
    },
    createCertificate(payload){
        return axios.post(`${tutor}certificate`,payload);
    },
    createVerification(payload){
        return axios.post(`${tutor}verification`,payload);
    },
    createBank(payload){
        return axios.post(`${tutor}bank`,payload);
    },

    
}