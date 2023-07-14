<template>
  <section class="flamey">
    <div class="center">
      <nuxt-link class="goback" to="/">Go back</nuxt-link>
      <h1>My Current Tech Stack</h1>
      <h3>
        Here is a list of some of my favorite tools and software that I use on a
        daily basis.
        <br />
        Expect this list to grow over time as i'm always looking for new tools
        to improve my workflow.
        <br />
        If you have any suggestions, please let me know!
        <br />
        Click on any of them to read more.
      </h3>
      <span>Full disclosure – some of these links are affiliate links.</span>
      <TheStack></TheStack>
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
  padding-top: 4rem;
  padding-bottom: 4rem;

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }

  a {
    color: inherit;
  }
  span {
    font-size: 0.8rem;
    margin: 10px 0;
    display: block;
    color: #999;
  }

  .center {
    max-width: 900px;
    width: 100%;

    h1 {
      font-size: 3.2rem;
      line-height: 1.15;
      font-weight: 600;
      margin-bottom: 1rem;
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
