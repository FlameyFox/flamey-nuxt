<template>
  <section class="flamey">
    <div class="center">
      <nav aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/blog">Blog</nuxt-link></li>
          <li aria-current="page">{{ post?.title }}</li>
        </ol>
      </nav>

      <article
        class="blog-post"
        v-if="post"
        itemscope
        itemtype="https://schema.org/BlogPosting">
        <header class="post-header">
          <h1 itemprop="headline">{{ post.title }}</h1>
          <div class="post-meta">
            <time :datetime="post.date" itemprop="datePublished">
              {{ formatDate(post.date) }}
            </time>
            <span
              itemprop="author"
              itemscope
              itemtype="https://schema.org/Person">
              <span itemprop="name">FlameyFox</span>
            </span>
          </div>
          <p class="post-description" itemprop="description">
            {{ post.description }}
          </p>
        </header>

        <div class="post-content" itemprop="articleBody">
          <ContentDoc :document="post" />
        </div>
      </article>

      <div v-else>
        <p>Loading post...</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const route = useRoute();
const currentUrl = `https://flameyfox.com/blog/${route.params.slug}`;

// Fetch the post based on the slug
const { data: post } = await useAsyncData(`blog-${route.params.slug}`, () =>
  queryContent("/blog")
    .where({ _path: `/blog/${route.params.slug}` })
    .findOne()
);

// 404 handling
if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Blog post not found",
  });
}

// Format date helper
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Enhanced SEO meta tags
useSeoMeta(() => ({
  title: post.value?.title,
  description: post.value?.description,
  ogTitle: post.value?.title,
  ogDescription: post.value?.description,
  ogUrl: currentUrl,
  ogType: "article",
  ogPublishedTime: post.value?.date,
  twitterCard: "summary_large_image",
  twitterTitle: post.value?.title,
  twitterDescription: post.value?.description,
  articlePublishedTime: post.value?.date,
  articleAuthor: "FlameyFox",
  articleSection: "Technology", // or derive from tags
  articleTag: post.value?.tags?.join(", "),
  robots: "index, follow",
  canonical: currentUrl,
}));

// JSON-LD structured data
useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.value?.title,
        description: post.value?.description,
        author: {
          "@type": "Person",
          name: "FlameyFox",
          url: "https://flameyfox.com",
        },
        datePublished: post.value?.date,
        dateModified: post.value?.date,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": currentUrl,
        },
        url: currentUrl,
        keywords: post.value?.tags?.join(", "),
      }),
    },
  ],
});
</script>

<style lang="scss" scoped>
.flamey {
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 4rem;
  padding-bottom: 4rem;

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }

  a {
    color: inherit;
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
      line-height: 1.6;
    }
  }
}

.breadcrumb {
  display: flex;
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  font-size: 0.9rem;

  li {
    &:not(:last-child)::after {
      content: " / ";
      margin: 0 0.5rem;
      color: #999;
    }
  }

  a {
    color: #777;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.post-header {
  margin-bottom: 2rem;

  .post-meta {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
    font-size: 0.9rem;
    color: #666;
  }

  .post-description {
    font-size: 1.2rem;
    color: #555;
    font-style: italic;
    margin-bottom: 2rem;
  }
}

.post-content {
  margin-bottom: 3rem;

  // Improve readability
  :deep(img) {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 1rem 0;
  }

  :deep(code) {
    background-color: #f4f4f4;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9rem;
  }

  :deep(pre) {
    background-color: #f4f4f4;
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 1rem 0;
  }

  :deep(blockquote) {
    border-left: 4px solid #0066cc;
    padding-left: 1rem;
    margin: 1rem 0;
    font-style: italic;
    color: #555;
  }
}
</style>
