<template>
  <div class="nav-wrapper">
    <nav class="nav">
      <ul class="nav-tree">
        <li class="nav-tree__first-level" :key="user.id" v-for="user in usersTask">
          <a href="#">{{ user.name }}</a>
          <ul>
            <li :key="task.id" v-for="task in user.tasks"><router-link :to="{ name: 'edit-task', params: { taskId: task.id } }">{{ task.name }}</router-link></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      usersTask: []
    }
  },
  mounted () {
    this.usersTask = this.$store.state.data
  }
}
</script>
<style lang="scss" scoped>
  .nav-wrapper {
    width: 100%;
    .nav {
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        overflow: hidden;
        a {
          color: #fbffff;
        }
      }
      .nav-tree__first-level {
        margin-bottom: 18px;
        ul {
          li {
            position: relative;
            padding-left: 1.2em;
            margin: 10px 0;
            content: none;
            &:before {
              content: "";
              display: block;
              position: absolute;
              left: 0;
              bottom: .5em;
              width: 15px;
              height: 0;
              border-bottom: 1px solid #263535;
            }
            &:last-child:before {
              height: 1000px;
              border: 1px solid #263535;
              border-width: 0 0 1px 1px
            }
            a {
              color: #fbffff;
            }
          }
        }
      }
    }
  }
</style>
