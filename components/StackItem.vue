<template>
  <div v-if="link">
    <nuxt-link
      :to="link"
      rel="noopener nofollow"
      target="_blank"
      class="item"
    >
      <aside class="left">
        <img
          v-if="img && title"
          class="logo"
          :src="img"
          :alt="title + 'Logo'"
        />
      </aside>
      <aside class="right">
        <h3>{{ title }}</h3>
        <slot />
      </aside>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "img", "link"],
};
</script>

<style lang="scss" scoped>
.item {
  padding: 2.5rem;
  border-radius: 22px;
  background: #fff;
  flex: 1;
  display: flex;
  gap: 2.5rem;
  text-decoration: none;
  align-items: center;
  color: inherit;
  transition: transform 0.35s ease-in-out;
  &:hover {
    transform: translateY(-3px);
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
    gap: 1rem;
  }

  img.logo {
    width: 10rem;
    height: 10rem;
    background: rgba(0, 0, 0, 0.025);
    padding: 2rem;
    object-fit: contain;
    border-radius: 22px;
  }

  h3 {
    font-weight: 700;
    font-size: 1.4rem;
    margin-bottom: 1rem;
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
}
</style>
