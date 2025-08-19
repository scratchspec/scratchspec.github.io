# Concepts {#/ideas/concepts/}

The following Scratch concepts are referenced throughout this specification:

## Asset

A [costume](#costume) or [sound](#sound).

### Costume

A costume is an [image file](https://en.wikipedia.org/wiki/Digital_image) and a type of [asset](#asset) that can be graphically rendered to represent a [target](#target). It can be identified by its [name](/ideas/values/#name) or [number](/ideas/values/#integer). Costumes can either be [bitmap](https://en.wikipedia.org/wiki/Raster_graphics) or [vector](https://en.wikipedia.org/wiki/Vector_graphics).

### Sound

A sound is an [audio file](https://en.wikipedia.org/wiki/Digital_audio) and a type of [asset](#asset) that can be audibly played to the user via [blocks](#block). It can be identified by its [name](/ideas/values/#name).

## Block

> This will have to be better explained and added to the nonexistent section for script execution.

The fundamental component of Scratch as a programming language. In fact, it is similar to a function call in other programming languages. Every block:

* Accepts values or blocks as arguments
* Has a specific pre-defined operation that it performs
* Can be run and reports (i.e. outputs, returns) a single value (or [none at all](/ideas/values/#undefined))

Blocks can be run, meaning that its operation is performed using the arguments it is given and the value resulting from the operation is reported, if any. When put together, blocks create [scripts](#script).

### Standard Blocks

[Blocks](#block) that exist in Scratch 3.0. Generally, standard blocks are supported, meaning they are being actively maintained and probably will not be removed from Scratch in the future. They are the most commonly used blocks in [scripts](#script). All of them are documented in a [dedicated section](/blocks/standard/).

#### Hidden Blocks

[Standard blocks](#standard-blocks) that exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility with projects created in older versions of Scratch or being used internally. Some are functional, some are not. [Scripts](#script) may use them on occasion, but they are found less often than other standard blocks due to their obscurity. In the future they may be removed from Scratch entirely, and their consistent behavior or stability is not guranteed.

## Clone

> TODO: Research... 🤔🤔🤔

An independent, temporary copy created of a [sprite](#sprite) that retains all of the original sprite's [scripts](#script), [variables](#variable), [lists](#list), [costumes](#costume), and [sounds](#sound). It exists on its own entirely separate of the original sprite, so the scripts it runs only affect itself. Unlike sprites, it does not have a [name](/ideas/values/#name), is not saved in [project files](/files/), and can be deleted with blocks.

Since it does not have a name, it cannot be directly referenced via existing blocks (e.g. you cannot tell another sprite to [glide to](/blocks/#glide-to-block) it). They are deleted when the runtime stops, and can also be deleted manually using the [`delete this clone` block](/blocks/#delete-clone-block).

Clones can be created with the [create clone block](/blocks/#create-clone-block) so long as the [maximum number of clones](/ideas/limits/#max-clones) has not been reached. Code can be written specifically for the clones of a sprite via the use of the [when I start as a clone block](/blocks/#when-i-start-as-a-clone-block). The [stage](#stage) is the only [target](#target) which cannot be cloned, whereas both sprites *and clones* can themselves be cloned.

## Edge

> The usefulness of defining "Edge" is up for debate. It may be best left to the section about [fencing](/ideas/logic/#fencing). Feel free to offer insight!

A boundary around the viewing area of the [stage](#stage) that restricts the [costume](#costume) of a [sprite](#sprite) from going off-screen.

## Flag

> The usefulness of defining "Flag" is up for debate. Feel free to offer insight!

The button that is clicked to start a project. It is also known as the green flag. In simple terms, it makes the project `Go`. When clicked, it runs any scripts placed under [when flag clicked blocks](/blocks/#when-flag-clicked-block).

## JavaScript

> Definitions for general terms indirectly related to Scratch may be put into their own section instead, however this is up for debate. Feel free to offer insight!

The programming language that Scratch 3.0 runs in. The logic it uses is largely similar to the logic Scratch uses due to Scratch's dependence on JavaScript for performing operations and manipulating values. In fact, this is where the type of value [undefined](/ideas/values/#undefined) is taken from; it is a type of value in JavaScript for representing what is not defined or known. Thanks to the quirks of Scratch and [no-op hidden reporter blocks](#hidden-blocks), we can obtain this type of value.

## List

A series of [items](/ideas/values/#item) stored together in sequence. Each item is referenced by its numerical index (aka item #), a positive [integer](/ideas/values/#integer) ranging from `1` to the [length](/ideas/values/#length) of the list (inclusive). Lists can be empty, meaning that they have a length of `0` and contain no items. There is also a [maximum number of items](/ideas/limits/#max-items) that a list can hold, aka a limit to its length.

## Mod

A modification (altered version) of the Scratch 3.0 [runtime](#runtime) that is nonstandard and may introduce new blocks, features, or changes not present in standard Scratch. The majority of this spec will be documenting standard Scratch behavior. For information on nonstandard blocks and behaviors in mods, see [Nonstandard Blocks](/blocks/nonstandard/).

## Project

A [stage](#stage) and optionally some [sprites](#sprite) packaged together to do something. They can be loaded into a [runtime](#runtime) and executed. They can also be saved as [project files](/files/).

## Runtime

The environment in which a [project](#project) is run. It keeps track of the project's current state and executes its code. [Projects files can be loaded into and saved from runtimes](/files/).

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

A special [target](#target), with one and only one existing in every project that is always shown behind all [sprites](#sprite). It is sort of like the [global scope](https://en.wikipedia.org/wiki/Scope_(computer_science)#Global_scope) found in some programming languages, but it also exists as its own entity.

Unlike [sprites](#sprite), it cannot be moved, pointed, scaled, hidden, or have variables that only it can set. However, it can do everything else a sprite can.

## Target

An object that runs blocks, shows images, and plays sounds. It has its own [variables](#variable) and [scripts](#script) to perform operations. It can take the form of either a [sprite](#sprite) or the [stage](#stage).

A target exists as its own independent unit. However, targets can interact with each other in some ways, e.g. via [messages](#message).

## User

The individual who is interacting with the [project](#project) and provides input. They may optionally have a [username](/ideas/values/#username) that the project can use to identify them.

## Variable

A [named](/ideas/values/#name) container belonging to a [target](#target) that holds exactly one [value](/ideas/values/#value) and is interacted with via [blocks](#block). The following operations are often performed with variables:

* **Get**: Read the current value of the variable.
* **Set**: Modify the current value of the variable.

Some variables are created on a project-by-project basis for general use by [scripts](#script). For example, a `(score)` variable can be created to keep track of an arbitrary point value. Others are directly built into the [runtime](#runtime) and cannot be deleted. For example, the [`(x position)`](/ideas/values/#x-position) variable always exists in every [sprite](#sprite) to set its rendered horizontal position.

General purpose variables can be interacted with using [variables blocks](/blocks/#variables-blocks). Runtime variables have their own dedicated blocks instead and are usually limited or sandboxed in some way, unlike general purpose variables.
