new Vue({
  el: '#vue-container',
  data: {
    message: 'Hello Vue.js!',
    isLiked: false,
  },
  methods: {
    toggleLike: function() {
      this.isLiked = !this.isLiked
    }
  }
})