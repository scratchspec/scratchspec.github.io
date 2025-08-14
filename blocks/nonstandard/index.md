# Nonstandard Blocks

::: info

This section is not a high priority, as this specification is primarily meant to document standard Scratch. In the future, it is hoped this spec will include other branches of Scratch. This way, the behavior of projects created with them can be officially documented and remain recreatable if needed (e.g. for highly compatible [ports](https://en.wikipedia.org/wiki/Porting) of Scratch).

:::

This section serves to document blocks that do not exist at all in Scratch, but have been added unofficially to [modifications](/ideas/#mod) of Scratch. They are specified here in order to allow projects using these nonstandard blocks to function properly if one were to create a reimplementation of the Scratch VM with supporting these blocks in mind.

> This is a dynamic section and may never be able to satisfy any particular standards for completeness. [You can help](/intro/#contributing) by adding [missing blocks](/todo/#todo-blocks) with reliable sources (e.g. links to source code).

::: details Index

[[toc]]

:::

## Example nonstandard block

::: info

This is an ***example* section** about a nonstandard block. It does not exist in Scratch or any modifications of it.

:::

**Operation:**

A brief overview of the block's function and essential info.

**Block:**

```sb
the block in scratchblocks with its [ARG]uments
```

**Arguments:**

| Name: | [Casted](/ideas/#casting) to:                                                                                                    | Provides the:                  |
|:-----:|:-------------------------------------------------------------------------------------------------------------------------:|:------------------------------:|
| `ARG` | [the kind of value this argument is casted to before use by the block, linking to the procedure used to cast it](/ideas/#values) | What it provides to the block. |

**Procedure:**

A deep dive into what the block does in fulfilling its operation.

## TurboWarp

[TurboWarp](https://turbowarp.org/) is a Scratch mod that compiles projects to JavaScript to make them run really fast. It maintains strong compatibility with Scratch, while also supporting a wide range of custom extensions and weird, new blocks.

TODO: Document TurboWarp blocks

### TurboWarp blocks

These blocks are "weird, new blocks" specific to TurboWarp. This category of blocks is named after TurboWarp itself.

#### Last key pressed block

**Operation:**

Reports the key that was most recently pressed on the keyboard.

**Block:**

```sb
last key pressed :: reporter #ff4c4c
```

**Arguments:**

None

**Procedure:**

When the [runtime](/ideas/#runtime) first starts, no [keys](/ideas/#key) have been pressed. If the block is run before any keys are pressed, it reports the [empty string](/ideas/#empty-string). Otherwise, the [name](/ideas/#name) of the last key to have been pressed is reported.

### Addon blocks

These blocks are added by TurboWarp addons. They are not actually real blocks, but rather [special custom blocks](/blocks/standard/#special-custom-blocks) without definitions in disguise!

## PenguinMod

[PenguinMod](https://penguinmod.com/) is a mod of [TurboWarp](#turbowarp). It supports most TurboWarp extensions and introduces some community-made ones of its own.

TODO: Document PenguinMod blocks

## snail-ide

[Snail IDE](https://snail-ide.js.org/) is a mod of [PenguinMod](#penguinmod). It supports most of PenguinMod's blocks and adds some of its own.

TODO: Document Snail IDE blocks

## Unsandboxed

[Unsandboxed](https://alpha.unsandboxed.org/#0) is a mod of [TurboWarp](#turbowarp) for building games. It is compatible with TurboWarp's blocks and adds some of its own.

TODO: Document Unsandboxed blocks

## Adding Platforms

If you know of a Scratch modification that is in use by a decent number of people and has new blocks that should be specified, please [contribute](/intro/#contributing) information on it! Though if you do, please remember that this a language specification for Scratch's runtime behavior, not a [wiki](https://scratch-wiki.info/) or other online resource. General documentation for modifications are best put elsewhere. To add one, this specification needs:

* An entry for the modification
  * Add a section above this one under [Nonstandard blocks](#nonstandard-blocks)
  * Give a brief description that highlights what it adds to Scratch as a language (must add new blocks and/or alter runtime behavior)
* Specification of its unique blocks
  * See [Example nonstandard block](#example-nonstandard-block) for details on how to add an entry for a block. Be sure to put the entry under a relevant category, which should then be entered below the relevant platform's section. For example, the `log ()` block in [TurboWarp](#turbowarp) is in the [Addon blocks](#addon-blocks) category, which is then under the TurboWarp section, since that is the platform it was added to.
  * If a mod adds a new block, and a mod is made of that mod (thus inheriting the new block), **do not document the block twice**. Blocks should be documented under the platform they first appear on. If blocks are shared between platforms, find the section for the one it was initially added to and specify it over there.
  * If the same block just so happens to exist on several platforms without any clear origination (*or* does not work the same way), then it is OK to document them separately, especially if they have identical opcodes but different behavior.

Though please make sure that the platform you wish to add is actually a modification of Scratch 3.0, and not an entirely different application. This spec is for Scratch 3.0 and offshoots of it, but a platform must share near identical base behaviors with Scratch 3.0 to be added here. For example, [Snap&zwj;*!*](https://snap.berkeley.edu/) was built off of an early version of Scratch, but is now a completely independent first-class block-based language with its own programming paradigm, and is not built with or at all related to Scratch 3.0. Other block-based Scratch-*like* apps deserve [their own spec](https://snap.berkeley.edu/snap/help/SnapManual.pdf) instead.
