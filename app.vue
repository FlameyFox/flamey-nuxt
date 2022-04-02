<template>
  <div class="wrapper">
    <section class="flamey">
      <div class="center">
        <h1>FlameyFox</h1>
        <h3>Web Developer based in Odense, DK.</h3>
        <p>
          I love making minimalist design, optimizing performance, and<br />
          streamlining UX in modern fun approachable solutions.
        </p>

        <!-- <h2>Recent work and projects</h2> -->
        <TheProjects />
      </div>
    </section>
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
}
.wrapper {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  min-height: 100%;
}
.flamey {
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }

  .center {
    max-width: 800px;
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
