<template>
  <div class="status-bar">
    <div class="info-top">
      <div class="icon-tomato">
        <img src="../assets/img/tomato-fill.svg" alt="">
      </div>
      <div class="name">TOMATO</div>
    </div>
    <div class="info">
      <div class="icon-people">
        <img src="../assets/img/tomato-fill.svg" alt="">
      </div>
      <div class="name">MOMO</div>
    </div>
    <div class="icon-area">
      <div class="task-icon">
        <img src="../assets/img/task.svg" alt="">
      </div>
      <div class="analysis-icon">
         <img src="../assets/img/analysis-line.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scpoed>
.status-bar {
  flex-basis: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 36px;
  .info-top {
    flex-basis: 400px;
    .icon-tomato {
      margin-bottom: 16px;
      transform: translateX(-3px);
    }
    .name {
      font-size: 30px;
      font-weight: 600;
      -webkit-writing-mode: vertical-lr;
      writing-mode: vertical-lr;
    }
  }
  .info {
    flex-basis: 240px;
    .icon-people {
      margin-bottom: 72px;
      transform: translateX(-3px);
    }
    .name {
      font-size: 30px;
      font-weight: 600;
      -webkit-writing-mode: vertical-lr;
      writing-mode: vertical-lr;
    }
  }
  .icon-area {
    flex-basis: 116px;
    .task-icon {
      margin-bottom: 16px;
      transform: translateX(-3px);
    }
    .analysis-icon {
      transform: translateX(-3px);
    }
  }
}
</style>
