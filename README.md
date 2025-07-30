# Scratch Specification

A detailed explanation of how Scratch 3.0 works as a programming language.

> [!IMPORTANT]
> **Changes are underway!**
>
> This spec is being transitioned over to Vitepress. Parts of it have already been copied over and deleted from here. It will no longer be included in the README. To view it, you'll have to go to the much better [published page](https://oceanisendless.github.io/scratch-spec/). See ya there when it's up and running!
>

## Contents

* [Scratch Specification](#scratch-specification)
  * [Contents](#contents)
  * [TODO](#todo)
    * [TODO: Blocks](#todo-blocks)
  * [Palette](#palette)
    * [Example block](#example-block)
    * [Motion blocks](#motion-blocks)
      * [Standard motion blocks](#standard-motion-blocks)
        * [motion\_movesteps](#motion_movesteps)
      * [Hidden motion blocks](#hidden-motion-blocks)
    * [Looks blocks](#looks-blocks)
      * [Standard looks blocks](#standard-looks-blocks)
      * [Hidden looks blocks](#hidden-looks-blocks)
    * [Sound blocks](#sound-blocks)
      * [Standard sound blocks](#standard-sound-blocks)
      * [Hidden sound blocks](#hidden-sound-blocks)
    * [Events blocks](#events-blocks)
      * [Standard events blocks](#standard-events-blocks)
      * [Hidden events blocks](#hidden-events-blocks)
    * [Control blocks](#control-blocks)
      * [Standard control blocks](#standard-control-blocks)
      * [Hidden control blocks](#hidden-control-blocks)
    * [Sensing blocks](#sensing-blocks)
      * [Standard sensing blocks](#standard-sensing-blocks)
        * [sensing\_username](#sensing_username)
      * [Hidden sensing blocks](#hidden-sensing-blocks)
    * [Operators blocks](#operators-blocks)
      * [Standard operators blocks](#standard-operators-blocks)
      * [Hidden operators blocks](#hidden-operators-blocks)
    * [Variables blocks](#variables-blocks)
      * [Standard variables blocks](#standard-variables-blocks)
      * [Hidden variables blocks](#hidden-variables-blocks)
    * [List blocks](#list-blocks)
      * [Standard list blocks](#standard-list-blocks)
      * [Hidden list blocks](#hidden-list-blocks)
    * [Custom blocks](#custom-blocks)
      * [Standard custom blocks](#standard-custom-blocks)
      * [Hidden custom blocks](#hidden-custom-blocks)
      * [Special custom blocks](#special-custom-blocks)
    * [Music blocks](#music-blocks)
    * [Pen blocks](#pen-blocks)
    * [Video Sensing blocks](#video-sensing-blocks)
    * [Text to Speech blocks](#text-to-speech-blocks)
    * [Translate blocks](#translate-blocks)
    * [Makey Makey blocks](#makey-makey-blocks)
    * [micro:bit blocks](#microbit-blocks)
    * [LEGO EV3 blocks](#lego-ev3-blocks)
    * [BOOST blocks](#boost-blocks)
    * [WeDo 2.0 blocks](#wedo-20-blocks)
    * [Force and Acceleration blocks](#force-and-acceleration-blocks)
    * [CoreEx blocks](#coreex-blocks)
      * [Standard CoreEx blocks](#standard-coreex-blocks)
      * [Hidden CoreEx blocks](#hidden-coreex-blocks)
  * [Appendices](#appendices)
    * [File Format](#file-format)
      * [SB3](#sb3)
      * [SB2](#sb2)
      * [SB](#sb)
    * [Obsolete Blocks](#obsolete-blocks)
    * [Nonstandard Blocks](#nonstandard-blocks)
      * [Example nonstandard block](#example-nonstandard-block)
      * [TurboWarp](#turbowarp)
        * [TurboWarp blocks](#turbowarp-blocks)
          * [Last key pressed block](#last-key-pressed-block)
        * [Addon blocks](#addon-blocks)
      * [PenguinMod](#penguinmod)
      * [snail-ide](#snail-ide)
      * [Unsandboxed](#unsandboxed)
      * [Adding Platforms](#adding-platforms)

## TODO

> This spec is a work in progress; it's nowhere near complete. **Please [contribute](#contributing) if you can!** Anywhere that says TODO is something that needs to be worked on, as well as any sections that are empty or missing.

Various things need to be worked on to make this a good resource:

* **Cleanup excessive linking and wordiness.** Links to headings should only be applied if they offer further context about a section and have not been previously or recently linked to in said section. Additionally, this specification should explain everything about Scratch with **no extra wordiness or fluff.** (Unfortunately, @OceanIsEndless has a *strong* tendency to do both of these.) It is unclear what its structure should be as well.
* ⚠️ ‼️ **Cite reliable sources.** ‼️ ⚠️ This specification should provide references to the code of Scratch itself (not just wikis) to prove its claims and hopefully be an accurate source of information about the Scratch programming language. It has not been decided how to best reference material though. (Just link them, or go wiki style?)

### TODO: Blocks

This specification should eventually document every block ever! (A bit hopeful, but certainly possible, and most definitely necessary for Scratch 3.0 to be 100% functionally recreatable from this document.)

Below is a list of blocks that have been or still need to be documented here. (Fully specified blocks are checked off.) Specifying [standard](#palette) blocks is the first priority. Once they are documented, the scope of this spec can be expanded to include [hidden](#hidden-blocks), [obsolete](#obsolete-blocks), and even [nonstandard](#nonstandard-blocks) blocks as well, probably in that order.

<details>
  <summary>Click to view block list</summary>

* [ ] [Motion Blocks](#motion-blocks)
  * [ ] **Standard**
    * [ ] `move () steps`
    * [ ] `turn cw () degrees`
    * [ ] `turn ccw () degrees`
    * [ ] `go to ( v)`
    * [ ] `go to x: () y: ()`
    * [ ] `glide () secs to ( v)`
    * [ ] `glide () secs to x: () y: ()`
    * [ ] `point in direction ()`
    * [ ] `point towards ( v)`
    * [ ] `change x by ()`
    * [ ] `set x to ()`
    * [ ] `change y by ()`
    * [ ] `set y to ()`
    * [ ] `if on edge, bounce`
    * [ ] `set rotation style [left-right]`
    * [ ] `(x position)`
    * [ ] `(y position)`
    * [ ] `(direction)`
  * [ ] [**Hidden**](#hidden-blocks) (**specify** what they do, even if nothing at all)
    * [ ] `scroll right ()`
    * [ ] `scroll up ()`
    * [ ] `align scene [ v]`
    * [ ] `(x scroll)`
    * [ ] `(y scroll)`
  * [ ] [**Obsolete**](#obsolete-blocks) (**imagine** what they *would* do if kept operational)
    * [ ] `scroll right ()`
    * [ ] `scroll up ()`
    * [ ] `align scene [ v]`
    * [ ] `(x scroll)`
    * [ ] `(y scroll)`
  * [ ] [**Nonstandard**](#nonstandard-blocks) (blocks that [mods](#mod) of Scratch added)
    * [ ] [PenguinMod](#penguinmod)
      * [ ] `move [ v] () steps`
      * [ ] `change by x: () y: ()`
      * [ ] `point towards x: () y: ()`
      * [ ] `turn around`
      * [ ] `if touching ( v), bounce`
      * [ ] `set rotation style [look at | up-down v]`
      * [ ] `move to stage [ v]`
    * [ ] [Unsandboxed](#unsandboxed)
      * [ ] `(rotation style)`
* [ ] [Looks blocks](#looks-blocks)
* [ ] [Sound blocks](#sound-blocks)
* [ ] [Events blocks](#events-blocks)
* [ ] [Control blocks](#control-blocks)
* [ ] [Sensing blocks](#sensing-blocks)
* [ ] [Operators blocks](#operators-blocks)
* [ ] [Variables blocks](#variables-blocks)
* [ ] [List blocks](#list-blocks)
* [ ] [Custom blocks](#custom-blocks)
* [ ] [Addon blocks](#addon-blocks)
* [ ] *other categories of blocks*
* [ ] TODO: Write list of blocks TODO :)

</details>

## Palette

This section documents each and every block in Scratch, and its precise functionality.

> How to organize and refer to these blocks is up for debate. Naming headings for blocks by opcode could work (and probably will) but may seem too cryptic. Feel free to offer insight!

### Example block

> This is an ***example* section** about a block. It does not exist in Scratch.

The heading for a section about a block should be its opcode, as used in the [SB3](#sb3) [file format](#file-format).

**Operation:**

A brief overview of the block's function and essential info.

**Block:**

```sb
the block in scratchblocks with its [ARG]uments
```

**Arguments:**

| Name: | [Casted](#casting) to:                                                                                                    | Provides the:                  |
|:-----:|:-------------------------------------------------------------------------------------------------------------------------:|:------------------------------:|
| `ARG` | [the kind of value this argument is casted to before use by the block, linking to the procedure used to cast it](#values) | What it provides to the block. |

**Procedure:**

A deep dive into what the block does in fulfilling its operation.

### Motion blocks

These blocks relate to motion, or moving sprites. They manipulate the x position, y position, and direction of a sprite in order to position it in the desired manner. Notably, they do not do anything when used from the [stage](#stage).

#### Standard motion blocks

These motion blocks are officially supported in Scratch 3.0:

##### motion_movesteps

**Operation:**

Moves the sprite forward the given number of pixels in the direction that it is facing. Negative numbers move the sprite backwards.

**Block:**

```sb
move (STEPS) steps
```

**Arguments**:

| Name: | [Casted](#casting) to: | Provides the:                         |
|:-----:|:----------------------:|:-------------------------------------:|
|`STEPS`| [number](#to-number)   | Number of steps (aka pixels) to move. |

**Procedure:**

The x position of the sprite is changed by the **sine of the sprite's direction** multiplied by the number of steps to move, whereas the y position of the sprite is changed by the **cosine of the sprite's direction** multiplied by the number of steps to move.

This can be expressed as:

$x' = x + \sin(d) \cdot S$

$y' = y + \cos(d) \cdot S$

Where $S$ is the `STEPS` to move, $d$ is the direction of the sprite, and $x$ and $y$ are the x and y positions of the sprite, respectively.

In scratchblocks, this operation can also be replicated as:

```sb
go to x: ((x position) + (([sin v] of (direction)) * (STEPS))) y: ((y position) + (([cos v] of (direction)) * (STEPS)))
```

After the sprite is moved, its position is [fenced](#fencing-position).

#### Hidden motion blocks

These motion blocks exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility with projects created in older versions of Scratch or being used internally:

TODO

### Looks blocks

These blocks relate to the looks, or appearance of targets. They manipulate the size, costume, layer, visiblility, and graphic effects of a sprite in order to make it appear a certain way.

#### Standard looks blocks

These looks blocks are officially supported in Scratch 3.0:

TODO

#### Hidden looks blocks

These looks blocks exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility with projects created in older versions of Scratch or being used internally:

TODO

### Sound blocks

These blocks relate to sound, or the playback of audio. They play the sound files that a sprite has access to and manipulate the volume and sound effects of a sprite in order to make it stream sounds however is needed.

TODO

#### Standard sound blocks

These sound blocks are officially supported in Scratch 3.0:

TODO

#### Hidden sound blocks

These sound blocks exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility with projects created in older versions of Scratch or being used internally:

TODO

### Events blocks

These blocks relate to the start of a script. They cause scripts to run in order for the project to do things.

#### Standard events blocks

These events blocks are officially supported in Scratch 3.0:

TODO

#### Hidden events blocks

These events blocks exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility with projects created in older versions of Scratch or being used internally:

TODO

### Control blocks

These blocks relate to the execution of other blocks. They cause scripts to run in more complex ways in order for the project to perform more logical operations.

#### Standard control blocks

These control blocks are officially supported in Scratch 3.0:

TODO

#### Hidden control blocks

These control blocks exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility with projects created in older versions of Scratch or being used internally:

TODO

### Sensing blocks

These blocks relate to sensing, or detecting various values. They can read information that couldn't be determined otherwise in order to make the project more aware of its [runtime](#runtime) context.

#### Standard sensing blocks

These sensing blocks are officially supported in Scratch 3.0:

TODO

##### sensing_username

**Operation:**

Reports the [username](#username) of the [user](#user) that has loaded the [project](#project) in the context of the Scratch website.

**Block:**

```sb
(username)
```

**Arguments**:

None

**Procedure**:

* If the user is signed into their Scratch account (username known):
  * Their username is known, as the user is registered with Scratch and signed into their account.
  * **Report the user's [username](#username).**
* If the user is not signed into their account (username unknown):
  * Their username is not known, as the user is using Scratch without being signed into an account.
  * **Report an [empty string](#empty-string).**

Technically, this block can report any username registered with the Scratch website or the empty string without breaking anything. Although it is meant to report the username of the user who has loaded the project, there is no way for a project to confirm that the reported username is actually theirs.

#### Hidden sensing blocks

These sensing blocks exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility with projects created in older versions of Scratch or being used internally:

TODO

### Operators blocks

TODO: Add description

#### Standard operators blocks

These operators blocks are officially supported in Scratch 3.0:

TODO

#### Hidden operators blocks

These operators blocks exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility with projects created in older versions of Scratch or being used internally:

TODO

### Variables blocks

TODO: Add description

#### Standard variables blocks

These variables blocks are officially supported in Scratch 3.0:

TODO

#### Hidden variables blocks

These variables blocks exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility with projects created in older versions of Scratch or being used internally:

TODO

### List blocks

TODO: Add description

#### Standard list blocks

These list blocks are officially supported in Scratch 3.0:

TODO

#### Hidden list blocks

These list blocks exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility with projects created in older versions of Scratch or being used internally:

TODO

### Custom blocks

TODO: Add description

#### Standard custom blocks

These custom blocks are officially supported in Scratch 3.0:

TODO

#### Hidden custom blocks

These custom blocks exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility with projects created in older versions of Scratch or being used internally:

TODO

#### Special custom blocks

> This section may be moved to a [relevant appendix](#nonstandard-blocks), though it will have to be clarified that these blocks can be loaded into Scratch, they just don't do anything outside of [mods](#mod).

Usually, when a custom block or parameter is used outside of its definition, it does nothing or returns `0`. However, there are specific custom blocks and parameters that have unique behaviors when used outside of their definitions, specifically in certain Scratch [mods](#mod).

A strategy that some Scratch mods use to add their own blocks to Scratch without breaking compatibility (making the project not load in standard Scratch) is by adding them as custom blocks without definitions. In normal Scratch, when a custom block does not have a definition, it won't do anything special; however, when the blocks are run in mods of Scratch, they can be coded to have different behaviors. The behaviors of these blocks in standard Scratch and modifications are specified below:

TODO: Specify!!!

### Music blocks

TODO: Add description

TODO: Add sections

### Pen blocks

TODO: Add description

TODO: Add sections

### Video Sensing blocks

TODO: Add description

TODO: Add sections

### Text to Speech blocks

TODO: Add description

TODO: Add sections

### Translate blocks

TODO: Add description

TODO: Add sections

### Makey Makey blocks

TODO: Add description

TODO: Add sections

### micro:bit blocks

TODO: Add description

TODO: Add sections

### LEGO EV3 blocks

TODO: Add description

TODO: Add sections

### BOOST blocks

TODO: Add description

TODO: Add sections

### WeDo 2.0 blocks

TODO: Add description

TODO: Add sections

### Force and Acceleration blocks

TODO: Add description

TODO: Add sections

### CoreEx blocks

These two extension blocks do not do anything and simply existed with the purpose of testing Scratch 3.0's extension system. They can still be used in projects, though they do not do anything useful and the odds of encountering them in the wild (normal Scratch projects) are *highly* slim.

#### Standard CoreEx blocks

There are no standard CoreEx blocks, as they were never intended to be used in projects.

#### Hidden CoreEx blocks

These CoreEx blocks exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility reasons or being used internally for testing:

TODO

## Appendices

This section is for additional information about Scratch that is not necessarily relevant to its runtime behavior, but is good to know in addition, especially for creating highly compatible and feature-complete Scratch implementations.

### File Format

> This section will be expanded once other stuff gets documented. For now, runtime behavior is more pressing than file formatting.

Scratch projects can be saved and loaded from a computer as files. Scratch has several project file formats, each with their own complicated structures and loading behaviors. Even with a perfectly accurate [runtime](#runtime) environment, a saved project that is not properly loaded may not work as it was intended to, and could very well break!

#### SB3

The .sb3 file format is the standard format for storing Scratch **3.0** projects, the version of Scratch that this specification documents. In reality, it is a renamed [.zip](https://en.wikipedia.org/wiki/ZIP_(file_format)) file that contains the following files:

* `project.json`, a [.json](https://en.wikipedia.org/wiki/JSON) file storing info.
* Various image files used as [costumes](#costume).
* Various audio files used as [sounds](#sound).

TODO: Specify!!!

#### SB2

The .sb2 file format is the standard format for storing Scratch **2.0** projects, the version of Scratch preceding Scratch 3.0, the version that this specification documents.

The standard Scratch 3.0 editor is compatible with .sb2 files. It has a procedure for converting .sb2 files to [.sb3](#sb3) files, which it then loads.

TODO: Specify!!

#### SB

The .sb file format is the standard format for storing projects from Scratch **1.4** and earlier, which are early versions of Scratch that work drastically different than modern Scratch due to the major changes in between. Unlike [.sb2](#sb2) and [.sb3](#sb3) files, .sb files are stored in binary using a much less human-readable format.

Despite major differences, the standard Scratch 3.0 editor remains compatible with .sb files. It has a procedure for converting .sb files to .sb2 files, which it then converts to .sb3 files and loads.

TODO: Specify!

### Obsolete Blocks

> This is an interesting idea, but its inclusion is up for debate. Feel free to offer insight!

This section reimagines blocks that *were* supported in earlier versions of Scratch, but have since been removed from Scratch 3.0 or left in an inoperative state. Its goal is to closely recreate what the functionality of these blocks *would* have been if they had been kept in Scratch and were supported by Scratch 3.0.

This way, one could theoretically create an implementation of Scratch 3.0 that accurately supports *every* block from *every* official Scratch version, though obviously with subtle differences due to changes in [runtime](#runtime) behavior between Scratch versions.

Unlike the rest of this specification, the content of this section is more up to the imagination, as it dreams of how obsolete blocks *would* behave in modern Scratch, and is not actually observing the behavior of these blocks directly (though it should stay as close as possible to the block's original behavior).

### Nonstandard Blocks

> This section is not a high priority, as this specification is primarily meant to document standard Scratch. In the future, it is hoped this spec will include other branches of Scratch. This way, the behavior of projects created with them can be officially documented and remain recreatable if needed (e.g. for highly compatible [ports](https://en.wikipedia.org/wiki/Porting) of Scratch).

This section serves to document blocks that do not exist at all in Scratch, but have been added unofficially to [modifications](#mod) of Scratch. This includes both blocks added as "custom extensions," and blocks added directly to the [palette](#palette). They are specified here in order to allow projects using these nonstandard blocks to function properly if one were to reimplement the Scratch VM with implementing these blocks in mind.

> This is a dynamic section and may never be able to satisfy any particular standards for completeness. [You can help](#contributing) by adding [missing blocks](#todo-blocks) with reliable sources (e.g. links to source code).

#### Example nonstandard block

> This is an ***example* section** about a nonstandard block. It does not exist in Scratch or any modifications of it.

**Operation:**

A brief overview of the block's function and essential info.

**Block:**

```sb
the block in scratchblocks with its [ARG]uments
```

**Arguments:**

| Name: | [Casted](#casting) to:                                                                                                    | Provides the:                  |
|:-----:|:-------------------------------------------------------------------------------------------------------------------------:|:------------------------------:|
| `ARG` | [the kind of value this argument is casted to before use by the block, linking to the procedure used to cast it](#values) | What it provides to the block. |

**Procedure:**

A deep dive into what the block does in fulfilling its operation.

#### TurboWarp

[TurboWarp](https://turbowarp.org/) is a Scratch mod that compiles projects to JavaScript to make them run really fast. It maintains strong compatibility with Scratch, while also supporting a wide range of custom extensions and weird, new blocks.

TODO: Document TurboWarp blocks

##### TurboWarp blocks

These blocks are "weird, new blocks" specific to TurboWarp. This category of blocks is named after TurboWarp itself.

###### Last key pressed block

**Operation:**

Reports the key that was most recently pressed on the keyboard.

**Block:**

```sb
(last key pressed)
```

**Arguments:**

None

**Procedure:**

When the [runtime](#runtime) first starts, no [keys](#key) have been pressed. If the block is run before any keys are pressed, it reports the [empty string](#empty-string). Otherwise, the [name](#name) of the last key to have been pressed is reported.

##### Addon blocks

These blocks are added by TurboWarp addons. They are not actually real blocks, but rather [special custom blocks](#special-custom-blocks) without definitions in disguise!

#### PenguinMod

[PenguinMod](https://penguinmod.com/) is a mod of [TurboWarp](#turbowarp). It supports most TurboWarp extensions and introduces some community-made ones of its own.

TODO: Document PenguinMod blocks

#### snail-ide

[Snail IDE](https://snail-ide.js.org/) is a mod of [PenguinMod](#penguinmod). It supports most of PenguinMod's blocks and adds some of its own.

TODO: Document Snail IDE blocks

#### Unsandboxed

[Unsandboxed](https://alpha.unsandboxed.org/#0) is a mod of [TurboWarp](#turbowarp) for building games. It is compatible with TurboWarp's blocks and adds some of its own.

TODO: Document Unsandboxed blocks

#### Adding Platforms

If you know of a Scratch modification that is in use by a decent number of people and has new blocks that should be specified, please [contribute](#contributing) information on it! Though if you do, please remember that this a language specification for Scratch's runtime behavior, not a [wiki](https://scratch-wiki.info/) or other online resource. General documentation for modifications are best put elsewhere. To add one, this specification needs:

* An entry for the modification
  * Add a section above this one under [Nonstandard blocks](#nonstandard-blocks)
  * Give a brief description that highlights what it adds to Scratch as a language (must add new blocks and/or alter runtime behavior)
* Specification of its unique blocks
  * See [Example nonstandard block](#example-nonstandard-block) for details on how to add an entry for a block. Be sure to put the entry under a relevant category, which should then be entered below the relevant platform's section. For example, the `log ()` block in [TurboWarp](#turbowarp) is in the [Addon blocks](#addon-blocks) category, which is then under the TurboWarp section, since that is the platform it was added to.
  * If a mod adds a new block, and a mod is made of that mod (thus inheriting the new block), **do not document the block twice**. Blocks should be documented under the platform they first appear on. If blocks are shared between platforms, find the section for the one it was initially added to and specify it over there.
  * If the same block just so happens to exist on several platforms without any clear origination (*or* does not work the same way), then it is OK to document them separately, especially if they have identical opcodes but different behavior.

Though please make sure that the platform you wish to add is actually a modification of Scratch 3.0, and not an entirely different application. This spec is for Scratch 3.0 and offshoots of it, but a platform must share near identical base behaviors with Scratch 3.0 to be added here. For example, [Snap&zwj;*!*](https://snap.berkeley.edu/) was built off of an early version of Scratch, but is now a completely independent first-class block-based language with its own programming paradigm, and is not built with or at all related to Scratch 3.0. Other block-based Scratch-*like* apps deserve [their own spec](https://snap.berkeley.edu/snap/help/SnapManual.pdf) instead.
