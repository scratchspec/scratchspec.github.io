# scratch-spec
This repository is a serious attempt to create a formal programming language specification of Scratch.

## What this means
The purpose of a formal programming language specification is to properly define the precise **functionality**, **behavior**, and **semantics** of a programming language. This repository is an attempt to create one of those for Scratch. The ultimate end goal is for the way that Scratch behaves to be accurately reproducible elsewhere from this document alone, without having to peek into Scratch itself as well, or look into any other resources for that matter...

## Why we need one
The [Scratch Wiki](https://scratch-wiki.info/) and [Scratch discussion forums](https://scratch.mit.edu/discuss/) prove adequate for nearly every inquiry that you would ever have about Scratch, and anything that you somehow couldn't find the answer to on either can probably be found elsewhere, such as in the [Scratch source code](https://github.com/scratchfoundation/scratch-vm), or simply from working within [Scratch](https://scratch.mit.edu/) itself. Arguably, there is no need to spend valuable time writing up something as utterly absurd as a formal programming language specification for a block-based platform made up of kids who are first learning how to code.

But what these resources seem to lack, however, is a **centralized**, **accurate**, **complete**, **unambiguous**, and **to-the-point** explanation of the actual behavior of the basic blocks that you build with in Scratch. In other words, there isn't one document alone that could be used to precisely reproduce the functionality of Scratch scripts without referencing Scratch itself. And THAT is what this is for.

But _why_, you ask? ...Well, why do we do anything?

The main reason one would need this is if they were to, say, make Scratch able to function on a platform other than the web. Scratch is currently built on HTML5 and JavaScript, which are pretty versatile programming languages nowadays, but what if you wanted Scratch to run natively on, oh, I don't know... a Nintendo Wii, or maybe... _Desmos?_ 🤯 How would you go about accurately replicating Scratch on another platform such as that, without simulating a browser environment (which would be impossible on platforms with limited memory or functionality)? _"Golly, having a paper explaining the entirety of Scratch sure would be handy right about now!"_

Well, ***THAT'S WHAT THIS IS!*** A breakdown of how Scratch works so that it can be more easily recreated wherever you'd want it.

## TL;DR
This is the scratch specification. Its mission? To fully document the behavior of Scratch on the web, paving the way for porting Scratch to other platforms so that your projects can be run elsewhere.
\
\
\
\
\
\
\
`<!-- TODO: Summarize -->`
