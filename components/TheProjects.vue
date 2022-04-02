<template>
  <section class="projects">
    <div class="project yippr">
      <div class="info">
        <h3>Yippr</h3>
        <h4>2022 - under development</h4>
        <hr />
        <p>
          A social platform build using NuxtJS and Supabase. It's inspired by
          Twitter and has borrowed many features from there, but builds on it
          with tools directed towards engaging and commissioning with digital
          artists and content creators.
        </p>
      </div>
      <a
        class="btn"
        target="_blank"
        rel="noopener nofollow"
        href="https://yippr.net"
        >View project</a
      >
    </div>
    <div class="project">
      <div class="info">
        <h3>Future plans</h3>
        <h4>2023 and onwards..</h4>
        <hr />
        <p>
          Continue building on Yippr to gain experience in the tech stack and
          some hands on experience with a project and community.
        </p>
      </div>
      <a class="btn" href="#">. . . . . . . . . . . </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }

  .project {
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
