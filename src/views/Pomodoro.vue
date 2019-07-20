<template>
<div class="pomodoro-container">
  <status-bar></status-bar>
  <task-info></task-info>
  <div class="task-list">
  </div>
</div>
</template>

<script>
import StatusBar from '@/components/StatusBar'
import TaskInfo from '@/components/TaskInfo'
export default {
  components: {
    StatusBar,
    TaskInfo
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.pomodoro-container {
  color: $dark-red;
  background-image: url("../assets/img/bg_img_day.jpg");
  background-size: cover;
  display: flex;
  padding: 60px 150px;

  .task-list {
    flex-basis: 375px;
  }
}
</style>
