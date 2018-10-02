<template>
  <div>
    <button @click="toggleLike()" class="icon" :class="{liked: isLiked}">
      ❤ {{nbLikes}}
    </button>
  </div> 
</template>

<script>
export default {
  props: {
    nbLikes: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      isLiked: true,
    }
  },
  methods: {
    toggleLike: function () {
      this.isLiked = !this.isLiked
    }
  }
}
</script>

<style>

.liked {
  color: red;
}

</style>
