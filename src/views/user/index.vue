<template>
  <el-card>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="formInline.user" placeholder="请输入要搜索的用户姓名" style="width: 300px" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
        <el-button type="primary" @click="addSubmit">添加用户</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名" min-width="10%" />
      <el-table-column prop="email" label="邮箱" min-width="20%" />
      <el-table-column prop="phone" label="手机" min-width="15%"/>
      <el-table-column prop="role" label="角色" min-width="10%"/>
      <el-table-column prop="state" label="状态" min-width="10%">
        <template #default="scope">
          <el-switch v-model="scope.row.state" />
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" min-width="15%" >
        <template #default="scope">
          {{$filters.filterTimes(scope.row.createTime)}}
        </template>
      </el-table-column>
      <el-table-column  label="操作" min-width="20%">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
          >
          <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-card>

</template>

<script setup>
import { reactive,ref } from 'vue'
const tableData = ref(
    [
      {
        name:'张三',
        email:'14867545232@qq.com',
        phone:"13333234321",
        role:"主管",
        state:true,
        createTime:"1642661245"
      },
      {
        name:'李四',
        email:'14867545232@qq.com',
        phone:"13333234321",
        role:"主管",
        state:false,
        createTime:"1642662900"
      }
    ]
)
const formInline = reactive({
  user: '',
  region: '',
})

const onSubmit = () => {
  console.log('submit!')
}
const addSubmit = ()=>{

}
//编辑操作
const handleEdit = ()=>{

}
//删除操作
const handleDelete =()=>{

}
</script>

<style>

</style>