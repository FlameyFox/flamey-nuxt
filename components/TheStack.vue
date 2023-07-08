<template>
  <div class="stack">
    <nuxt-link
      to="https://usefathom.com/ref/GJRIYY"
      rel="noopener nofollow"
      target="_blank"
      class="item"
    >
      <aside class="left">
        <img class="logo" src="/img/fathom.svg" alt="Fathom Analytics Logo" />
      </aside>
      <aside class="right">
        <h3>Fathom Analytics</h3>
        <p>
          Privacy is important and nobody likes cookie popups. I'm a big fan of
          cookieless tracking for analytics and Fathom does it best.<br />
          Simple and privacy focused. Their support is great too!<br />
          I highly recommend checking them out, if you are looking for a GDPR
          compliant alternative to Google Analytics.
        </p>
      </aside>
    </nuxt-link>
    <nuxt-link
      to="https://www.nuxt.com/"
      rel="noopener nofollow"
      target="_blank"
      class="item"
    >
      <aside class="left">
        <img class="logo" src="/img/nuxt.svg" alt="Nuxt logo" />
      </aside>
      <aside class="right">
        <h3>Nuxt</h3>
        <p>
          My current goto JS framework.<br />
          Super quick to get up and running, and i love the way it handles SSR
          while making it easy to implement SEO. Although I'm still trying to
          find the best foundation/model for my Nuxt projects, i have enjoyed
          using it for various projects.
        </p>
      </aside>
    </nuxt-link>
    <nuxt-link
      to="https://code.visualstudio.com/"
      rel="noopener nofollow"
      target="_blank"
      class="item"
    >
      <aside class="left">
        <img class="logo" src="/img/vscode.png" alt="Visual Studio Code Logo" />
      </aside>
      <aside class="right">
        <h3>Visual Studio Code</h3>
        <p>
          Like many others, i use Visual Studio Code daily for my coding needs.
          Once you have it setup with all your extensions and such, it just
          works. Nothing too complicated, i like to keep it simple. I will share
          my extensions and VS Code setup soon, once i have cleaned it up a
          bit..
        </p>
      </aside>
    </nuxt-link>
    <nuxt-link
      to="https://affiliate.notion.so/wssgvyosbqgf"
      rel="noopener nofollow"
      target="_blank"
      class="item"
    >
      <aside class="left">
        <img class="logo" src="/img/notion.png" alt="Notion App Logo" />
      </aside>
      <aside class="right">
        <h3>Notion</h3>
        <p>
          I have recently started to take my notetaking more seriously.<br />
          It has helped me keep on track with projects, personal growth and even
          helped with my mental health and stress. Notion has helped by empower
          my notetaking and has made setting up new projects and templates a
          breeze.
        </p>
      </aside>
    </nuxt-link>
    <nuxt-link
      to="https://arc.net/"
      rel="noopener nofollow"
      target="_blank"
      class="item"
    >
      <aside class="left">
        <img class="logo" src="/img/arc.png" alt="Arc Browser Logo" />
      </aside>
      <aside class="right">
        <h3>Arc Browser</h3>
        <p>
          Your browser is one of your most important tools.<br />
          Arc Browser helps me stay productive, by handling tabs in a different
          way than normal browsers. It's different from other browsers however,
          and it's not for everyone. If you're feeling underwhelmed by your
          browser's capabilities or need something fresh and new, I reccommend
          giving it a try.
        </p>
      </aside>
    </nuxt-link>
    <nuxt-link
      to="https://www.thunderbird.net/"
      rel="noopener nofollow"
      target="_blank"
      class="item"
    >
      <aside class="left">
        <img class="logo" src="/img/thunderbird.webp" alt="Thunderbird logo" />
      </aside>
      <aside class="right">
        <h3>Thunderbird</h3>
        <p>
          I know mail software is not the "hottest tech", but it's an important
          tool, and i have been using Thunderbird for a while. All my folders
          are setup for my different projects and clients and the integrations
          just work. It even has extensions too, so you can extend its features.
        </p>
      </aside>
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.stack {
  display: grid;
  gap: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }

  .item {
    padding: 2.5rem;
    border-radius: 22px;
    background: #fff;
    flex: 1;
    display: flex;
    gap: 2.5rem;
    justify-content: space-between;
    text-decoration: none;
    align-items: center;
    color: inherit;
    transition: transform 0.35s ease-in-out;
    &:hover {
      transform: translateY(-3px);
    }

    @media screen and(max-width: 768px) {
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
}
</style>
