<template>
  <div
    id="app"
    class="h-100 w-100"
  >
    <header v-if="$route.meta.showHeader">
      header
    </header>
    <router-view :key="$route.fullPath" />
    <footer v-if="$route.meta.showFooter">
      footer
    </footer>
  </div>
</template>

<script>

export default {
}

</script>
