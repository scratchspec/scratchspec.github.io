# Scratch Specification

This document is a serious attempt to create a formal programming language specification of Scratch 3.0.

> [!TIP]
> **The Scratch specification needs your help!** If you are able to:
> 
> - **Summarize key points** of sections (things can get *ridiculously wordy* at times)
> - **Provide insight** into the workings of Scratch (know info that should be here)
> - **Fact check** info to verify accuracy (add links to projects, code, wiki, forums)
> - Make sure everything looks good (**correct formatting, spelling, grammar, etc**)
> - Just **have** some **ideas**, **motivation**, or **feedback** for improving this specification \
> 
> Then please, by all means, if there's something you'd like to contribute:
> 
> - **Create a pull request** or issue in this GitHub repository highlighting what you want to change (**must be 13+ years old to create one**)
> - **Comment** what you want to change **on my profile** ([@Endless-Ocean on Scratch](https://scratch.mit.edu/users/Endless-Ocean/))

## Contents

- [Introduction](#introduction)
- [Scratch VM](#scratch-vm)
- [Projects](#projects)
- [Targets](#targets)

## Introduction

> [!NOTE]
> **Summary:** The purpose of a formal programming language specification is to properly define the precise **functionality**, **behavior**, and **semantics** of a programming language. This document is attempting to be one of those for Scratch, the ultimate end goal being to have the way that Scratch behaves be accurately derivable from this document alone, without having to reference Scratch itself or any other related resources.

This is an unofficial programming language specification of Scratch, a unique block-based coding paradigm and platform maintained by the [Scratch Foundation](https://www.scratchfoundation.org/). The goal of this document is to clearly specify in detail adequate enough to fully recreate the present behavior of projects, blocks, and scripts in Scratch 3.0 without referencing Scratch itself, including the nature of how they are executed, what each block precisely does, how all the different types of values and objects are handled, and all the little quirks in graphics rendering, effects, extensions, timing, etcetera. This would aid in accurately porting Scratch to other platforms, and is useful to have when analyzing Scratch scripts or recreating certain aspects of the Scratch programming environment in other places or for other purposes.

### Prerequisites

This document expects that the reader has a:

- Basic understanding of Scratch
- Good enough vocabulary
- An operative brain :D

If you are lacking one or more of these, it may not be in your best interest to proceed.

## Scratch VM

> [!NOTE]
> **Summary:** The Scratch Virtual Machine is the program that runs Scratch projects. This specification is supposed to fully document its behavior so that it can be accurately recreated on other platforms.

The **Scratch Virtual Machine** (**VM** for short) is the core system used to execute Scratch projects that this document outlines the *behavior* of.

Scratch 3.0 uses an online version of the VM, which is built for use in web browsers. This limits the use of Scratch projects to the web, as no official version currently exists for platforms that are not web-based. However, with the right coding skills, one could accurately **port**, or transfer it, to other platforms. Unfortunately, on platforms which do not support browser environments, this involves reprogramming the entirety of Scratch itself, which for obvious reasons is a ***massive** undertaking*. Even with [its source code](https://github.com/scratchfoundation/scratch-vm) for reference, the task of coding it from the ground up easily becomes overwhelming and complicated.

This specification is intended to aid in that process by documenting everything the VM **does** (rather than how it *works*) so that it can be implemented in whatever way is best for *any* platform if one wished. Think of it as a rubric for an assignment; it outlines all of the requirements for completion, and it is up to the reader to meet them, as long as they are up for the task.

## Projects

> [!IMPORTANT]
> **Key Scratch Concepts**
> - A **project** is a Scratch program containing **code**, **targets**, and **assets**. They are loaded/executed by the Scratch VM.
>   - A **target** is an object with **code** and can be a **sprite** or the **stage**. Each has its own properties and handle user input/output.
>     - A **sprite** is always in front of the stage. It moves within the bounds of the stage. Each one is its own independent unit.
>     - The **stage** is the backdrop shown behind the sprites. It cannot be moved or deleted. It is not bound to a specific sprite.
>   - An **asset** can be either a **costume** or a **sound**.
>     - A **costume** is an image file that **targets** can show.
>     - A **sound** is an audio file that **targets** can play.

## Targets

Targets run code. They are the **sprites** and **stage** in a project. They are the main focus of this specification, as Scratch code interacts with and relies on them heavily. They all have the following abilities:

- Contain and execute their own Scratch code
- Store their own properties and custom variables
- Renderable on the stage and interacted with by users

There are some key distinctions to be made, however. Targets come in two forms- as a **sprite**, or the **stage**. Here are the key differences between them:

| Ability          | Sprites                                           | Stage                                                |
|------------------|---------------------------------------------------|------------------------------------------------------|
| Target?          | **Yes** (programmable, handles assets, etcetera)  | **Yes** (programmable, handles assets, etcetera)     |
| Movable?         | **Yes** (its rendered image can be moved around)  | **No** (rendered image is in the center)             |
| Rotatable?       | **Yes** (its rendered image can be rotated about) | **No** (rendered image is right side up)             |
| Resizable?       | **Yes** (its rendered image can be scaled)        | **No** (rendered image is not scaled)                |
| Layerable?       | **Yes** (goes in front of/behind other sprites)   | **No** (always behind all the sprites)               |
| Local variables? | **Yes** (its variables can only be set by itself) | **No** (all targets can set its variables)           |
| Independent?     | **Yes** (can be downloaded and exist on its own)  | **No** (not downloadable*, exists in project)        |
| Deletable?       | **Yes** (can be entirely deleted from a project)  | **No*** (one and only one exists in every project)   |

> *This feature could exist in theory, however the existing implementation of Scratch 3.0 does not allow this. If handled with care, one could perhaps add this behavior in their own implementation of Scratch without compromising on accuracy, however projects with such features may not work properly in ordinary Scratch.

As seen in this table, the stage is more of a limited and unique target, whereas the sprites are what one primarily works with in their code in order to create more modular as well as interactive projects.
