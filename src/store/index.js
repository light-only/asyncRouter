import {createStore} from "vuex";
import user from './modules/user'
import getters from "./getters";
import permission from './modules/permission';
import settings from './modules/settings'
const store = createStore({
    modules:{
        app,
        user,
        permission,
        settings
    },
    getters
});

export default store;