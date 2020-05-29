<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="getComponentDataSet()">获取指定组件信息</button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <le-sticky-head-list :list-data='bisData'></le-sticky-head-list>
    <le-back-to-top ref="backToTop"></le-back-to-top>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      bisData: [
        {
          header: '列表头部1',
          listItem: [
            {
              name: '列表项内容1'
            }, {
              name: '列表项内容1'
            }, {
              name: '列表项内容1'
            }, {
              name: '列表项内容1'
            }, {
              name: '列表项内容1'
            }, {
              name: '列表项内容1'
            }, {
              name: '列表项内容1'
            }, {
              name: '列表项内容1'
            }, {
              name: '列表项内容1'
            }, {
              name: '列表项内容1'
            }, {
              name: '列表项内容1'
            }, {
              name: '列表项内容1'
            }, {
              name: '列表项内容1'
            }, {
              name: '列表项内容1'
            }, {
              name: '列表项内容1'
            },{
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            },
          ]
        }, {
          header: '列表头部2',
          listItem: [
            {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            },{
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            },
          ]
        }, {
          header: '列表头部3',
          listItem: [
            {
              name: '列表头部3'
            }, {
              name: '列表头部3'
            }, {
              name: '列表头部3'
            }, {
              name: '列表头部3'
            }, {
              name: '列表头部3'
            }, {
              name: '列表头部3'
            }, {
              name: '列表头部3'
            }, {
              name: '列表头部3'
            }, {
              name: '列表头部3'
            }, {
              name: '列表头部3'
            }, {
              name: '列表头部3'
            }, {
              name: '列表头部3'
            }, {
              name: '列表头部3'
            }, {
              name: '列表头部3'
            }, {
              name: '列表头部3'
            },{
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            }, {
              name: '列表项内容2'
            },
          ]
        },
      ]
    }
  },
  methods: {
    getComponentDataSet() {
      // let ele = document.getElementById("backToTop");
      let ele = this.$refs.backToTop;
      console.log(ele)
      ele.getComponentProps
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
