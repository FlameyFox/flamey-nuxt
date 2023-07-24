r<template>
  <section class="flamey">
    <div class="center">
      <h1>FlameyFox</h1>
      <h3>Web Developer based in Denmark.</h3>
      <p>
        I love making websites of all kinds focusing on minimalistic clean
        designs, optimized performance, and approachable UX. On this website, i
        share my projects and tools, and i hope to share my thoughts as i
        continue on my dev journey.
      </p>
      <TheLinks />
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
      max-width: 640px;
    }
  }
}
</style>
