# Ideas

The following ideas are referenced throughout this specification:

## Asset

A [costume](#costume) or [sound](#sound).

### Costume

A costume is an [image file](https://en.wikipedia.org/wiki/Digital_image) and a type of [asset](#asset) that can be graphically rendered to represent a [target](#target). It can be identified by its [name](#name) or [number](#integer). Costumes can either be [bitmap](https://en.wikipedia.org/wiki/Raster_graphics) or [vector](https://en.wikipedia.org/wiki/Vector_graphics).

### Sound

A sound is an [audio file](https://en.wikipedia.org/wiki/Digital_audio) and a type of [asset](#asset) that can be audibly played to the user via [blocks](#block). It can be identified by its [name](#name).

## Block

The fundamental component of Scratch as a programming language. In fact, they are similar to function calls in other programming languages. Every block:

* Accepts values or blocks as arguments
* Has a specific pre-defined operation that it performs
* Can be run and reports (i.e. outputs, returns) a single value (or [none at all](#undefined))

Blocks can be run, meaning that its operation is performed using the arguments it is given and the value resulting from the operation is reported, if any. When put together, blocks create [scripts](#script).

### Standard Blocks

[Blocks](#block) that are officially supported in Scratch 3.0. They are the most commonly used blocks in [scripts](#script) by far.

### Hidden Blocks

[Blocks](#block) that exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility with projects created in older versions of Scratch or being used internally. Some are functional, some are not. [Scripts](#script) may use them on occasion, but they are found less often than [standard blocks](#standard-blocks) due to their obscurity.

## Clone

A copy created of a [sprite](#sprite) that has all of the original sprite's code, images, and sounds, but operates independently of it. Unlike sprites, clones cannot be directly referenced via existing blocks (e.g. you cannot [glide to](#glide-to-block) it directly without knowing its position ahead of time, as it cannot be selected in the sprite dropdown menu), and exist as their own thing. They are deleted every time the [flag](#flag) is clicked, and can also be deleted manually using the [`delete this clone` block](#delete-clone-block).

Clones can be created with the [create clone block](#create-clone-block) so long as the [maximum number of clones](#max-clones) has not been reached. Code can be written specifically for the clones of a sprite via the use of the [when I start as a clone block](#when-i-start-as-a-clone-block). The [stage](#stage) is the [target](#target) which cannot be cloned, whereas both sprites *and clones* can themselves be cloned.

## Edge

Refers to the bounds that restrict the graphics of a [project](#project) from exceeding its designated region on the user's screen.

## Flag

> The usefulness of defining "Flag" is up for debate. Feel free to offer insight!

The button that is intended to run scripts that start a project. It is also known as the green flag in official Scratch. It is meant to make the project `Go`, as it is labelled in its title text on the Scratch website. When clicked, it runs any scripts under [when flag clicked blocks](#when-flag-clicked-block).

## JavaScript

> Definitions for general terms indirectly related to Scratch may be put into their own section instead, however this is up for debate. Feel free to offer insight!

The programming language that Scratch 3.0 runs in. The logic it uses is largely similar to the logic Scratch uses due to Scratch's dependence on JavaScript for performing operations and manipulating values. In fact, this is where the type of value [undefined](#undefined) is taken from; it is a type of value in JavaScript for representing what is not defined or known. Thanks to the quirks of Scratch and [no-op hidden reporter blocks](#hidden-blocks), we can obtain this type of value.

## List

A series of [items](#item) stored together in sequence. Each item is referenced by its numerical index (aka item #), a positive [integer](#integer) ranging from `1` to the [length](#length) of the list (inclusive). Lists can be empty, meaning that they have a length of `0` and contain no items. There is also a [maximum number of items](#max-items) that a list can hold, aka a limit to its length.

## Mod

A modification (altered version) of the Scratch 3.0 [runtime](#runtime) that is nonstandard and may introduce new blocks, features, or changes not present in standard Scratch. The majority of this spec will be documenting standard Scratch behavior. For information on nonstandard blocks and behaviors in mods, see the [relevant appendix](#nonstandard-blocks).

## Opcode

A [name](#name) unique to every [block](#block) in the Scratch programming language. It tells blocks what to do. For example, if the opcode of a block is [`motion_movesteps`](#motion_movesteps), it attempts to move steps.

## Project

A stage and optionally some sprites packaged together to do something. They can be loaded into a [runtime](#runtime) and executed. They can also be saved as [project files](#file-format).

## Runtime

The environment in which a [project](#project) is run. It keeps track of the project's current state and executes its code. [Projects files can be loaded into and saved from runtimes](#file-format).

## Script

A set of [blocks](#block) put together to create code. Here is an example of a script:

```sb
when flag clicked
ask [What's your name?] and wait
say (join [Hello, ] (join (answer) [!]))
stop [this script v]
```

Blocks are put together in the following ways:

* TODO :D

## Sprite

A kind of [target](#target) that can exist on its own, have [variables](#variable) only it can set, and be moved, pointed, scaled, and hidden, all of which are things that the [stage](#stage) cannot do.

## Stage

A special [target](#target), with one and only one existing in every project, that is shown behind all [sprites](#sprite). It is sort of like the [global scope](https://en.wikipedia.org/wiki/Scope_(computer_science)#Global_scope) found in some programming languages, but it also exists as its own entity.

Unlike [sprites](#sprite), it cannot be moved, pointed, scaled, hidden, or have variables that only it can set. However, it can do everything else a sprite can.

## Target

An object that runs blocks, shows images, and plays sounds. It has its own [variables](#variable) (aka properties or fields) that are used by contained [scripts](#script) to perform operations.

Every target exists as its own unit independent of other targets, but they can be interconnected in some ways. There are two kinds of targets * [sprites](#sprite) and [stages](#stage).

## User

The individual who is interacting with the [project](#project) and provides input. They may optionally have a [username](#username) that the project can use to identify them.

## Variable

A container with a [name](#name) that can hold any one [value](#value). Every variable is attached to a [target](#target). If it is attached to a [sprite](#sprite), it can only be set by that sprite. If it is attached to the [stage](#stage), it can be set by any sprite, including the stage.

There are two kinds of variables. Some variables are defined and named by the creator of a [project](#project) on a target-by-target basis and interacted with by [variables blocks](#variables-blocks), while all targets have variables that exist by default and can only be interacted with via their dedicated blocks (not variable blocks). Some examples of user-defined variables would be `(score)` or `(index)` (completely custom), while examples of built-in variables would be `(x position)`, `(direction)`, `(size)`, `(volume)`, and `(tempo)` (exist in every target).
