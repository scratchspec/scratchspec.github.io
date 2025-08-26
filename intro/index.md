# Introduction

This document is a serious attempt to create a [programming language specification](https://en.wikipedia.org/wiki/Programming_language_specification) of [Scratch 3.0](https://en.scratch-wiki.info/wiki/scratch_3.0). It will detail the exact behavior of Scratch so that it can be accurately reproducible from this document alone, preserving its behavior and aiding in [ports](https://en.wikipedia.org/wiki/Porting) of it to other platforms. This project is entirely "for fun" (note the quotation marks) and is not affilated with the [Scratch Foundation](https://www.scratchfoundation.org/) or related parties in any way whatsoever, though please [donate](https://www.scratchfoundation.org/donate) to them if you can so that they may continue to support and improve [Scratch](https://scratch.mit.edu/) for all.

## Preliminaries

Before reading this specification:

* **Be sure to have an understanding of computer science.** A good vocabulary, knowledge, and understanding of computational concepts is useful.
* **Being experienced with working in Scratch is immensely helpful.** Although this specification will try to explain it in full, knowing the basic concepts and quirks of Scratch just by experience will let you skim through this document easily, as not all of it is necessary to read; just to reference for accuracy.
* Scratch 3.0 is built upon the modern web; although not entirely necessary, **a basic knowledge of [JavaScript](https://en.wikipedia.org/wiki/JavaScript) can come in handy** when it comes to understanding the inner workings, logic, and rules of Scratch, as it is what Scratch runs on. Scratch does a lot of things the same way JavaScript does.
* **Be familiar with the [scratchblocks](https://scratchblocks.github.io/) [syntax](https://en.scratch-wiki.info/wiki/Block_Plugin/Syntax).** This text-based format is used to represent Scratch [blocks](/ideas/concepts/#block). Although the blocks currently render while reading in a web browser, it is still good to know how to interpret them textually, especially if block rendering support is somehow unavailable, e.g. when viewing the source Markdown files directly.

## Sources

The information about Scratch in this specification is, of course, derived from Scratch sources, e.g. the Scratch [VM](https://github.com/scratchfoundation/scratch-vm), [Wiki](https://scratch-wiki.info/), [Website](https://scratch.mit.edu/), [Editor](https://scratch.mit.edu/projects/editor), and [Discussion Forums](https://scratch.mit.edu/discuss/). [Wikipedia](https://wikipedia.org/wiki/Wikipedia:About) and [MDN Web Docs](https://developer.mozilla.org/) are linked to as well for additional information regarding general concepts and internal behaviors.

## Contributing

Please [contribute on GitHub](https://github.com/OceanIsEndless/scratch-spec/pulls) (must be **13** or older, [need a GitHub account](https://github.com/signup)) or [comment on my Scratch profile](https://scratch.mit.edu/users/Endless-Ocean/#comments) (just [need a Scratch account](https://scratch.mit.edu/join)) if you can:

* **Summarize** key **points** of sections (things can get *ridiculously wordy* at times)
* **Provide insight** into the workings of Scratch (know info that should be here)
* **Fact check** info to verify accuracy (add links to projects, code, wiki, forums)
* Make sure everything looks good (**correct formatting, spelling, grammar**)
* **Give** some **ideas**, **motivation**, or **feedback** for improving this specification

See the [TODO](/todo/) list for ways you can help!

## FAQ

*Questions that would be frequently asked if someone were to ask them.*

::: warning

This specification is a **work-in-progress** and is probably not very helpful or accurate at the moment. However, progress is being made, little by little! Just be sure to take what it says with a grain of salt. Most of it has been written without much research, and it will be fact-checked and made more accurate in the future. How it should best present and explain information is still being figured out as well. It will just take a little experimenting before it gets to be a solid resource. Thank you for understanding!

:::

### Where to start?

* If you want a **general understanding** of Scratch's inner workings for whatever reason, find what interests you in the sidebar to the left. Use the search tool up at the top to find something specific. You can simply gloss over anything else you don't want to read.
* If you want **formal definitions** for basic Scratch terms, see [Ideas](/ideas/).
* If you want to understand specific **block behaviors**, see [Palette](/palette/).
  * If you want to know more on **removed blocks**, see [Obsolete Blocks](/palette/obsolete/).
  * If you want to know more on **blocks from mods**, see [Nonstandard Blocks](/palette/nonstandard/).
* If you want to know **how scripts run**, see [Runtime](/runtime/).
* If you want to learn about the file format used for saving Scratch projects, see [File Format](/files/).
* If you want an in-depth explanation of how Scratch receives input, renders graphics, and plays sounds, see [Input / Output](/io/).
* If you want to understand how Scratch handles **cloud variables** and other **web requests**, see [Networking](/network/).
* If you want a deep dive into **Scratch Link** and Scratch-to-**hardware connectivity**, see [Devices](/devices/).

### What can Scratch do?

Although simplistic in nature, Scratch has many complex and useful features built-in.

At its core, Scratch can:

* **Change values** in a [runtime](/ideas/concepts/#runtime)
* **Run scripts** [single-threaded](https://en.wikipedia.org/wiki/Cooperative_multitasking)
* **Play sounds** using speakers
* **Show images** and graphics

Also, in a fully functional environment, Scratch can access:

* A **keyboard** (detect keys the user presses)
* A **mouse** (read its position and button state)
* A **microphone** (gauge surrounding loudness)
* A **clock** (get local and UTC time in milliseconds)
* **Wi-Fi** (make network requests to external servers)
* **Bluetooth** (connect to supported hardware)
* A **webcam** (sense motion in a direction)

This specification aims to document everything that Scratch does as a programming language, which is actually... a lot!

### What's the point? {#whats-the-point}

This specification exists to document the behavior of Scratch 3.0 as a programming language. It can open the door to:

* **Accurately porting Scratch to run natively on other platforms**
  * It could help efforts to make Scratch available on platforms that aren't web-based (if any).
  * @OceanIsEndless, the initial creator of this specification, has a lot of wild ideas on their mind regarding Scratch. Their ideas are likely not at all worth their time, but writing this spec will allow them to try doing interesting things such as creating a Scratch to [Desmos](https://www.desmos.com/calculator) packager, or porting Scratch to the [Wii](https://en.wikipedia.org/wiki/Wii). A bit ambitious, yes, and absolutely crazy—but a specification like this could aid projects like these and more. It can help ensure compatibility and easy coding.
  * It could help this super cool rapidly-developing [3DS port](https://github.com/NateXS/Scratch-3DS), though the spec may not be done before contributors  over there figure out how Scratch works for themselves anyway. :)
* **Recreating parts of Scratch (blocks, scripts) for demonstration**
  * For educational reasons, one might want to recreate the behavior of certain parts of Scratch without the full force of the Scratch editor on hand. This spec will eventually provide information ranging from exact block behaviors to full-on runtime execution, making understanding the way each part of Scratch works simple.
* **Improving Scratch in the future while keeping it 100% compatible**
  * It isn't known if this spec will reach a state that the developers of Scratch could use as reference, but if so, it could help ensure that Scratch projects remain functionally the same after code rewrites.
* **Directly citing the workings of Scratch without linking wikis or code**
  * Although the [Scratch Wiki](https://scratch-wiki.info/) and code of Scratch work well for showing Scratch concepts and runtime behavior, one of them tends to abstract away particular functionalities while the other offers thousands of lines of pure [JavaScript](/ideas/concepts/#javascript). This specification is meant to serve as one clear and concise document explaining the behaviors, blocks, and quirks of Scratch 3.0 in all its blocky glory.
* **Reimplementing Scratch 3.0 in case of catastrophe**
  * This kind of blends together all of the previous points. If the Scratch editor were to magically disappear or break entirely (it won't, but in theory), then the Scratch Wiki could guide you in making a fairly accurate reimplementation of Scratch, but would fall short in exactly reproducing the runtime behavior, procedures, and quirks of Scratch, from scratch (literally). Although the wiki strives to be all-encompassing (and it is indeed very far-reaching), a document solely dedicated to the functionality of Scratch will help preserve its literal, programmatic behavior in one organized doc.
* **"Real" programming languages have them.**
  * [Scratch is cool](https://blob.codes/scratch-is-cool/). It is [Turing-complete](https://en.wikipedia.org/wiki/Turing_completeness). Lots of languages far less significant than Scratch have [programming language specifications](https://en.wikipedia.org/wiki/Programming_language_specification). And yet Scratch lacks one. The Scratch Wiki helps document the **ideas** of Scratch, but a singular document dedicated to specifying *exactly* all that Scratch does could help it secure official programming language status.
* **Who knows what?**
  * If this spec is made reliable enough, it could be cited (or at least, the underlying sources that it will eventually reference for verifability) in the underdeveloped [Wikipedia page about Scratch ***as a programming language***](https://en.wikipedia.org/wiki/Scratch_(programming_language)).
  
It could be argued that this specification is reinventing the wheel in some ways. However, if it is ever completed, it could serve as a great resource for Scratch 3.0.

### Why?

Why not?
