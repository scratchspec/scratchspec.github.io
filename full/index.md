---
search: false
---

# Scratch Specification

A detailed explanation of how Scratch 3.0 works as a programming language.

::: warning

This page is experimental and might not render or work properly. It is intended to be a centralized version of the spec for those who may prefer it. You can view it properly through the [home page](/).

:::

---

<!--@include: @/intro/index.md{1,1}--> {#/intro/}
<!--@include: @/intro/index.md{2,}-->

---

<!--@include: @/todo/index.md{1,1}--> {#/todo/}
<!--@include: @/todo/index.md{2,}-->

---

<!--@include: @/ideas/index.md{1,1}--> {#/ideas/}
<!--@include: @/ideas/index.md{2,}-->

---

<!--@include: @/ideas/concepts/index.md{1,1}--> {#/ideas/concepts/}
<!--@include: @/ideas/concepts/index.md{2,}-->

---

<!--@include: @/ideas/values/index.md{1,1}--> {#/ideas/values/}
<!--@include: @/ideas/values/index.md{2,}-->

---

<!--@include: @/ideas/limits/index.md{1,1}--> {#/ideas/limits/}
<!--@include: @/ideas/limits/index.md{2,}-->

---

<!--@include: @/ideas/logic/index.md{1,1}--> {#/ideas/logic/}
<!--@include: @/ideas/logic/index.md{2,}-->

---

<!--@include: @/runtime/index.md{1,1}--> {#/runtime/}
<!--@include: @/runtime/index.md{2,}-->

---

<!--@include: @/palette/index.md{1,1}--> {#/palette/}
<!--@include: @/palette/index.md{2,}-->

---

<!--@include: @palette/standard/index.md{1,1}-->  {#/palette/standard/}
<!--@include: @palette/standard/index.md{2,}-->

---

<!--@include: @palette/obsolete/index.md{1,1}-->  {#/palette/obsolete/}
<!--@include: @palette/obsolete/index.md{2,}-->

---

<!--@include: @palette/nonstandard/index.md{1,1}-->  {#/palette/nonstandard/}
<!--@include: @palette/nonstandard/index.md{2,}-->

---

<!--@include: @files/index.md{1,1}--> {#/files/}
<!--@include: @files/index.md{2,}-->

---

<!--@include: @io/index.md{1,1}--> {#/io/}
<!--@include: @io/index.md{2,}-->

---

<!--@include: @network/index.md{1,1}--> {#/network/}
<!--@include: @network/index.md{2,}-->

---

<!--@include: @devices/index.md{1,1}--> {#/devices/}
<!--@include: @devices/index.md{2,}-->

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // idk much about vitepress stuff so there may be a better way of doing this :>
  const content = document.querySelector('.vp-doc'); // was going to scope it to just the page content but not sure how...
  if (content) {
    // fix links via magical anchor links
    const links = content.querySelectorAll(`a`);
    for (const link of links) {
      const url = new URL(link.href, window.location.href);
      if (
        url.pathname !== '/scratch-spec/full/' // If it's not linking to the page...
        && url.pathname.startsWith('/scratch-spec/') // And it's a link under the spec base path...
        && url.pathname !== '/scratch-spec/' // And it's not the homepage...
        && url.host === window.location.host // And it's not linking to another domain...
        && link.closest('.vp-doc') // And it's a link on the actual page...
        ) {
        if (url.hash === '') {
          url.hash = '#'+url.pathname.slice('/scratch-spec'.length);
        }
        if (document.getElementById(url.hash.slice(1))) { // And the element being linked to actually exists...
          link.href = url.hash;
        } // Otherwise it is linked to as a separate page.
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
