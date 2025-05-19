# scratch-spec

This document is a serious attempt to create a formal programming language specification of Scratch 3.0.

## Introduction

> [!NOTE]
> **Summary:** The purpose of a formal programming language specification is to properly define the precise **functionality**, **behavior**, and **semantics** of a programming language. This document is attempting to be one of those for Scratch, the ultimate end goal being to have the way that Scratch behaves be accurately derivable from this document alone, without having to reference Scratch itself or any other related resources.

This is an unofficial programming language specification of Scratch, a unique block-based coding paradigm and platform maintained by the [Scratch Foundation](https://www.scratchfoundation.org/). The goal of this document is to clearly specify in detail adequate enough to fully recreate the present behavior of projects, blocks, and scripts in Scratch 3.0 without referencing Scratch itself, including the nature of how they are executed, what each block precisely does, how all the different types of values and objects are handled, and all the little quirks in graphics rendering, effects, extensions, timing, etcetera. This would aid in accurately porting Scratch to other platforms, and is useful to have when analyzing Scratch scripts or recreating certain aspects of the Scratch programming environment in other places or for other purposes.

