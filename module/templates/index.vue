<template>
  <div>
    <div class="page-heading">
      <el-breadcrumb>
        <el-breadcrumb-item><%= module_desc %></el-breadcrumb-item>
      </el-breadcrumb>

      <div class="page-heading__button-group">
        <el-button
          type="primary"
          size="small"
          @click="on_item_add_click">
          新增
        </el-button>
      </div>
    </div>

    <div class="page-main">
      <search-view></search-view>
      <table-view></table-view>
    </div>

    <edit-view></edit-view>

  </div>
</template>
<script>
  import { state, actions } from './store'
  import configBaseComponent from 'admin-common/components/index'

  import searchView from './search.vue'
  import tableView from './table.vue'
  import editView from './edit.vue'


  /**
   * <%= module_name %>
   * @description <%= module_desc %>
   */
  
  export default {
    name: '<%= module_name %>',
    extends: configBaseComponent({state, actions}),
    components: {
      searchView,
      tableView,
      editView
    }
  }
</script>
