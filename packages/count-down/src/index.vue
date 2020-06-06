<template>
  <div class="le-countdown">
    <div v-if="showDay"
      :style="{ borderColor: borderColor, color: color, backgroundColor: backgroundColor }"
      class="le-countdown__number">{{ d }}</div>
    <div v-if="showDay" :style="{ color: splitorColor }" class="le-countdown__splitor">天</div>
    <div :style="{ borderColor: borderColor, color: color, backgroundColor: backgroundColor }"
      class="le-countdown__number">{{ h }}</div>
    <div :style="{ color: splitorColor }"
      class="le-countdown__splitor">{{ showColon ? ':' : '时' }}</div>
    <div :style="{ borderColor: borderColor, color: color, backgroundColor: backgroundColor }"
      class="le-countdown__number">{{ i }}</div>
    <div :style="{ color: splitorColor }"
      class="le-countdown__splitor">{{ showColon ? ':' : '分' }}</div>
    <div :style="{ borderColor: borderColor, color: color, backgroundColor: backgroundColor }"
      class="le-countdown__number">{{ s }}</div>
    <div v-if="!showColon" :style="{ color: splitorColor }" class="le-countdown__splitor">秒</div>
  </div>
</template>
<script>
export default {
  name: 'le-count-down',
  props: {
    showDay: {
      type: Boolean,
      default: true
    },
    showColon: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    borderColor: {
      type: String,
      default: '#000000'
    },
    color: {
      type: String,
      default: '#000000'
    },
    splitorColor: {
      type: String,
      default: '#000000'
    },
    day: {
      type: Number,
      default: 0
    },
    hour: {
      type: Number,
      default: 0
    },
    minute: {
      type: Number,
      default: 0
    },
    second: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      timer: null,
      syncFlag: false,
      d: '00',
      h: '00',
      i: '00',
      s: '00',
      leftTime: 0,
      seconds: 0
    }
  },
  watch: {
    day(val) {
      console.log('---val---' + val)
      this.changeFlag()
    },
    hour(val) {
      console.log('---val---' + val)
      this.changeFlag()
    },
    minute(val) {
      console.log('---val---' + val)
      this.changeFlag()
    },
    second(val) {
      console.log('---val---' + val)
      this.changeFlag()
    }
  },
  mounted() {
    this.startData();
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    toSeconds(day, hours, minutes, seconds) {
      return day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds
    },
    timeUp() {
      clearInterval(this.timer)
      this.$emit('timeup')
    },
    countDown() {
      let seconds = this.seconds
      let [day, hour, minute, second] = [0, 0, 0, 0]
      if (seconds > 0) {
        day = Math.floor(seconds / (60 * 60 * 24))
        hour = Math.floor(seconds / (60 * 60)) - (day * 24)
        minute = Math.floor(seconds / 60) - (day * 24 * 60) - (hour * 60)
        second = Math.floor(seconds) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)
      } else {
        console.log('----0000----：' + seconds)
        this.timeUp()
      }
      if (day < 10) {
        day = '0' + day
      }
      if (hour < 10) {
        hour = '0' + hour
      }
      if (minute < 10) {
        minute = '0' + minute
      }
      if (second < 10) {
        second = '0' + second
      }
      this.d = day
      this.h = hour
      this.i = minute
      this.s = second
    },
    startData() {
      this.seconds = this.toSeconds(this.day, this.hour, this.minute, this.second)
      if (this.seconds <= 0) {
        return
      }
      console.log('startData')
      if (this.timer == null) {
        this.countDown()
        this.timer = setInterval(() => {
          this.seconds--
          if (this.seconds < 0) {
            console.log('---1111-----：' + this.seconds)
            this.timeUp()
            return
          }
          this.countDown()
        }, 1000)
      }
    },
    changeFlag() {
      if (!this.syncFlag) {
        this.seconds = this.toSeconds(this.day, this.hour, this.minute, this.second)
        this.startData();
        this.syncFlag = true;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../le-theme/le-view";
$countdown-height: 48px;
$countdown-width: 52px;

.le-countdown {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  justify-content: flex-start;
  padding: 2px 0;
}

.le-countdown__splitor {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  justify-content: center;
  line-height: $countdown-height;
  padding: 5px;
  font-size: $le-font-size-sm;
}

.le-countdown__number {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  justify-content: center;
  align-items: center;
  width: $countdown-width;
  height: $countdown-height;
  line-height: $countdown-height;
  margin: 5px;
  text-align: center;
  font-size: $le-font-size-sm;
}
</style>
