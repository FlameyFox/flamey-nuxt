<template>
  <div class="stack">
    <stack-item
      title="Fathom Analytics"
      img="/img/fathom.svg"
      link="https://usefathom.com/ref/GJRIYY"
    >
      <p>
        Privacy is important and nobody likes cookie popups. I'm a big fan of
        cookieless tracking for analytics and Fathom does it best.
        <br />
        Simple and privacy focused. Their support is great too!
        <br />
        I highly recommend checking them out, if you are looking for a GDPR
        compliant alternative to Google Analytics.
      </p>
    </stack-item>
    <stack-item title="Nuxt" img="/img/nuxt.svg" link="https://www.nuxt.com/">
      <p>
        My current goto JS framework.
        <br />
        Super quick to get up and running, and i love the way it handles SSR
        while making it easy to implement SEO. Although I'm still trying to find
        the best foundation/model for my Nuxt projects, i have enjoyed using it
        for various projects.
      </p>
    </stack-item>
    <stack-item
      title="Visual Studio Code"
      img="/img/vscode.png"
      link="https://code.visualstudio.com/"
    >
      <p>
        Like many others, i use Visual Studio Code daily for my coding needs.
        Once you have it setup with all your extensions and such, it just works.
        Nothing too complicated, i like to keep it simple. I will share my
        extensions and VS Code setup soon, once i have cleaned it up a bit..
      </p>
    </stack-item>
    <stack-item
      title="Notion"
      img="/img/notion.png"
      link="https://affiliate.notion.so/wssgvyosbqgf"
    >
      <p>
        I have recently started to take my notetaking more seriously.
        <br />
        It has helped me keep on track with projects, personal growth and even
        helped with my mental health and stress. Notion has helped by empower my
        notetaking and has made setting up new projects and templates a breeze.
      </p>
    </stack-item>
    <stack-item title="Arc" img="/img/arc.png" link="https://arc.net/">
      <p>
        Your browser is one of your most important tools.
        <br />
        Arc Browser helps me stay productive, by handling tabs in a different
        way than normal browsers. It's different from other browsers however,
        and it's not for everyone. If you're feeling underwhelmed by your
        browser's capabilities or need something fresh and new, I reccommend
        giving it a try.
      </p>
    </stack-item>
    <stack-item
      title="Breakdance"
      img="/img/breakdance.svg"
      link="https://breakdance.com/ref/268/?campaign=portfolio"
    >
      <p>
        Love it or hate it, a big part of the internet still use Wordpress (
        <nuxt-link to="https://wordpress.com/" target="_blank">
          around 43%
        </nuxt-link>
        ).
        <br />
        So when the time comes for me to make a project in Wordpress, i use
        Breakdance.
        <br />
        It's by far the best visual editor i've used and the performance is
        ridiculous. I highly reccommend checking it out, if you often deal with
        Wordpress.
      </p>
    </stack-item>
    <stack-item title="Vercel" img="/img/vercel.svg" link="https://vercel.com/">
      <p>
        I use vercel for most of my simple hosting needs.
        <br />
        It just works, and is pretty fast to get going.
      </p>
    </stack-item>
    <stack-item
      title="Thunderbird"
      img="/img/thunderbird.webp"
      link="https://www.thunderbird.net/"
    >
      <p>
        I know mail software is not the "hottest tech", but it's an important
        tool, and i have been using Thunderbird for a while. All my folders are
        setup for my different projects and clients and the integrations just
        work. It even has extensions too, so you can extend its features.
      </p>
    </stack-item>
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

  p > a{
    color:#222;
  }
}
</style>
