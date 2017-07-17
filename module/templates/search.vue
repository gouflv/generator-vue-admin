<template>
  <el-form :inline="true">
    <el-form-item label="用户名">
      <el-input
          v-model="search.formData.userName"
          size="small"
          style="width:140px"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
          type="primary"
          size="small"
          @click="submit">
          搜索
      </el-button>
      <el-button
          size="small"
          @click="reset">
          重置
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  import { state, actions } from './store'
  import configBaseComponent from 'admin-common/components/search'

  export default {
    extends: configBaseComponent({state, actions})
  }
</script>
