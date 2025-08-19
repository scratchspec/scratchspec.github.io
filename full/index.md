---
navbar: false
search: false
sidebar: false
---

# Scratch Specification

A detailed explanation of how Scratch 3.0 works as a programming language.

::: warning

This page is experimental and might not render or work properly. It is intended to be a centralized version of the spec for those who may prefer it. You can view it properly through the [home page](/).

:::

---

<!--@include: @/intro/index.md-->

---

<!--@include: @todo/index.md-->

---

<!--@include: @ideas/index.md-->

---

<!--@include: @ideas/concepts/index.md-->

---

<!--@include: @ideas/values/index.md-->

---

<!--@include: @ideas/limits/index.md-->

---

<!--@include: @ideas/logic/index.md-->

---

<!--@include: @blocks/index.md-->

---

<!--@include: @blocks/standard/index.md-->

---

<!--@include: @blocks/obsolete/index.md-->

---

<!--@include: @blocks/nonstandard/index.md-->

---

<!--@include: @files/index.md-->

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // idk much about vitepress stuff so there may be a better way of doing this :>
  const content = document; // was going to scope it to just the page but not sure how...
  if (content) {
    // fix links via magical anchor links
    const links = content.querySelectorAll(`a`);
    for (const link of links) {
      const url = new URL(link.href, window.location.href);
      if (url.pathname !== '/scratch-spec/full/' && url.pathname.startsWith('/scratch-spec/') && url.pathname !== '/scratch-spec/' && url.host === window.location.host) {
        if (url.hash === '') {
          url.hash = '#'+(url.pathname.slice('/scratch-spec'.length));
        }
        link.href = url.hash;
      }
    }

    /* Still trying to figure out how to make the headings look nicer
    // increase level of headings so it looks nicer
    for (let i = 6; i >= 1; i--) {
      const headings = content.querySelectorAll(`h${i}`);
      headings.forEach((heading, index) => {
        if (!(i === 1 && index === 0)) {
          if (i < 6) {
            heading.outerHTML = `<h${i + 1} id="${heading.id}">${heading.innerHTML}</h${i + 1}>`;
          } else {
            // hacky, but it works :]
            heading.outerHTML = `<h6 role="heading" aria-level="7" id="${heading.id}">${heading.innerHTML}</h6>`;
          }
        }
      });
    } */
  }
});
</script>

<style>
  div[role="heading"] {
    position: relative;
    font-weight: 500;
    outline: none;
  }
</style>
