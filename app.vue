<template>
  <div class="wrapper">
    <NuxtPage />
    <TheFooter />
  </div>
</template>

<style lang="scss">
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Nunito";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
body,
html,
#__nuxt {
  height: 100%;
}
body {
  background-color: #f3f3f3;
  font-size: 100%;
  color: #222;
}
.wrapper {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  min-height: 100%;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.35s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.goback {
  background: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: block;
  margin-bottom: 1rem;
  max-width: max-content;
  border-radius: 10px;
}
</style>
