<template>
  <div>
    <button class="icon" :class="{liked: isLiked}">
      ❤
    </button>
  </div> 
</template>

<script>
export default {
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
