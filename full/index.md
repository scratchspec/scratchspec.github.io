---
search: false
---

# Scratch Specification

A detailed explanation of how Scratch 3.0 works as a programming language.

::: warning

This page is experimental and might not render or work properly. It is intended to be a centralized version of the spec for those who may prefer it. You can view it properly through the [home page](/).

:::

<!-- Below, custom heading anchors are applied to the top level heading of each section to make them unique and identifiable when the section links are automatically converted to heading links by the setup script for viewing. The custom anchor should exactly match the absolute path to the section as if it were being linked to. -->

---

<!--@include: @intro/index.md{1,1}--> {#/intro/}
<!--@include: @intro/index.md{2,}-->

---

<!--@include: @todo/index.md{1,1}--> {#/todo/}
<!--@include: @todo/index.md{2,}-->

---

<!--@include: @concepts/index.md{1,1}--> {#/concepts/}
<!--@include: @concepts/index.md{2,}-->

---

<!--@include: @concepts/ideas/index.md{1,1}--> {#/concepts/ideas/}
<!--@include: @concepts/ideas/index.md{2,}-->

---

<!--@include: @concepts/values/index.md{1,1}--> {#/concepts/values/}
<!--@include: @concepts/values/index.md{2,}-->

---

<!--@include: @concepts/limits/index.md{1,1}--> {#/concepts/limits/}
<!--@include: @concepts/limits/index.md{2,}-->

---

<!--@include: @concepts/logic/index.md{1,1}--> {#/concepts/logic/}
<!--@include: @concepts/logic/index.md{2,}-->

---

<!--@include: @runtime/index.md{1,1}--> {#/runtime/}
<!--@include: @runtime/index.md{2,}-->

---

<!--@include: @palette/index.md{1,1}--> {#/palette/}
<!--@include: @palette/index.md{2,}-->

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
  const content = document.querySelector('.vp-doc');
  if (content) {
    const links = content.querySelectorAll(`a`);
    for (const link of links) { // For each link...
      const url = new URL(link.href, window.location.href);
      if (
        url.pathname !== window.location.pathname // If it's not a link on the page...
        && url.pathname.startsWith('/scratch-spec/') // And it's a link under the spec base path...
        && url.pathname !== '/scratch-spec/' // And it's not the homepage...
        && url.host === window.location.host // And it's not linking to another domain...
        && link.closest('.vp-doc') // And it's a link on the actual page...
        ) {
        if (url.hash === '') {
          url.hash = '#'+url.pathname.slice('/scratch-spec'.length);
        }
        if (document.getElementById(url.hash.slice(1))) { // And the element being linked to actually exists...
          link.href = url.hash; // Then link to the heading on the page, instead of the separate section.
        } // Otherwise it is linked to as a separate page.
      }
    }
  }
});
</script>
