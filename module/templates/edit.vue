<template>
  <el-dialog
    :title="edit.is_new ? '新增':'编辑'"
    v-model="edit.open"
  >
    <el-form
        ref="form"
        :model="edit.formData"
        label-width="80px"
    >
      <el-form-item label="用户名"
          prop="userName"
          :rules="{required: true}"
      >
        <el-input v-model.trim="edit.formData.userName"></el-input>
      </el-form-item>
    </el-form>

    <div slot="footer">
      <el-button type="primary"
                 :disabled="edit.saving"
                 @click="on_edit_submit">保存</el-button>
    </div>
  </el-dialog>
</template>
<script>
  import { state, actions } from './store'
  import configBaseComponent from 'admin-common/components/edit'

  export default {
    extends: configBaseComponent({state, actions}),
    methods: {
      on_edit_submit () {
        this.$refs['form'].validate(v => {
          if (v) {
            actions.on_edit_submit()
          }
        })
      }
    }
  }
</script>
