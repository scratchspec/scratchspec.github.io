# Scratch Specification

A detailed explanation of how Scratch 3.0 works as a programming language.

> This is a work in progress; it's nowhere near complete. Please [contribute](#contributing) if you can!

## Contents

- [Scratch Specification](#scratch-specification)
  - [Contents](#contents)
  - [Introduction](#introduction)
    - [Preliminaries](#preliminaries)
    - [Sources](#sources)
    - [Contributing](#contributing)
  - [Conceptulization](#conceptulization)
    - [Capabilities](#capabilities)
    - [Constants](#constants)
      - [Stage Bounds](#stage-bounds)
        - [Stage Width](#stage-width)
        - [Stage Height](#stage-height)
        - [Left Edge](#left-edge)
        - [Right Edge](#right-edge)
        - [Top Edge](#top-edge)
        - [Bottom Edge](#bottom-edge)
    - [Ideas](#ideas)
      - [Block](#block)
      - [Clone](#clone)
      - [Edge](#edge)
      - [Flag](#flag)
      - [Project](#project)
      - [Script](#script)
      - [Sprite](#sprite)
      - [Stage](#stage)
      - [Target](#target)
      - [User](#user)
      - [Variable](#variable)
      - [List](#list)
    - [Values](#values)
      - [Value](#value)
      - [Angle](#angle)
      - [Boolean](#boolean)
        - [True](#true)
        - [False](#false)
      - [Direction](#direction)
      - [Rotation Style](#rotation-style)
        - [Rotation Style: All Around](#rotation-style-all-around)
        - [Rotation Style: Left-Right](#rotation-style-left-right)
        - [Rotation Style: Don't Rotate](#rotation-style-dont-rotate)
      - [Integer](#integer)
      - [Item](#item)
      - [Length](#length)
      - [Letter](#letter)
      - [Name](#name)
      - [Number](#number)
        - [Infinity](#infinity)
        - [-Infinity](#-infinity)
        - [NaN](#nan)
      - [String](#string)
        - [Empty String](#empty-string)
      - [Undefined](#undefined)
      - [Username](#username)
    - [Procedures](#procedures)
      - [Casting](#casting)
        - [To String](#to-string)
        - [To Number](#to-number)
        - [To Boolean](#to-boolean)
          - [Falsy](#falsy)
          - [Truthy](#truthy)
        - [Fencing](#fencing)
  - [Palette](#palette)
    - [Motion blocks](#motion-blocks)
      - [Move steps block](#move-steps-block)
    - [Looks blocks](#looks-blocks)
    - [Sound blocks](#sound-blocks)
    - [Event blocks](#event-blocks)
    - [Control blocks](#control-blocks)
    - [Sensing blocks](#sensing-blocks)
      - [Username block](#username-block)
    - [Operator blocks](#operator-blocks)
    - [Variable blocks](#variable-blocks)
    - [List blocks](#list-blocks)
    - [Custom blocks](#custom-blocks)
    - [Pen blocks](#pen-blocks)
    - [Obsolete blocks](#obsolete-blocks)

## Introduction

This document is a serious attempt to create a [programming language specification](https://en.wikipedia.org/wiki/Programming_language_specification) of [Scratch 3.0](https://en.scratch-wiki.info/wiki/scratch_3.0). It will detail the exact behavior of Scratch so that it can be accurately reproducible from this document alone, preserving its behavior and aiding in [ports](https://en.wikipedia.org/wiki/Porting) of it to other platforms. This project is entirely "for fun" and is not affilated with the [Scratch Foundation](https://www.scratchfoundation.org/) or related parties in any way whatsoever, though if you can please [donate](https://www.scratchfoundation.org/donate) to them so that they may continue to support and improve [Scratch](https://scratch.mit.edu/) for all.

### Preliminaries

Before reading this specification:

- **Be sure to have an understanding of computer science.** A good vocabulary, knowledge, and understanding of computational concepts is useful.
- **Being experienced with working in Scratch is  immensely helpful.** Although this specification will try to explain it in full, knowing the basic concepts and quirks of Scratch just by experience will let you skim through this document easily, as not all of it is necessary to read; just to reference for accuracy.
- Scratch 3.0 is built upon the modern web; although not entirely necessary, **a basic knowledge of [JavaScript](https://en.wikipedia.org/wiki/JavaScript) can come in handy** when it comes to understanding the inner workings, logic, and rules of Scratch, as it is what Scratch runs on. Scratch does a lot of things the same way JavaScript does.
- **Be familiar with the [scratchblocks](https://scratchblocks.github.io/) [syntax](https://en.scratch-wiki.info/wiki/Block_Plugin/Syntax).** This text-based format is used to represent Scratch [blocks](#block). An option to render the scratchblocks while viewing in-browser is being considered; however, the shapes and colors of the blocks are not necessarily being documented, but rather their functionality.

### Sources

The information about Scratch in this specification is, of course, derived from Scratch sources, e.g. the Scratch [VM](https://github.com/scratchfoundation/scratch-vm), [Wiki](https://scratch-wiki.info/), [Website](https://scratch.mit.edu/), [Editor](https://scratch.mit.edu/projects/editor), and [Discussion Forums](https://scratch.mit.edu/discuss/). [Wikipedia](https://wikipedia.org/wiki/Wikipedia:About) and [MDN Web Docs](https://developer.mozilla.org/) are linked to as well for additional information regarding general concepts and internal behaviors.

### Contributing

Please [contribute on GitHub](https://github.com/OceanIsEndless/scratch-spec/pulls) (must be **13** or older, [need a GitHub account](https://github.com/signup)) or [comment on my Scratch profile](https://scratch.mit.edu/users/Endless-Ocean/#comments) (just [need a Scratch account](https://scratch.mit.edu/join)) if you can:

- **Summarize** key **points** of sections (things can get *ridiculously wordy* at times)
- **Provide insight** into the workings of Scratch (know info that should be here)
- **Fact check** info to verify accuracy (add links to projects, code, wiki, forums)
- Make sure everything looks good (**correct formatting, spelling, grammar**)
- **Give** some **ideas**, **motivation**, or **feedback** for improving this specification

## Conceptulization

This section explains the various concepts and rules of Scratch.

### Capabilities

At its core, Scratch should be able to:

- Run scripts dynamically; multithreading, looping, timing, etc.
- Show images on a screen; position, size, turn + draw graphics.
- Play sounds on speakers; several audio files can play at once.

In an ideal situation, it should also be able to:

- Apply effects to images and sounds
- Detect loudness via microphone
- Interact with linked devices
- Draw graphics dynamically
- Make requests to the web
- Know the current time
- Receive user input

A fully functional implementation of Scratch should be capable of all these things, and if not handle it gracefully, this document detailing how to deal with everything.

### Constants

These constant values will show up a lot throughout this specification.

#### Stage Bounds

##### Stage Width

The horizontal length of the stage. This is an arbitrary positive integer.

**Standard Scratch**: `480`

**For widescreen**: `640`

##### Stage Height

The vertical length of the stage. This is an arbitrary positive integer.

**Standard Scratch**: `360`

##### Left Edge

The horizontal position of the left edge. This is derived from the [stage width](#stage-width).

**Formula**: `stage width / -2`

**Standard Scratch**: `-240`

##### Right Edge

The horizontal position of the right edge. This is derived from the [stage width](#stage-width).

**Formula**: `stage width / 2`

**Standard Scratch**: `240`

##### Top Edge

The vertical position of the top edge. This is derived from the [stage height](#stage-height).

**Formula**: `stage height / 2`

**Standard Scratch**: `180`

##### Bottom Edge

The vertical position of the bottom edge. This is derived from the [stage height](#stage-height).

**Formula**: `stage height / -2`

**Standard Scratch**: `-180`

### Ideas

The following ideas are referenced throughout this specification:

#### Block

The fundamental component of Scratch as a programming language. In fact, they are similar to function calls in other programming languages. Every block:

- Accepts values or blocks as arguments
- Has a specific pre-defined operation that it performs
- Can be run and reports (i.e. outputs, returns) a single value (or [none at all](#undefined))

Blocks can be run, meaning that its operation is performed using the arguments it is given and the value resulting from the operation is reported, if any. When put together, blocks create [scripts](#script).

#### Clone

A copy created of a [sprite](#sprite) that has all of the original sprite's code, images, and sounds, but operates independently of it. Unlike sprites, clones cannot be directly referenced via existing blocks (e.g. you cannot [glide to](#glide-to-block) it directly without knowing its position ahead of time, as it cannot be selected in the sprite dropdown menu), and exist as their own thing. They are deleted every time the [flag](#flag) is clicked, and can also be deleted manually using the [`delete this clone` block](#delete-clone-block).

Clones can be created with the [create clone block](#create-clone-block). Code can be written specifically and only for the clones of a sprite via the use of the [when I start as a clone block](#when-i-start-as-a-clone-block). The [stage](#stage) is the only sort of [target](#target) which cannot be cloned, whereas both sprites *and clones* can themselves be cloned.

#### Edge

Refers to the bounds that restrict the graphics of a [project](#project) from exceeding its designated region on the user's screen.

#### Flag

The button that is intended to run scripts that start a project. It is also known as the green flag in official Scratch. It is meant to make the project `Go`, as it is labelled in its title text on the Scratch website. When clicked, it runs any scripts under [when flag clicked blocks](#when-flag-clicked-block).

#### Project

A stage and optionally some sprites packaged together to do something.

#### Script

A set of [blocks](#block) put together to create code. Here is an example of a script:

```sb
when flag clicked
ask [What's your name?] and wait
say (join [Hello, ] (join (answer) [!]))
stop [this script v]
```

Blocks are put together in the following ways:

- TODO :D

#### Sprite

A kind of [target](#target) that can exist on its own, have [variables](#variable) only it can set, and be moved, pointed, scaled, and hidden, all of which are things that the [stage](#stage) cannot do.

#### Stage

A special [target](#target), with one and only one existing in every project, that is shown behind all [sprites](#sprite). It is sort of like the [global scope](https://en.wikipedia.org/wiki/Scope_(computer_science)#Global_scope) found in some programming languages, but it also exists as its own entity.

Unlike [sprites](#sprite), it cannot be moved, pointed, scaled, hidden, or have variables that only it can set. However, it can do everything else a sprite can.

#### Target

An object that runs blocks, shows images, and plays sounds. It has its own [variables](#variable) (aka properties or fields) that are used by contained [scripts](#script) to perform operations.

Every target exists as its own unit independent of other targets, but they can be interconnected in some ways. There are two kinds of targets - [sprites](#sprite) and [stages](#stage).

#### User

The individual who is interacting with the [project](#project) and provides input. They may optionally have a [username](#username) that the project can use to identify them.

#### Variable

A container with a [name](#name) that can hold any one [value](#value). Every variable is attached to a [target](#target). If it is attached to a [sprite](#sprite), it can only be set by that sprite. If it is attached to the [stage](#stage), it can be set by any sprite, including the stage.

There are two kinds of variables. Some variables are defined and named by the creator of a [project](#project) on a target-by-target basis and interacted with by [variable blocks](#variable-blocks), while all targets have variables that exist by default and can only be interacted with via their dedicated blocks (not variable blocks). Some examples of user-defined variables would be `(score)` or `(index)` (completely custom), while examples of built-in variables would be `(x position)`, `(direction)`, `(size)`, `(volume)`, and `(tempo)` (exist in every target).

#### List

A series of [items](#item) stored together in sequence. Each item is referenced by its numerical index (aka item #), a positive [integer](#integer) ranging from `1` to the [length](#length) of the list (inclusive).

### Values

In Scratch, the following types of values exist:

- [String](#string)
- [Number](#number)
  - [`-Infinity`](#-infinity)
  - [`Infinity`](#infinity)
  - [`NaN`](#nan)
- [Boolean](#boolean)
  - [`true`](#true)
  - [`false`](#false)
- [`undefined`](#undefined)

There are lots of terms used to refer to these types of values and particular subsets of them. They are referenced throughout this specification and explained below:

#### Value

A general value. This can be a [string](#string), [number](#number), [boolean](#boolean), or in rare cases [undefined](#undefined). [Variables](#variable) can hold individual values, and a [list](#list) can store many of them as [items](#item).

#### Angle

A [number](#number) intended to be in [degrees](https://en.wikipedia.org/wiki/Degree_(angle)). `[sin v] of ()`, `[cos v] of ()`, and `[tan v] of ()` expect angles as input.

#### Boolean

A special value that is used to represent the result of a logical operation. It is always either [`true`](#true) or [`false`](#false).

##### True

A kind of [boolean](#boolean) that is used to represent a yes or an affirmative answer as a result of a logical operation. When casted to a [string](#string), it is written as `true`. When casted to a [number](#number), it is casted to `1`. It is considered [truthy](#truthy), as it is itself the definition of truthy.

##### False

A kind of [boolean](#boolean) that is used to represent a no or a negative answer as a result of a logical operation. When casted to a [string](#string), it is written as `false`. When casted to a [number](#number), it is casted to `0`. It is considered [falsy](#falsy), as it is itself the definition of falsy.

#### Direction

An [angle](#angle) that determines the way a sprite is turned on the screen. It is always wrapped to remain in the range -179 and 181 (exclusive). An angle $a$ can be converted to a direction $d$ like so:

$d=\operatorname{mod}\left(a+179,360\right)-179$

Or in scratchblocks:

```sb
set [direction v] to ((((angle) + (179)) mod (360)) - (179))
```

The way that a sprite's direction impacts how it is rendered is determined by that sprite's [rotation style](#rotation-style).

#### Rotation Style

A [string](#string) that determines how a sprite's [direction](#direction) impacts the way it is rotated when rendered. It can be one of the following strings: `all around`, `left-right`, or `don't rotate`.

- `all around`: The sprite faces in its direction **clockwise**. At `0`, it faces **up**; at `90`, it faces **right**; at `180`, it faces **down**; and at `-90`, it faces **left**.
- `left-right`: If the sprite's direction is less than `0`, it faces **left** (`-90`). Otherwise, it faces **right** (`90`).
- `don't rotate`: The sprite *always* faces **right** (`90`).

The following table describes a sprite's rendered direction when using different rotation styles.

| Direction | All Around | Left-Right | Don't Rotate |
|----------:|:----------:|:----------:|:------------:|
| **0** | 0 (up) | 90 (right) | 90 (right) |
| **45** | 45 (up-right) | 90 (right) | 90 (right) |
| **90** | 90 (right) | 90 (right) |  90 (right)  |
| **135** | 135 (down-right) | 90 (right) | 90 (right) |
| **180** | 180 (down) | 90 (right) |  90 (right)  |
| **-135** | -135 (down-left) | -90 (left) | 90 (right) |
| **-90** | -90 (left) | -90 (left) |  90 (right)  |
| **-45** | -45 (up-left) | -90 (left) | 90 (right) |

##### Rotation Style: All Around

![A demonstration of the "all around" rotation style](./img/all-around.gif)

##### Rotation Style: Left-Right

![A demonstration of the "left-right" rotation style](./img/left-right.gif)

##### Rotation Style: Don't Rotate

![A demonstration of the "don't rotate" rotation style](./img/don't-rotate.gif)

#### Integer

A [number](#number) that is not a fraction, aka a whole number (e.g. `42`, `-37`). Many blocks produce integers (e.g. `round ()`, `costume [number v]`, `loudness`, `item # of () in [list v]`) and expect integers (e.g. `item () of [list v]`), just to name a few.

#### Item

A [value](#value) in a list.

#### Length

A positive [integer](#integer) representing how many [letters](#letter) or [items](#item) there are in a [string](#string) or [list](#list), respectively.

#### Letter

An individual [UTF-16](https://en.wikipedia.org/wiki/UTF-16) [code unit](https://developer.mozilla.org/en-US/docs/Glossary/Code_unit). Several joined together create a [string](#string). In Scratch, letters cannot be directly interacted with per se; getting a letter from a string just reports another string containing only that letter.

#### Name

A [string](#string) with the intention of identifying something. This can be applied to many things, but is usually in regards to a variable, list, costume, sound, [sprite](#sprite), or [user](#username).

#### Number

Any numerical value. Most numbers are [real](https://en.wikipedia.org/wiki/Real_number) aka ordinary and can be positive (`+`), negative (`-`), whole (`#`), or fractional (`#.#`). In JavaScript (what Scratch is based on), these numbers are internally stored as [double-precision 64-bit binary format IEEE 754](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) values. Thus, Scratch follows largely the same rules as JavaScript does when dealing with numbers, though there are exceptions. In addition to normal numbers, special kinds of numbers exist too, which are for situations that cannot be fully expressed with ordinary numbers:

##### Infinity

A number always greater than any other number. When converted to a string, it is written as `Infinity`. It is created when the result of a mathematical operation is too large to be represented as an ordinary number.

```sb
[Infinity] + (1) // Infinity
[10 ^ v] of (1000) // Infinity
[log v] of (0) // -Infinity
(1) / [Infinity] // 0
(1) / (0) // Infinity
```

##### -Infinity

A number that is always lower than any other number. When converted to a string, it is written as `-Infinity`. It is created in the same manner as [Infinity](#infinity). Whether `-Infinity` or `Infinity` is produced by an operation is determined in the same way that an ordinary number would be negative or not.

For example, `(1) / (n)` produces a positive number, while `(-1) / (n)` produces a negative number. In the same manner, `(1) / (0)` produces positive infinity (`Infinity`, since the output cannot be expressed as an ordinary number), while `(-1) / (0)` produces negative infinity (`-Infinity`, since the output cannot be expressed as an ordinary number).

##### NaN

A number that is not a number. When casted to a string, it is written as `NaN`. It is interpreted as a `0` when passed as input to other mathematical operations, unlike in JavaScript where it causes most operations to report `NaN`. It can produced by doing unknown or unrepresentable things with numbers, such as multiplying `Infinity` and zero, adding `Infinity` to `-Infinity`, or getting the square root of a negative number.

#### String

A series (i.e. string) of [letters](#letter), also known as text. All strings are considered [truthy](#truthy) *except* the [empty](#empty-string).

##### Empty String

A string containing no letters. It has a [length](#length) of `0` and is the only string considered [falsy](#falsy). Also known as a "null string."

#### Undefined

A special value that represents nothing. When converted to a [string](#string), it is written as `undefined`. This type of value is uncommon but can be produced by [obsolete blocks](#obsolete-blocks). In most cases, however, Scratch uses `0` or an empty string to represent nothing.

#### Username

A [name](#name) used to reference a [user](#user). See [Username]((https://en.scratch-wiki.info/wiki/Username)) on the Scratch Wiki. In standard Scratch, usernames are:

- Always 3 to 20 letters long (inclusive)
- Can only contain the following:
  - Uppercase Latin letters (A-Z)
  - Lowercase Latin letters (a-z)
  - Numerical digits (0-9)
  - Underscores (_)
  - Hyphens (-)

Also, official ("real") usernames are registered with the [Scratch website](https://scratch.mit.edu). They are unique (different from each other) and are case-insensitive, meaning that if a username "Endless-Ocean" is registered, there **cannot** *also* be an "endless-ocean" or "EndlEss-ocEan", though there **can** *also* be an "endless_ocean", "Endless--Ocean", and "Endless-Ocean1".

Official usernames can only be changed under extraordinarily rare circumstances (e.g. the username contained sensitive information about the user that the [Scratch team](https://en.scratch-wiki.info/wiki/Scratch_Team) decided to change for them), meaning that once it is created, it usually cannot be altered later.

Scripts can detect the current user's username via the [(`username`) block](#username-block). If the user is signed in, the block reports their username. If the user is signed out, the block reports an [empty string](#empty-string). In the official Scratch editor, the username reported by the username block should remain constant for the entire run of the project.

> The only exception to this rule in official contexts is when the user:
>
> - Uses Scratch through the official website
>   - The user cannot sign into their account from the offline editor
> - Loads a shared project while signed out of their account
>   - This does not work with an unshared project because the user cannot view it while signed out
> - Signs in to their account from the same window while the project is open
>   - A menu exists for the user to sign in to their account while signed out without reloading the page
>
> Then the reported username is changed from the empty string to the username that the user signed in with, without reloading the project. After this happens, the user cannot change their username again without reloading the project.

Due to the aforementioned limitations of real usernames, project *can* technically check if the user's username is "real" or not by:

- Crossreferencing it with a list of known usernames to see if it is registered with the Scratch website
- Remember the usernames that the username block has reported (e.g. via cloud variables) and see if it encounters the same username with different casing
- Check to see if the username is changed while the project is running, (impossible without modification unless the user is signing in after being signed out)

A project could potentially utilize any of these ways to detect if it is actually being run in official Scratch environment or an unofficial implementation of it.

Thus, for a truly accurate recreation of Scratch, the `username` block should **only report registered usernames** with the Scratch website, and a project which remembers usernames (e.g. via cloud variables) should **never encounter the same username with different casing that it has seen before**, except in extraordinarily rare cases where the casing of a user's username was officially changed by the Scratch team. The username should also not be changed while the project is running; the moment the project is started, whatever username the username block reports will be the username for the entire duration of time for which it runs.

In most cases, however, projects will probably not notice anything wrong with the username (the a few niche ones *could* break), so long as it only contains valid characters (A-Z, a-z, 0-9, _, -) and is between 3-20 letters in length, as previously stated. In general, usernames are really just any arbitrary [string](#string) that identifies a user.

### Procedures

The following procedures are often performed by Scratch and are mentioned throughout this document:

#### Casting

Most blocks automatically convert [values](#value) between types through the use of very particular logic, also known as [casting](https://en.scratch-wiki.info/wiki/Casting). The logic Scratch uses is specified below.

##### To String

Scratch uses the following logic to convert any given [value](#value) into a [string](#string):

- If the value is a [string](#string), return the value since it is already a string.
- If the value is a [number](#number):
  - Follow the [logic JavaScript does](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) to cast a number to a string. (TODO: specify this better)
  - If the value is [NaN](#nan), return the string `NaN`.
  - If the value is [Infinity](#infinity), return the string `Infinity`.
  - If the value is [-Infinity](#infinity), return the string `-Infinity`.
  - If the value is [true](#boolean), return the string `true`.
  - If the value is [false](#boolean), return the string `false`.
- If the value is [undefined](#undefined), return the string `undefined`.

##### To Number

Scratch uses the following logic to convert any given [value](#value) into a [number](#number):

- If the value is a [number](#number):
  - Return the value, as it is already a number.
- If the value is a [boolean](#boolean):
  - If the value is [true](#boolean), return the number `1`.
  - If the value is [false](#boolean), return the number `0`.
- If the value is a [string](#string):
  - If the value is not a number when converted according to [these rules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion):
    - Return the number `0`
  - Otherwise:
    - Return the value as a number (TODO: specify better b/c JavaScript logic)

##### To Boolean

###### Falsy

A value is **falsy**, or casted to `false`, if:

- The value is an **empty [string](#string)** (contains no letters, has a [length](#length) of `0`)
- The value is the numbers `0`, `-0`, or [`NaN`](#nan).

###### Truthy

Any value that is not considered **[falsy](#falsy)** is **truthy** and casted to `true`.

##### Fencing

In Scratch, whenever the position or size of a sprite changes, it then fences (aka restricts) the position and size of the sprite to fit inside of a fence (aka boundary) that is intended to keep it  within the viewing area of the stage. This is primarily so that sprites do not randomly disappear due to erroneous code, but it is also an intentional feature of Scratch that does get utilized by some projects.

Scratch uses the following procedure to determine what the position and size of a sprite should be limited to depending on the width and height of its current costume:

- TODO :D

This procedure is only applied after the position or size of the sprite changes. Because of this behavior, if one switches the costume to a particularly large or small costume, moves or resizes it, and then switches the costume back without changing the position and size afterward, then the sprite will remain at the same position and size that it had with the large or small costume, allowing one to circumvent fencing if necessary.

## Palette

This section documents each and every block in Scratch, and its precise functionality.

### Motion blocks

These blocks relate to motion, or moving sprites. They manipulate the x position, y position, and direction of a sprite in order to position it in the desired manner. Notably, they do not do anything when used from the [stage](#stage).

#### Move steps block

**Operation:**

Moves the sprite forward the given number of pixels in the direction that it is facing. Negative numbers move the sprite backwards.

**Block:**

```sb
move (STEPS) steps
```

**Arguments**:

`STEPS`: [number](#number)

**Procedure:**

The x position of the sprite is changed by the **sine of the sprite's direction** multiplied by the number of steps to move, whereas the y position of the sprite is changed by the **cosine of the sprite's direction** multiplied by the number of steps to move.

This can be expressed as:

$x' = x + \sin(d) * S$

$y' = y + \cos(d) * S$

Where $S$ is the `STEPS` to move, $d$ is the direction of the sprite, and $x$ and $y$ are the x and y positions of the sprite, respectively.

In scratchblocks, this operation can also be replicated as:

```sb
go to x: ((x position) + (([sin v] of (direction)) * (STEPS))) y: ((y position) + (([cos v] of (direction)) * (STEPS)))
```

After the sprite is moved, the sprite is [fenced](#fencing).

### Looks blocks

These blocks relate to the looks, or appearance of targets. They manipulate the size, costume, layer, visiblility, and graphic effects of a sprite in order to make it appear a certain way.

### Sound blocks

These blocks relate to sound, or the playback of audio. They play the sound files that a sprite has access to and manipulate the volume and sound effects of a sprite in order to make it stream sounds however is needed.

### Event blocks

These blocks relate to the start of a script. They cause scripts to run in order for the project to do things.

### Control blocks

These blocks relate to the execution of other blocks. They cause scripts to run in more complex ways in order for the project to perform more logical operations.

### Sensing blocks

These blocks relate to sensing, or detecting various values. They can read information that couldn't be determined otherwise in order to make the project more aware of itself.

#### Username block

**Operation:**

Reports the username of the user that has loaded the project in the context of the Scratch website.

**Block:**

```sb
(username)
```

**Arguments**:

None

**Procedure**:

- If the user is signed into their Scratch account:
  - The username is known, as the user is registered with Scratch and signed into their account.
  - **Report the user's [username](#username).**
- If the user is not signed into their account:
  - The username is not known, as the user is using Scratch without being signed into an acccount.
  - **Report an [empty string](#empty-string).**

Technically, this block can report any username registered with the Scratch website or the empty string without breaking anything. Although it is meant to report the username of the user who has loaded the project, there is no way for a project to confirm that the reported username is actually theirs.

### Operator blocks

### Variable blocks

### List blocks

### Custom blocks

### Pen blocks

### Obsolete blocks

TODO: add info on [obsolete blocks](https://en.scratch-wiki.info/wiki/Obsolete_Blocks)
