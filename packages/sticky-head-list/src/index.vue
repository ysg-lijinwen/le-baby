<template>
  <div class="wrap">
    <div v-for="(bData , i) in listData" :key="i">
      <div class="header">
        {{bData.header}}
      </div>
      <div v-for="(item , j) in bData.listItem" :key="j">
        <div>{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'le-sticky-head-list',
  props: {
    listData: {
      type: Array
    },
  },
  data() {
    return {
    }
  },
  methods: {

  },
  created() {
  },
  destroyed() {
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  border: 20px solid blue;
}
.header {
  position: sticky;
  top: 0px;
  margin-top: 20px;
  background-color: aqua;
}
</style>