# scratch-spec

> This is the scratch specification. Its mission? To fully document the behavior of Scratch on the web, paving the way for porting Scratch to other platforms so that your projects can be run elsewhere.

This repository is a serious attempt to create a formal programming language specification of Scratch 3.0.

## What this means

The purpose of a formal programming language specification is to properly define the precise **functionality**, **behavior**, and **semantics** of a programming language. This repository is an attempt to create one of those for Scratch, the ultimate end goal being to have the way that Scratch behaves be accurately derivable from this document alone, without having to reference Scratch itself or any other related resources.

## We don't have this

The [Scratch Wiki](https://scratch-wiki.info/) and [Scratch discussion forums](https://scratch.mit.edu/discuss/), as well as the [Scratch source code](https://github.com/scratchfoundation/scratch-vm), and simply [Scratch itself](https://scratch.mit.edu/) provide *nearly* all the information that one would ever need regarding scratch. Arguably, there is absolutely no need to spend valuable time writing up something as utterly absurd as a formal programming language specification for a block-based programming platform made up of kids who are first learning how to code.

But what these resources lack, however, is *one single document* that could be used to accurately reproduce the behavior of a Scratch project, *without* having to reference Scratch itself. **That** is what ***this*** is trying to be.

## Why you'd need it

The main reason that a Scratch specification is neeeded is so that it can be accurately replicated on other platforms. Currently, Scratch runs on the web (HTML5, CSS, and JS) which already makes it very versatile, and it works on a wide variety of platforms.

**BUT** what if you wanted to make modern Scratch able to function on a platform that **can't natively run Scratch?** How would you go about accurately executing a Scratch project on an unsupported platform without being able to simulate a browser environment?

You *could* attempt to convert a Scratch project into a format usable on another platform (automatically or manually recreating it), *or* you could attempt to create a one-to-one port of the entire Scratch Virtual Machine (which is behind the execution of Scratch projects). Both of these are perfectly viable solutions.

However, regardless of method, one still has to make the project behave identically to how it would in Scratch (if you're going for accuracy), which is quite a challenge considering how unique Scratch is as a programming language. How would you recreate all of the little details and kinks? (If you code on Scratch regularly, you should know that Scratch is unique in its design, and the way it works is quite distinct from other programming languages.)

Well, ***THAT'S WHERE THIS COMES IN!*** This specification is meant to be a solid breakdown of how the block-based language of Scratch works so that it can be more easily recreated outside of actual Scratch.

## TL;DR

This is not a waste of time. This is **SCIENCE**. 😎

(idk)
