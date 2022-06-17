

const settings = {
    state:{
        title:""
    },
    mutations:{
        SET_TITLE:(state,title)=>{
            state.title = title;
        }
    },
    actions:{
        setTitle({commit},title){
            commit('SET_TITLE',title)
        }
    }
};

export default settings;