<!-- #region Slide -->

# Learning from 1 year of professional development.
Let's bridge the gap between students and professionals!!!

## Introduction

- I'm Aditya and I love *experimenting* on the web.
- I also like to *share* knowledge via talks and blogs.
- I've been working at HackerRank for more than a year.

<!-- #endregion -->

<!-- #region Slide -->

My talk will have three parts.

- Components of quality software.
- How we maintain code quality.
- How we ship features.

<!-- #endregion -->

<!-- #region Slide -->

## Components of quality software.

A weekend hack or an MVP is a good starting point. But what's next? A good piece of software is-

1. Fast
2. Easy to use
3. Accessible

### Accessibility
- People using screen-readers and keyboard should be able to navigate our site.
- Use semantic markup and aria attributes.
- Follow WAI-ARIA guidelines.

[Bad Modal](./bad-modal.gif)

[Super Awesome Modal](./super-awesome-modal.gif)

https://a11y-101.com/development/landmarks

<!-- #endregion -->

<!-- #region Slide -->

## How we maintain code quality.

- Consolidate coding guidelines. [](./coding-guidelines.jpg)
- Get assistance from computer. [](./getAdminName.js)
- Automate checking quality. [](./automatic-checks.jpg)
- Write tests. [](./it_works.test.js)
- Make reusable packages. [](./design-system.gif)

<!-- #endregion -->

<!-- #region Slide -->

## How we ship features.

- Multiple teams working on different GitHub repos.
- Create PR -> deploy preview -> `master` -> `qa-review` -> `release`.
- Deploy all repos release branch using a **Slack bot**.
- Staged Rollout with Feature Flags. [](./feature_flags.js)

<!-- #endregion -->

<!-- #region Slide -->

## Find me here-

- [Website](https://adi.netlify.app/me)
- [Twitter](https://adi.netlify.app/twitter)

<!-- #endregion -->
