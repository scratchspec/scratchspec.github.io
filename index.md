# Scratch Specification

A detailed explanation of how Scratch 3.0 works as a programming language.

## Contents

* [Scratch Specification](#scratch-specification)
  * [Contents](#contents)
  * [Introduction](/intro)
    * [Preliminaries](/intro#preliminaries)
    * [Sources](/intro#sources)
    * [Contributing](/intro#contributing)
  * [FAQ](/faq)
    * [Where to start?](/faq#where-to-start)
    * [What's the point?](/faq#whats-the-point)
    * [Why?](/faq#why)
  * [TODO](todo)
    * [TODO: Blocks](/todo#todo-blocks)
  * Concepts
    * [Capabilities](/concepts/capabilities)
    * [Constants](/constants)
      * [Stage Bounds](/constants#stage-bounds)
        * [Stage Width](/constants#stage-width)
        * [Stage Height](/constants#stage-height)
        * [Left Edge](/constants#left-edge)
        * [Right Edge](/constants#right-edge)
        * [Top Edge](/constants#top-edge)
        * [Bottom Edge](/constants#bottom-edge)
      * [Limits](/constants#limits)
        * [Max Items](/constants#max-items)
        * [Max Clones](/constants#max-clones)
    * [Ideas](/ideas)
      * [Asset](/ideas#asset)
        * [Costume](/ideas#costume)
        * [Sound](/ideas#sound)
      * [Block](/ideas#block)
        * [Standard Blocks](/ideas#standard-blocks)
        * [Hidden Blocks](/ideas#hidden-blocks)
      * [Clone](/ideas#clone)
      * [Edge](/ideas#edge)
      * [Flag](/ideas#flag)
      * [JavaScript](/ideas#javascript)
      * [List](/ideas#list)
      * [Mod](/ideas#mod)
      * [Opcode](/ideas#opcode)
      * [Project](/ideas#project)
      * [Runtime](/ideas#runtime)
      * [Script](/ideas#script)
      * [Sprite](/ideas#sprite)
      * [Stage](/ideas#stage)
      * [Target](/ideas#target)
      * [User](/ideas#user)
      * [Variable](/ideas#variable)
    * [Values](#values)
      * [Value](#value)
      * [Angle](#angle)
      * [Answer](#answer)
      * [Boolean](#boolean)
        * [True](#true)
        * [False](#false)
      * [Direction](#direction)
      * [Integer](#integer)
      * [Item](#item)
      * [Key](#key)
      * [Length](#length)
      * [Letter](#letter)
      * [Name](#name)
      * [Number](#number)
        * [Infinity](#infinity)
        * [-Infinity](#-infinity)
        * [NaN](#nan)
      * [Rotation Style](#rotation-style)
        * [Rotation Style: All Around](#rotation-style-all-around)
        * [Rotation Style: Left-Right](#rotation-style-left-right)
        * [Rotation Style: Don't Rotate](#rotation-style-dont-rotate)
      * [String](#string)
        * [Empty String](#empty-string)
      * [Undefined](#undefined)
      * [Username](#username)
      * [X Position](#x-position)
      * [Y Position](#y-position)
      * [Other Values](#other-values)
    * [Procedures](#procedures)
      * [Casting](#casting)
        * [To String](#to-string)
        * [To Number](#to-number)
        * [To Boolean](#to-boolean)
          * [Falsy](#falsy)
          * [Truthy](#truthy)
        * [To Direction](#to-direction)
      * [Fencing](#fencing)
        * [Fencing Position](#fencing-position)
        * [Fencing Size](#fencing-size)
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

### Values

In Scratch, the following types of values exist:

* [String](#string)
* [Number](#number)
* * [`NaN`](#nan)
  * [`Infinity`](#infinity)
  * [`-Infinity`](#-infinity)
* [Boolean](#boolean)
  * [`true`](#true)
  * [`false`](#false)
* [`undefined`](#undefined)

There are lots of terms used to refer to these types of values and particular subsets of them. They are referenced throughout this specification and explained below:

#### Value

A general value. This can be a [string](#string), [number](#number), [boolean](#boolean), or in rare cases [undefined](#undefined). [Variables](#variable) can hold individual values, and a [list](#list) can store many of them as [items](#item).

#### Angle

A [number](#number) intended to be in [degrees](https://en.wikipedia.org/wiki/Degree_(angle)). `[sin v] of ()`, `[cos v] of ()`, and `[tan v] of ()` expect angles as input.

#### Answer

A [string](#string) provided to the [project](#project) by the [user](#user) as input via the [ask and wait block](#ask-and-wait-block).

#### Boolean

A special type of [value](#value) that is used to represent the result of a logical operation. It is always either [`true`](#true) or [`false`](#false).

##### True

A kind of [boolean](#boolean) that is used to represent a yes or an affirmative answer as a result of a logical operation. When casted to a [string](#string), it is written as `true`. When casted to a [number](#number), it is casted to `1`. It is considered [truthy](#truthy), as it is itself the definition of truthy.

##### False

A kind of [boolean](#boolean) that is used to represent a no or a negative answer as a result of a logical operation. When casted to a [string](#string), it is written as `false`. When casted to a [number](#number), it is casted to `0`. It is considered [falsy](#falsy), as it is itself the definition of falsy.

#### Direction

An [angle](#angle) that determines the way a sprite is turned on the screen. It is always wrapped to remain in the range -179 and 181 (exclusive). An angle $a$ can be converted to a direction $d$ like so:

$d=\operatorname{mod}\left(a+179,360\right)-179$

Or in scratchblocks:

```sb
set [direction v] to ((((angle) + (179)) mod (360)) * (179))
```

The way that a sprite's direction impacts how it is rendered is determined by that sprite's [rotation style](#rotation-style).

#### Integer

A [number](#number) that is not a fraction, aka a whole number (e.g. `42`, `-37`). Many [blocks](#block) report integers (e.g. `round ()`, `costume [number v]`, `loudness`, `item # of () in [list v]`) and expect integers (e.g. `item () of [list v]`), just to name a few.

#### Item

A [value](#value) in a [list](#list).

#### Key

A [name](#name) used by Scratch for referring to a key on the [user](#user)'s keyboard. Specific keys are referred to by name. To refer to any arbitrary key (as in, "press any key to continue"), the name `any` can be used.

It is good to note that Scratch does not standardly support special keys other than the ones listed below, making it more versatile across platforms (i.e. it won't conflict with keyboard shortcuts used by other applications running on the user's computer).

| Keyboard Key         | Key Name (string)            |
|:--------------------:|:-----------------------------:|
| ⌨️ (any key)         | `any`                           |
| <kbd>space bar</kbd> | `space`                          |
| <kbd>↑</kbd> arrow   | `up arrow`                        |
| <kbd>↓</kbd> arrow   | `down arrow`                       |
| <kbd>→</kbd> arrow   | `right arrow`                       |
| <kbd>←</kbd> arrow   | `left arrow`                         |
| <kbd>Return ↵</kbd>  | `enter`                               |
| <kbd>A</kbd>, <kbd>B</kbd>, ...<kbd>Z</kbd> <br>(alphabet keys) | `a`, `b`, ...`z`<br>(the lowercase letter) |
| <kbd>1</kbd>, <kbd>2</kbd>, ...<kbd>0</kbd><br>(number keys) | `1`, `2`, ...`0`<br>(the numerical digit) |
| Other keys | The label of the key<br>or the letter it makes<br>when typed as text |

TODO: Document all keys and figure out exactly what keys Scratch does and doesn't support and how it handles unlisted keys)

#### Length

A positive [integer](#integer) representing how many [letters](#letter) or [items](#item) there are in a [string](#string) or [list](#list), respectively.

#### Letter

An individual [UTF-16](https://en.wikipedia.org/wiki/UTF-16) [code unit](https://developer.mozilla.org/en-US/docs/Glossary/Code_unit). Several joined together create a [string](#string). In Scratch, letters cannot be directly interacted with per se; getting a letter from a string just reports another string containing only that letter.

#### Name

A [string](#string) with the intention of identifying something. This can be applied to a great number of things, but is usually used in regards to a variable, list, costume, sound, [user](#username), or [sprite](#sprite).

#### Number

A [numerical](https://en.wikipedia.org/wiki/Number) [value](#value). Most numbers are [real](https://en.wikipedia.org/wiki/Real_number) and can be positive (`+`), negative (`-`), whole (`#`), or fractional (`#.#`). In [JavaScript](#javascript), these numbers are internally stored as [double-precision 64-bit binary format IEEE 754](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) values. Thus, Scratch follows largely the same rules JavaScript does when operating on numbers, though with exceptions. In addition to real numbers, special kinds of numbers exist too, which are for situations that cannot be fully expressed with real numbers.

##### Infinity

A special [number](#number) that is always greater than any other number. When [casted](#to-string) to a [string](#string), it is written as `Infinity`. It is created when the result of a mathematical operation is too large to be represented as a real number.

```sb
[Infinity] + (1) // Infinity
[10 ^ v] of (1000) // Infinity
[log v] of (0) // -Infinity
(1) / [Infinity] // 0
(1) / (0) // Infinity
```

##### -Infinity

A special [number](#number) that is always lower than any other number. When [casted](#to-string) to a [string](#string), it is written as `-Infinity`. It is created in the same manner as [Infinity](#infinity).

Whether `-Infinity` or `Infinity` is produced by an operation is determined in the same way that a real number would be negative or not. For example, `(1) / (n)` produces a positive number, while `(-1) / (n)` produces a negative number. In the same manner, `(1) / (0)` produces positive infinity, while `(-1) / (0)` produces negative infinity.

##### NaN

A special [number](#number) that is not a number. When [casted](#to-string) to a [string](#string), it is written as `NaN`. It is interpreted as a `0` when passed as input to other mathematical operations, unlike in [JavaScript](#javascript) where it causes most operations to report `NaN`. It can be produced by doing unknown or unrepresentable things with numbers, such as multiplying `Infinity` and zero, adding `Infinity` to `-Infinity`, or getting the square root of a negative number.

#### Rotation Style

A [string](#string) that determines how a [sprite](#sprite)'s [direction](#direction) impacts the way it is visibly rotated when rendered. Officially, it can be one of the following strings: `all around`, `left-right`, or `don't rotate`.

* `all around`: The sprite faces in its direction **clockwise**. At `0`, it faces **up**; at `90`, it faces **right**; at `180`, it faces **down**; and at `-90`, it faces **left**.
* `left-right`: If the sprite's direction is less than `0`, it faces **left** (`-90`). Otherwise, it faces **right** (`90`).
* `don't rotate`: The sprite *always* faces **right** (`90`).

The following table describes a sprite's *rendered* direction when using different rotation styles. (Its actual [direction *value*](#direction) remains the same; only the way it **looks like** it's pointed changes.)

| Direction | All Around       | Left-Right | Don't Rotate |
|----------:|:----------------:|:----------:|:------------:|
| **0**     | 0 (up)           | 90 (right) | 90 (right)   |
| **45**    | 45 (up-right)    | 90 (right) | 90 (right)   |
| **90**    | 90 (right)       | 90 (right) | 90 (right)   |
| **135**   | 135 (down-right) | 90 (right) | 90 (right)   |
| **180**   | 180 (down)       | 90 (right) | 90 (right)   |
| **-135**  | -135 (down-left) | -90 (left) | 90 (right)   |
| **-90**   | -90 (left)       | -90 (left) | 90 (right)   |
| **-45**   | -45 (up-left)    | -90 (left) | 90 (right)   |

##### Rotation Style: All Around

![A demonstration of the "all around" rotation style](./img/all-around.gif)

##### Rotation Style: Left-Right

![A demonstration of the "left-right" rotation style](./img/left-right.gif)

##### Rotation Style: Don't Rotate

![A demonstration of the "don't rotate" rotation style](./img/don't-rotate.gif)

#### String

A type of [value](#value) consisting of a series (i.e. string) of [letters](#letter), also known as text. All strings are considered [truthy](#truthy) except for the [empty string](#empty-string).

##### Empty String

A [string](#string) containing no letters. It has a [length](#length) of `0` and is the only string considered [falsy](#falsy). Also known as a "null string," it can be used in place of a value where there is none, e.g. getting an [item](#item) from a [list](#list) when it does not exist, or getting the [answer](#answer) provided by a user when they have not been [asked](#ask-and-wait-block) anything yet.

#### Undefined

A special [value](#value) that represents nothing. When converted to a [string](#string), it is written as `undefined`. This type of value is uncommon but can be produced by [hidden reporter blocks](#hidden-blocks). In most cases, however, Scratch uses `0` or an empty string to represent nothing.

#### Username

A [name](#name) used to reference a [user](#user). In standard Scratch, usernames are:

* Always 3 to 20 [letters](#letter) [long](#length) (inclusive)
* Can only contain the following symbols:
  * Uppercase Latin letters (A-Z)
  * Lowercase Latin letters (a-z)
  * Numerical digits (0-9)
  * Underscores (_)
  * Hyphens (-)

Also, official ("real") usernames are registered with the [Scratch website](https://scratch.mit.edu). They are unique (different from each other) and are case-insensitive, meaning that if a username "Endless-Ocean" is registered, there **cannot** *also* be an "endless-ocean" or "EndlEss-ocEan", though there **can** *also* be an "endless_ocean", "Endless--Ocean", and "Endless-Ocean1" if not already registered.

Official usernames can only be changed under extraordinarily rare circumstances (e.g. the username contained sensitive information about the user that the [Scratch team](https://en.scratch-wiki.info/wiki/Scratch_Team) decided to change for them), meaning that once it is created, it usually cannot be altered later.

Scripts can detect the current user's username via the [(`username`) block](#username-block). If the user is signed in, the block reports their username. If the user is signed out, the block reports an [empty string](#empty-string). In the official Scratch editor, the username reported by the username block should remain constant for the entire run of the project.

> The only exception to this rule in official contexts is when the user does the following steps in sequence:
>
> * Uses Scratch through the official website
>   * The user cannot sign into their account from the offline editor
> * Loads a shared project while signed out of their account
>   * This does not work with an unshared project because the user cannot view it while signed out
> * Signs in to their account from the same window while the project is open
>   * A menu exists for the user to sign in to their account without reloading the page
>
> Then the reported username is changed from the empty string to the username that the user signed in with, without reloading the project. After this happens, the user cannot change their username again without reloading the project or modifying the [runtime](#runtime) directly via developer tools like web inspector.

Due to the aforementioned limitations of real usernames, project *can* technically check if the user's username is "real" or not by:

* Crossreferencing it with a list of known usernames to see if it is registered with the Scratch website
* Remembering the usernames that the username block has reported (e.g. via cloud variables) and see if it encounters the same username with different casing
* Checking to see if the username is changed while the project is running (impossible without modification unless the user is signing in after being signed out)

A project could potentially utilize any of these ways to detect if it is actually being run in the official Scratch environment or an unofficial implementation of it.

Thus, for a truly accurate recreation of Scratch, the `(username)` block should **only report registered usernames** with the Scratch website, and a project which remembers usernames (e.g. via cloud variables) should **never encounter the same username it has seen before with different casing**, except in extraordinarily rare cases where the casing of a user's username was officially changed by the Scratch team, which is not known to have happened ever. The username should also not be changed while the project is running; the moment the project is started, whatever username the username block reports will be the username for the entire duration of time for which it runs, unless the user was signed out when the project began and signs in while the project is running.

In most cases, however, projects will probably not notice anything wrong with the username (but a few niche ones *could* break), so long as it only contains valid characters (A-Z, a-z, 0-9, _, -) and is between 3-20 letters in length, as previously stated. In general, usernames are really just any arbitrary [string](#string) that identifies a user.

#### X Position

A horizontal position on the Scratch coordinate plane. All [sprites](#sprite) have one. (TODO: document coordinate system)

#### Y Position

A vertical position on the Scratch coordinate plane. All [sprites](#sprite) have one. (TODO: document coordinate system)

#### Other Values

> Inclusion of this section is up for debate. Feel free to offer insight!

Other kinds values can potentially exist in modified or bugged versions of Scratch. This is because Scratch is built on JavaScript, and although it is highly unlikely for a project to work with any type of value other than the ones listed above, there is always the potential for other JavaScript primitives to be glitched into the project, e.g. by setting the value via developer tools, or some wider unknown issue.

They will not be specified in this specification as of yet (since they cannot be obtained through *official* means), but other values that could potentially be encountered in the rarest of cases are:

* `null`: A special value representing nothing. Distinct from [undefined](#undefined) in that it is meant to *explicitly* be nothing, whereas undefined exists for representing unknown behavior or values.
  * The writers of this specification do not know if `null` can be produced by existing blocks without modification.
    * If it is found to be an obtainable value, it may be documented further. Otherwise, it will not be, and is likely not necessary for inclusion in a reimplementation of Scratch.
  * This value can be casted to other data types. (`null` was obtained via "custom extensions" in [a modification of Scratch](#turbowarp) that still has largely the same behaviors to see how it would behave if somehow obtained.)
    * When [casted](#to-string) to a [string](#string), it is written as `null`.
    * When [casted](#to-number) to a [number](#number), it is casted to `0`.
    * When [casted](#to-boolean) to a [boolean](#boolean), it is [`false`](#falsy).

### Procedures

The following procedures are often performed by Scratch and are mentioned throughout this document:

#### Casting

Most blocks automatically convert [values](#value) between types through the use of very particular logic, also known as [casting](https://en.scratch-wiki.info/wiki/Casting). The logic Scratch uses is specified below.

##### To String

Scratch uses the following logic to convert any given [value](#value) to a [string](#string):

* If the value is a [**string**](#string):
  * **Return the value**, as it is already a string.
* If the value is a [**number**](#number):
  * **Follow the [logic JavaScript does](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)** to cast a number to a string **and return it.**
    * TODO: specify this better
  * If the value is [**NaN**](#nan), **return the string `NaN`.**
  * If the value is [**Infinity**](#infinity), **return the string `Infinity`.**
  * If the value is [**-Infinity**](#infinity), **return the string `-Infinity`.**
* If the value is a [**boolean**](#boolean):
  * If the value is [**true**](#boolean), **return the string `true`.**
  * If the value is [**false**](#boolean), **return the string `false`.**
* If the value is [**undefined**](#undefined), **return the string `undefined`.**
* If the value is [**something else**](#other-values), **follow the logic JavaScript has for the `toString` method of that value** to convert it to a string **and return it.** (Likely unnecessary though, as no known "other values" can be encountered.)
  * If the value is somehow **null**, **return the string `null`.**
  * TODO: Explain this step better or maybe just omit it because this step is not needed

##### To Number

Scratch uses the following logic to convert any given [value](#value) to a [number](#number):

* If the value is [**NaN**](#nan), **return the number `0`.**
* If the value is a [**number**](#number), **return the value** as it is.
* If the value is [**undefined**](#undefined), **return the number `0`.**
* If the value is [**true**](#true), **return the number `1`.**
* If the value is [**false**](#false), **return the number `0`.**
* If the value is a [**string**](#string) or [something else](#other-values):
  * **If the value can be converted to a number** according to [these rules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)**, return it.**
  * **Otherwise, return the number `0`.**
  * TODO: specify string -> number coercion better b/c JavaScript logic

##### To Boolean

Scratch uses the following logic to convert any given [value](#value) to a [boolean](#boolean):

###### Falsy

A value is **falsy**, or casted to [**false**](#false), if the value is:

* an [**empty string**](#empty-string) (no letters, [length](#length) is `0`),
* the **[strings](#string) `0`** or **`false`** (case-insensitive),
* one of the **[numbers](#number) `0`**, **`-0`**, or [**`NaN`**](#nan),
* [**undefined**](#undefined),
* **null** (rare),
* or **false**.

###### Truthy

Any value that is **not** [**falsy**](#falsy) is considered **truthy** and casted to [**true**](#true).

##### To Direction

Scratch uses the following logic to convert any given [value](#value) to a [direction](#direction):

1. [**Cast the value to number**](#to-number).
2. **Plug the casted value** into the following equation **as $a$ to find $d$:**
    * $d=\operatorname{mod}\left(a+179,360\right)-179$
    * Here is the same equation written in blocks:

      ```sb
      set [direction v] to ((((angle) + (179)) mod (360)) * (179))
      ```

3. **Return $d$** (`direction`)**.**

#### Fencing

In Scratch, whenever the position of a sprite changes, it then fences (aka restricts) the position of the sprite to fit inside of a fence (aka boundary) that is intended to keep it within the viewing area of the stage. Additionally, whenever the size of a sprite changes, it then fences (aka restricts) the size of the sprite to remain reasonably visible and not too large so as to cause rendering problems. This is primarily so that sprites do not randomly disappear due to erroneous code, but it is also an intentional feature of Scratch that does get utilized by some projects.

Scratch uses the following procedures to determine what the position and size of a sprite should be limited to depending on the width and height of its current costume, as well as its direction.

##### Fencing Position

* TODO :D

##### Fencing Size

* TODO ;D

Each fencing procedure is only applied after the position or size of the sprite changes (if the position changes, only the position is fenced; if the size changes, only the size is fenced). Because of this behavior, if one switches the costume to a particularly large or small costume, moves or resizes it, and then switches the costume back without changing the position and size afterward, then the sprite will remain at the same position and size that it had with the large or small costume (since fencing is *not applied when switching costumes*), allowing projects to circumvent fencing if needed.

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
