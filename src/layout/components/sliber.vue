<template>

  <div class="asideNav">
    <el-menu :default-active="$route.path"
             class="el-menu-vertical"
             router
             unique-opened
             :collapse="iscollapse"
             :collapse-transition="false"
             active-text-color='#FFC000'
             background-color="#604A7B"
             text-color="#fff">
      <div v-for="(item,i) in lastMeun"
           :key="i">
        <el-submenu :index="item.prouter"
                    v-if="item.children">
          <template slot="title">
            <i :class="item.icon"></i>
            <span class="tohide">{{item.name}}</span>
          </template>
          <el-menu-item :index="val.crouter"
                        v-for="val in item.children"
                        :key="val.id">
            <i class="el-icon-s-help"></i>
            <span>{{val.name}}</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item :index="item.prouter"
                      v-else>
          <i :class="item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </div>

    </el-menu>
  </div>

</template>

<script>
export default {
  computed(){
    // sidebarRouters:store.getters.sidebarRouters;
  },
  created() {
  },
  data() {
    return {
      defaultActive: '/home',
      iscollapse: false,
      logourl: import('../../assets/logo/logo.png'),
      username: null,
      show: false,
      lastMeun: [],
      pMeun: [],
      cMeun: [],
      meunList: [
        { id: '1', pid: '', name: '首页', router: '/home', icon: 'el-icon-eleme' },
        { id: '2', pid: '', name: '列表管理', router: '/list', icon: 'el-icon-s-tools' },
        { id: '3', pid: '', name: '产品管理', router: '/proudct', icon: 'el-icon-star-on' },
        { id: '4', pid: '', name: '长度管理', router: '/length', icon: 'el-icon-edit' },
        { id: '5', pid: '3', name: '产品管理one', router: '/proudct/one', icon: 'el-icon-edit' },
        { id: '6', pid: '3', name: '产品管理two', router: '/proudct/two', icon: 'el-icon-edit' },
        {
          id: '7',
          pid: '3',
          name: '产品管理three',
          router: '/proudct/three',
          icon: 'el-icon-edit'
        },
        { id: '8', pid: '3', name: '产品管理four', router: '/proudct/four', icon: 'el-icon-edit' },
        { id: '9', pid: '', name: '双数管理', router: '/double', icon: 'el-icon-bell' },
        { id: '10', pid: '', name: '数据管理', router: '/data', icon: 'el-icon-info' },
        { id: '11', pid: '10', name: '数据管理one', router: '/data/one', icon: 'el-icon-edit' },
        { id: '12', pid: '10', name: '数据管理two', router: '/data/two', icon: 'el-icon-edit' }
      ]
    }
  },
  mounted() {
    this.info()
  },
  methods: {
    info() {
      var pMeun = [] //父级菜单
      var cMeun = [] //子菜单
      if (this.meunList.length > 0) {
        //有数据则进行下一步
        //遍历菜单列表，如果没有pid(父级id，没有表示他是一级菜单)，则放进pMeun,有则放进cMeun
        this.meunList.forEach((item) => {
          if (!item.pid) {
            pMeun.push({
              id: item.id,
              name: item.name,
              icon: item.icon,
              prouter: item.router,
              // meta: { title: i.name, icon: i.icon, access: 1 },
              children: []
            })
          } else {
            cMeun.push(item)
          }
        })
        console.log(pMeun, cMeun)
        //判断pMeun和cMeun中id和pid是否相等，相等则将该项加入对应pMeun的children中
        pMeun.forEach((pitem) => {
          cMeun.forEach((citem) => {
            if (citem.pid == pitem.id) {
              // console.log(pitem, '11')
              pitem.children.push({
                id: citem.id,
                name: citem.name,
                crouter: citem.router
                //  meta: { title: i.name, icon: i.icon, access: 1 },
              })
            }
          })
        })
        //如果pMeun中的children没有数据的，则删除该children属性
        pMeun.forEach((item, index) => {
          if (!item.children.length) {
            delete pMeun[index].children
          }
        })

        console.log(pMeun, 'pMeun')
        this.lastMeun = pMeun //赋值给菜单数据源
      } else {
        retrun
      }
    },
    setcollapse() {
      this.iscollapse = !this.iscollapse
      this.$nextTick(() => {
        if (this.iscollapse) {
          $('#logo').css('width', '64px')
          $('.el-aside').css('width', 'auto')
          $('.tohide,.el-submenu__title .el-icon-arrow-right').css('display', 'none')
        } else {
          $('#logo').css('width', 'auto')
          $('.el-aside').css('width', '152px')
          $('.tohide,.el-submenu__title .el-icon-arrow-right').css('display', 'inline')
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.asideNav {
  text-align: left;
}
</style>