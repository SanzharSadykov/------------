<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: [1,2,3,4,5,6,7,8,9,15],
      b: [],
      c: null
    }
  },
  mounted() {
    console.log(this.a)
    for(let i = 0; i <= this.a.length; i++) {
      if(this.a[i] % 2 === 0) {
        this.b.push(this.a[i])
      }
      console.log(this.a[i])
    }
  },
}
</script>