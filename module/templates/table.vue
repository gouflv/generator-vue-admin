<template>
  <div>
    <el-table
      v-loading.body="table.loading"
      element-loading-text="加载中..."
      :data="table.items"
      :stripe="true"
    >
      <el-table-column prop="userName" label="用户名"></el-table-column>
      
      <el-table-column label="操作" width="160px">
        <template scope="scope">
          <el-button
            size="small"
            @click="on_item_edit_click(scope.row)">编辑</el-button>
          <el-button
            type="text"
            size="small"
            @click="on_item_remove_click(scope.row)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>

    <el-pagination v-show="table.items.length"
      @current-change="page_index_change"
      :current-page="table.pageIndex"
      :page-size="table.pageSize"
      :total="table.totalCount"
      layout="total, prev, pager, next"
    ></el-pagination>

  </div>
</template>
<script>
  import { state, actions } from './store'
  import configBaseComponent from 'admin-common/components/table'

  export default {
    extends: configBaseComponent({state, actions})
  }
</script>
