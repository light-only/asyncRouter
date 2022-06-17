<template>
  <div class="header_container ">
    <div class="logo white_color">
      <span>XXX后台管理系统</span>
    </div>
    <div class="user_info white_color">
      <span @click="outLogin"> <i class="el-icon-warning-outline" style="margin-right: 15px"></i></span>
      <span>{{user}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: ''
    }
  },
  mounted() {
    this.info()
  },
  methods: {
    info() {
      var account = JSON.parse(localStorage.getItem('token'))
      console.log(account, 'account')
      // this.user = account.account
    },
    outLogin() {
      this.user = ''
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang='scss'>
</style>