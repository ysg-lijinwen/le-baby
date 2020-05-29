<script>
export default {
  data () {
    return {
      a: ''
    }
  },
  created () {
    console.log('假如这是我修改的')
    console.log(this.a)
  },
  methods: {
    onclick () {
      this.$router.push({name: 'home'})
    }
  }
}
</script>