<template>
  <section class="projects">
    <div class="project yippr">
      <div class="info">
        <h3>Njord.so</h3>
        <h4>Planning...</h4>
        <hr />
        <p>
          I feel more young people in my country of Denmark, needs to appreciate
          "financial literacy" more, and that money/finance in general is pretty
          taboo. A wish to make a website dedicated to provide free tools and
          knowledge about finances and healthy economics. Packed with useful
          tools, information, user profiles with stats and more.
        </p>
      </div>
      <a class="btn" target="_blank" rel="noopener nofollow" href="https://twitter.com/Flamey_Fox"
        >Stay tuned</a
      >
    </div>
    <div class="project">
      <div class="info">
        <h3>animetools.io</h3>
        <h4>v1.0</h4>
        <hr />
        <p>
          A selection of useful online web dev tools, such as an password
          generator, data sets and more - all with an anime twist.
        </p>
      </div>
      <a
        class="btn"
        target="_blank"
        rel="noopener nofollow"
        href="https://animetools.io/"
        >View project</a
      >
    </div>
    <div class="project">
      <div class="info">
        <h3>FlameyTV</h3>
        <h4>v1.2</h4>
        <hr />
        <p>
          Using NuxtJS and TheMovieDatabase API to hone my skills and play
          around with design ideas, optimization and to have something to pour
          my creative energy into, if i'm not thinking of other new ideas..
        </p>
      </div>
      <a
        class="btn"
        target="_blank"
        rel="noopener nofollow"
        href="https://flamey-tv.vercel.app/"
        >View project</a
      >
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects {
  display: grid;
  gap: 2rem;
  margin-top: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .project {
    padding: 2.5rem;
    border-radius: 22px;
    background: #fff;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      font-weight: 700;
      font-size: 2rem;
    }
    h4 {
      font-weight: 400;
      font-size: 1.2rem;
    }

    hr {
      background-color: rgba($color: #000000, $alpha: 0.1);
      border: 0;
      height: 1px;
      margin: 0.5rem 0 1rem;
    }

    a.btn {
      background-color: #242424;
      color: #fff;
      padding: 0.8rem 2rem;
      border-radius: 14px;
      display: block;
      width: fit-content;
      text-decoration: none;
      transition: all 0.3s ease-in-out;
      backface-visibility: hidden;
      margin-top: 1rem;

      &:hover {
        background-color: #4b4b4b;
      }
    }

    &.yippr {
      background-color: rgba($color: #bb1340, $alpha: 0.15);

      a.btn {
        background-color: rgba($color: #bb1340, $alpha: 1);

        &:hover {
          background-color: rgba($color: #bb1340, $alpha: 0.8);
        }
      }
    }
  }
}
</style>
