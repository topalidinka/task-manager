<template>
  <div id="app">
    <el-container>
      <el-aside class="sidebar-wrapper">
        <div class="sidebar">
          <h3>Users</h3>
          <Menu></Menu>
        </div>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
  components: {
    Menu
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
  }
  .sidebar-wrapper{
    width: 300px;
    background: #1D7373;
    color: #fbffff;
    height: 100%;
    min-height: calc(100vh);
    .sidebar {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 25px 0 25px 15px;
    }
  }
</style>
