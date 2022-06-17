const getters = {
    token : state => state.user.token,
    avatar: state => state.user.avatar,
    name:state=>state.user.name,
    roles:state=>state.user.roles,
    permission:state=>state.user.permission
}

export default getters;