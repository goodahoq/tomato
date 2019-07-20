<template>
  <div class="task-info">
    <div class="top-bar"></div>
    <div class="detail">
      <div class="progress">
        <div class="progress-time">10<span class="sub-time">分</span></div>
        <svg id="svg" width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
          <circle r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0" id="bar" transform="rotate(-90,100,100)"></circle>
        </svg>
      </div>
      <div class="task-detail">
        <div class="task-title">番茄任務TASK THREE</div>
        <div class="task-des"><span class="time">10 分20 秒</span><span class="title">番茄任務TASK THREE</span></div>
      </div>
      <div class="small-window">
        <img src="../assets/img/smallwindow.svg" alt="">
      </div>
    </div>
    <div class="list-block">
      <div v-for="(item,index) in taskList" :key="index" class="list" :class="item.done">
        <div class="li-icon">
          <img v-if="item.done === 'done'" src="../assets/img/combined-shape.svg" alt="">
        </div>
        <div class="task-title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskInfo',
  data () {
    return {
      progressVal: 41,
      taskList: [
        {
          title: '番茄任務TASKTWO',
          done: 'done'
        },
        {
          title: '番茄任務TASKTHREE',
          done: 'doing'
        },
        {
          title: '番茄任務TASKFOUR',
          done: 'wait'
        },
      ]
    }
  },
  watch: {
    progressVal (val) {
      this.strokeCircle(val)
    },
  },
  mounted () {
    this.strokeCircle(this.progressVal)
  },
  methods: {
    strokeCircle (val) {
      const circle = document.querySelector('#svg #bar')
      const r = circle.getAttribute('r')
      const c = Math.PI * (r * 2)
      const pct = ((100 - val) / 100) * c
      circle.style.strokeDashoffset = pct
    }
  },
}
</script>

<style lang="scss" scoped>
.task-info {
  flex-basis: 570px;
  .top-bar {
    width: 100%;
    height: 15px;
    background-color: #fff;
    margin-bottom: 16px;
  }
  .detail {
    display: flex;
    position: relative;
    margin-bottom: 24px;
    .small-window {
      position: absolute;
      top: 0;
      right: 8px;
      cursor: pointer;
      transition: all ease 300ms;
      &:hover {
        transform: scale(1.2);
      }
    }
    .progress {
      position: relative;
      margin: 8px;
      margin-right: 24px;
      .progress-time {
        position: absolute;
        text-align: center;
        font-size: 80px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        .sub-time {
          font-size: 18px;
        }
      }
      #svg circle {
        stroke-dashoffset: 0;
        transition: stroke-dashoffset 1s linear;
        stroke: #dfb3b3;
        stroke-width: 13px;
      }
      #svg #bar {
        stroke: #fff;
      }
    }
    .task-detail {
      .task-title {
        color: #fff;
        font-size: 36px;
        padding-top: 24px;
        margin-bottom: 64px;
      }
      .task-des {
        color: #fff;
        font-size: 20px;
        .time {
          margin-right: 24px;
        }
      }
    }
  }
  .list-block {
    float: right;
    width: 450px;
    border-top: 5px solid #fff;
    padding-top: 10px;
    .list {
      display: flex;
      align-items: center;
      margin: 30px 0px 30px 72px;
      font-size: 24px;
      .li-icon {
        width: 21px;
        height: 21px;
        border-radius: 50%;
        margin-right: 16px;
      }
    }
    .doing {
      .li-icon {
        background-color: #fff;
      }
    }
    .wait {
      .li-icon {
        background-color: rgba(256, 256, 256, 0.5);
      }
    }
  }
}
</style>
