const app =  {
    state:{
        sidebarType:true
    },
    mutations:{
        CHANGE_SIDEBAR_TYPE(state){
            state.sidebarType = !state.sidebarType;
        }
    },
    actions:{

    }
}

export default  app;