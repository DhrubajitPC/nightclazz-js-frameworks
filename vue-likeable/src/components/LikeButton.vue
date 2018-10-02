<template>
  <div>
    <button class="icon" :class="{liked: isLiked}">
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
  }
}
</script>

<style>

.liked {
  color: red;
}

</style>
