import { RepositoryFactory as Repo} from "@/repository/RepositoryFactory";
const PR = Repo.get('request'); //PR =  Public Request

const state = {
    user: JSON.parse(localStorage.getItem('HS_user')),
    token: JSON.parse(localStorage.getItem('HS_token')),
    url:JSON.parse(localStorage.getItem('HS_url')),
    tutor:{}
}

const getters = {
    getUser(state){
        return state.user = JSON.parse(localStorage.getItem('HS_user'));
    },
}

const mutations = {
    users(state,data){
        state.user = data.user;
        state.token = data.token;
        let url;
        if(data.user.role == 'parent'){
            url = '/student/dashboard';
        } else if(data.user.role == 'admin') {
            url = '/admin/dashboard';
        } else if(data.user.role == 'tutor') {
            url = '/tutor/dashboard';
        }
        localStorage.setItem('HS_url',JSON.stringify({url}))
    },
    saveTutor(state,data){
        state.tutor = data
    },
    logout(state) {
        state.token = null;
        state.user = {};
        localStorage.removeItem('HS_token');
        localStorage.removeItem('HS_user');
        localStorage.removeItem('HS_url');
    }
}

const actions = {
    async signIn({commit},payload) {
        const res = await PR.login(payload);
        // if(res.user.role === 'parent'){
            localStorage.setItem('HS_token',JSON.stringify(res.token));
            localStorage.setItem('HS_user',JSON.stringify(res.user));
            commit('users',res);
        // }

        return res;

    },
    async register({commit},payload) {
        const res = await PR.register(payload);
        // if(res.user.role === 'parent'){
            localStorage.setItem('HS_token',JSON.stringify(res.token));
            localStorage.setItem('HS_user',JSON.stringify(res.user));
            commit('users',res);
        // }

        return res;

    },
    async createClass({commit},payload) {
        const res = await PR.logClass(payload);
        return res;
    },
    async createSubject({commit},payload) {
        const res = await PR.logSubject(payload);
        return res;
    },
    async createUser({commit},payload) {
        const res = await PR.logRegistration(payload);
        return res;
    },
    async addLearner({commit},payload) {
        const res = await PR.learner(payload);
        return res;
    },
    async getClass({commit},payload) {
        const res = await PR.getClass(payload);
        return res;
    },
    async getStudent({commit},payload) {
        const res = await PR.student(payload);
        return res;
    },

    async classDelete({commit},payload) {
        const res = await PR.deleteClass(payload);
        return res;
    },

    // Tutor
    async getState({commit}) {
        const res = await PR.state();
        return res;
    },
    async getLga({commit},payload) {
        const res = await PR.lgas(payload);
        return res;
    },
    async tutor({commit},payload) {
        const res = await PR.createTutor(payload);
        commit('saveTutor',res);
        return res;
    },
    

    async saveEducation({commit},payload) {
        const res = await PR.createEducation(payload);
        return res;
    },
    async saveExperience({commit},payload) {
        const res = await PR.createExperience(payload);
        return res;
    },
    async saveVerification({commit},payload) {
        const res = await PR.createVerification(payload);
        return res;
    },
    async saveReferee({commit},payload) {
        const res = await PR.createReferee(payload);
        return res;
    },
    async saveCertificate({commit},payload) {
        const res = await PR.createCertificate(payload);
        return res;
    },
    async saveBank({commit},payload) {
        const res = await PR.createBank(payload);
        return res;
    },
    async logout({commit}){
        const res  = await commit('logout');
        return true;
    }
}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}