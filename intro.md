# Introduction

This document is a serious attempt to create a [programming language specification](https://en.wikipedia.org/wiki/Programming_language_specification) of [Scratch 3.0](https://en.scratch-wiki.info/wiki/scratch_3.0). It will detail the exact behavior of Scratch so that it can be accurately reproducible from this document alone, preserving its behavior and aiding in [ports](https://en.wikipedia.org/wiki/Porting) of it to other platforms. This project is entirely "for fun" (note the quotation marks) and is not affilated with the [Scratch Foundation](https://www.scratchfoundation.org/) or related parties in any way whatsoever, though please [donate](https://www.scratchfoundation.org/donate) to them if you can so that they may continue to support and improve [Scratch](https://scratch.mit.edu/) for all.

## Preliminaries

Before reading this specification:

* **Be sure to have an understanding of computer science.** A good vocabulary, knowledge, and understanding of computational concepts is useful.
* **Being experienced with working in Scratch is immensely helpful.** Although this specification will try to explain it in full, knowing the basic concepts and quirks of Scratch just by experience will let you skim through this document easily, as not all of it is necessary to read; just to reference for accuracy.
* Scratch 3.0 is built upon the modern web; although not entirely necessary, **a basic knowledge of [JavaScript](https://en.wikipedia.org/wiki/JavaScript) can come in handy** when it comes to understanding the inner workings, logic, and rules of Scratch, as it is what Scratch runs on. Scratch does a lot of things the same way JavaScript does.
* **Be familiar with the [scratchblocks](https://scratchblocks.github.io/) [syntax](https://en.scratch-wiki.info/wiki/Block_Plugin/Syntax).** This text-based format is used to represent Scratch [blocks](#block). An option to render the scratchblocks while viewing in-browser is being considered; however, the shapes and colors of the blocks are not necessarily being documented here, but rather their functionality.

## Sources

The information about Scratch in this specification is, of course, derived from Scratch sources, e.g. the Scratch [VM](https://github.com/scratchfoundation/scratch-vm), [Wiki](https://scratch-wiki.info/), [Website](https://scratch.mit.edu/), [Editor](https://scratch.mit.edu/projects/editor), and [Discussion Forums](https://scratch.mit.edu/discuss/). [Wikipedia](https://wikipedia.org/wiki/Wikipedia:About) and [MDN Web Docs](https://developer.mozilla.org/) are linked to as well for additional information regarding general concepts and internal behaviors.

## Contributing

Please [contribute on GitHub](https://github.com/OceanIsEndless/scratch-spec/pulls) (must be **13** or older, [need a GitHub account](https://github.com/signup)) or [comment on my Scratch profile](https://scratch.mit.edu/users/Endless-Ocean/#comments) (just [need a Scratch account](https://scratch.mit.edu/join)) if you can:

* **Summarize** key **points** of sections (things can get *ridiculously wordy* at times)
* **Provide insight** into the workings of Scratch (know info that should be here)
* **Fact check** info to verify accuracy (add links to projects, code, wiki, forums)
* Make sure everything looks good (**correct formatting, spelling, grammar**)
* **Give** some **ideas**, **motivation**, or **feedback** for improving this specification
