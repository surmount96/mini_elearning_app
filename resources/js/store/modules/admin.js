import { RepositoryFactory as Repo} from "@/repository/RepositoryFactory";
const PR = Repo.get('request'); //PR =  Public Request

const state = {
    tutor: {},
    showTutor: false
};

const getters = {};

const mutations = {
    toggleState(state,data){
        state.showTutor = data.state;
        state.tutor = data.tutor;
    }
};

const actions = {
    async users({commit}) {
        const res = await PR.getUsers();
        return res;
    },
    async learner({commit}) {
        const res = await PR.getStudent();
        return res;
    },
    async tutor({commit}) {
        const res = await PR.getTutor();
        return res;
    },
    async removeTutor({commit},payload) {
        const res = await PR.deleteTutor(payload);
        return res;
    },
    async removeLearner({commit},payload) {
        const res = await PR.deleteLearner(payload);
        return res;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};