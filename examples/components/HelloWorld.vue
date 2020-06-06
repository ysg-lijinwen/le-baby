<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <le-login></le-login> -->
    <le-count-down ref="cCountDown" :show-day="true" :second="60" @timeup="timeupExe()"
      background-color="#f5f5f5" color="#FFA460" splitor-color="#ffa460"></le-count-down>
    <le-sticky-head-list :list-data='bisData'></le-sticky-head-list>
    <le-back-to-top ref="backToTop"></le-back-to-top>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      bisData: null
    }
  },
  mounted() {
    this.bisData = []
    for (let i = 0; i < 5; i++) {
      this.bisData.push({
        header: '头部' + i,
        listItem: []
      })
      for (let index = 0; index < 30; index++) {
        this.bisData[i].listItem.push({
          name: '列表item内容：' + index
        })
      }
    }
  },
  methods: {
    timeupExe() {
      console.log('倒计时结束')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
