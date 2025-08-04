---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Scratch Specification"
  tagline: "A detailed explanation of how Scratch 3.0 works. WIP. This is in early stages and not yet complete."
  actions:
    - theme: brand
      text: Introduction
      link: /intro/
    - theme: alt
      text: Contents
      link: /contents/
    - theme: alt
      text: FAQ
      link: /intro/#faq

features:
  - title: Introduction
    link: /intro/
    details: An explanation of what this spec is trying to achieve.
  - title: Concepts
    link: /concepts/
    details: Formal definitions for basic Scratch concepts.
  - title: Runtime
    link: /runtime/
    details: How scripts run.
  - title: Palette
    link: /palette/
    details: Every. Block. Ever.
  - title: Project Files
    link: /files/
    details: The file formats used to save and load Scratch runtime objects.
  - title: Input / Output
    link: /io/
    details: How Scratch receives inputs, renders images, and plays sounds.
  - title: Cloud Networking
    link: /network/
    details: How Scratch handles requests to external servers, as well as cloud variable manipulation.
  - title: Scratch Link
    link: /devices/
    details: How Scratch interacts with programmable hardware components.
---