<template>
  <section class="links">
    <div class="link yippr">
      <div class="info">
        <h3>My Projects</h3>
        <hr />
        <p>Take a look at my current projects.</p>
      </div>
      <nuxt-link class="btn" to="/projects">Check em' out!</nuxt-link>
    </div>
    <div class="link">
      <div class="info">
        <h3>My Tech Stack</h3>
        <hr />
        <p>
          If you are curious what tools i use, i have listed some of my favorite
          here.
        </p>
      </div>
      <nuxt-link class="btn" to="/stack">Ooh, let me see!</nuxt-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.links {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }

  .link {
    padding: 1.5rem;
    border-radius: 22px;
    background: #fff;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      font-weight: 700;
      font-size: 2rem;
      color: #222;
    }
    h4 {
      font-weight: 400;
      font-size: 1.2rem;
      color: #222;
    }

    hr {
      background-color: rgba($color: #222, $alpha: 0.1);
      border: 0;
      height: 1px;
      margin: 0.5rem 0 1rem;
    }

    a.btn {
      background-color: #f4f4f4;
      color: #222;
      padding: 0.8rem 2rem;
      border-radius: 14px;
      display: block;
      width: fit-content;
      text-decoration: none;
      transition: all 0.3s ease-in-out;
      backface-visibility: hidden;
      margin-top: 1rem;

      &:hover {
        background-color: #e9e9e9;
      }
    }
  }
}
</style>
