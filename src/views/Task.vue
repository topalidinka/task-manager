<template>
  <div class="task-wrapper">
    <h3 class="title">Task detail</h3>
    <div>
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="Title" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="Deadline" prop="due_date">
          <el-date-picker
            format="dd.MM.yyyy"
            value-format="dd.MM.yyyy"
            v-model="form.due_date"
            type="date"
            placeholder="Pick a day">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="Description">
          <vue-editor v-model="form.desc"></vue-editor>
        </el-form-item>

        <el-form-item>
          <div v-if="loading">Loading...</div>
          <el-button v-else class="btn-submit" @click="onSubmit">Save</el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  components: {
    VueEditor
  },
  data () {
    return {
      form: {
        id: null,
        name: '',
        due_date: null,
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please input Task name', trigger: 'blur' }
        ],
        due_date: [
          { required: true, message: 'Please pick a date', trigger: 'change' }
        ]
      },
      loading: false
    }
  },
  created () {
    this.fetchData(this.$route.params.taskId)
  },
  beforeRouteUpdate (to, from, next) {
    let taskId = to.params.taskId
    this.fetchData(taskId)
    next()
  },
  methods: {
    fetchData (id) {
      this.$store.dispatch('getTaskInfo', id)
        .then(response => {
          this.form = Object.assign({}, response)
        })
    },
    onSubmit () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('saveTask', this.form)
            .then(res => {
              this.loading = false
            })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    margin-left: 25px;
  }
  .btn-submit {
    background-color: #009999;
    border-color: #009999;
    color: #fff;
    &:hover {
      background-color: #33CCCC;
      border-color: #33CCCC;
      color: #fff;
    }
  }
</style>
