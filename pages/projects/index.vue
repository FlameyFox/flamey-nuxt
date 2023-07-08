<template>
  <section class="flamey">
    <div class="center">
      <nuxt-link class="goback" to="/">Go back</nuxt-link>
      <h1>Projects</h1>
      <h3>Take a look at my current ongoing projects</h3>

      <!-- <h2>Recent work and projects</h2> -->
      <TheProjects />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.flamey {
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  a{
    color: inherit;
  }

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }

  .center {
    max-width: 900px;
    width: 100%;

    h1 {
      font-size: 3.2rem;
      font-weight: 600;
    }
    h2 {
      font-weight: 600;
      font-size: 2.2rem;
    }
    h3 {
      font-weight: 400;
      margin-bottom: 0.5rem;
    }
    p {
      font-weight: 200;
      font-size: 1.1rem;
    }
  }
}
</style>
