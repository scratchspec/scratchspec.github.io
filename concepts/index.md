# Concepts

This section explains the various concepts and rules of Scratch.

[[toc]]

## Capabilities

At its core, Scratch should be able to:

* **Change values** in a [runtime](#runtime)
* **Run scripts** [single-threaded](https://en.wikipedia.org/wiki/Cooperative_multitasking)
* **Play sounds** using speakers
* **Show images** and graphics

In a fully functional environment, Scratch can access:

* A **keyboard** (detect keys the user presses)
* A **mouse** (read its position and button state)
* A **microphone** (gauge surrounding loudness)
* A **clock** (get local and UTC time in milliseconds)
* **Wi-Fi** (make network requests to external servers)
* **Bluetooth** (connect to supported hardware)
* A **webcam** (sense motion in a direction)

If one or more of these things is unavailable, Scratch handles it gracefully.

## Constants

These constant values will show up a lot throughout this specification. They can be changed to one's liking, however for true accuracy to Scratch, they should all have their "**Standard Scratch**:" values.

### Stage Bounds

#### Stage Width

The horizontal size of the stage. This is an arbitrary positive [integer](#integer).

**Standard Scratch**: `480`

**Widescreen** (via unofficial modification): `640`

#### Stage Height

The vertical size of the stage. This is an arbitrary positive [integer](#integer).

**Standard Scratch**: `360`

#### Left Edge

The horizontal position of the left edge. This is derived from the [stage width](#stage-width).

**Formula**: `stage width / -2`

**Standard Scratch**: `-240`

#### Right Edge

The horizontal position of the right edge. This is derived from the [stage width](#stage-width).

**Formula**: `stage width / 2`

**Standard Scratch**: `240`

#### Top Edge

The vertical position of the top edge. This is derived from the [stage height](#stage-height).

**Formula**: `stage height / 2`

**Standard Scratch**: `180`

#### Bottom Edge

The vertical position of the bottom edge. This is derived from the [stage height](#stage-height).

**Formula**: `stage height / -2`

**Standard Scratch**: `-180`

#### Limits

#### Max Items

The maximum [length](#length) of a [list](#list), aka the most items that one list can hold. This limit is imposed to prevent excessive memory usage by [projects](#project). This is an arbitrary positive [integer](#integer).

**Standard Scratch**: `200000`

**Modified Scratch**: None (many Scratch mods do not enforce this limit, though memory overflow may eventually occur)

#### Max Clones

The maximum number of [clones](#clone) that can exist at one time. If this limit is reached, another clone cannot be created until one is deleted. This limit is imposed to prevent excessive memory usage by [projects](#project). This is an arbitrary positive [integer](#integer).

**Standard Scratch**: `300`

**Modified Scratch**: None (many Scratch mods do not enforce this limit, though memory overflow may eventually occur)

## Ideas

The following ideas are referenced throughout this specification:

### Asset

A [costume](#costume) or [sound](#sound).

#### Costume

A costume is an [image file](https://en.wikipedia.org/wiki/Digital_image) and a type of [asset](#asset) that can be graphically rendered to represent a [target](#target). It can be identified by its [name](#name) or [number](#integer). Costumes can either be [bitmap](https://en.wikipedia.org/wiki/Raster_graphics) or [vector](https://en.wikipedia.org/wiki/Vector_graphics).

#### Sound

A sound is an [audio file](https://en.wikipedia.org/wiki/Digital_audio) and a type of [asset](#asset) that can be audibly played to the user via [blocks](#block). It can be identified by its [name](#name).

### Block

> This will have to be better explained and added to the nonexistent section for script execution.

The fundamental component of Scratch as a programming language. In fact, it is similar to a function call in other programming languages. Every block:

* Accepts values or blocks as arguments
* Has a specific pre-defined operation that it performs
* Can be run and reports (i.e. outputs, returns) a single value (or [none at all](#undefined))

Blocks can be run, meaning that its operation is performed using the arguments it is given and the value resulting from the operation is reported, if any. When put together, blocks create [scripts](#script).

#### Standard Blocks

[Blocks](#block) that are officially supported in Scratch 3.0. They are the most commonly used blocks in [scripts](#script).

#### Hidden Blocks

[Blocks](#block) that exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility with projects created in older versions of Scratch or being used internally. Some are functional, some are not. [Scripts](#script) may use them on occasion, but they are found less often than [standard blocks](#standard-blocks) due to their obscurity.

### Clone

A copy created of a [sprite](#sprite) that has all of the original sprite's code, images, and sounds, but operates independently of it. Unlike sprites, clones cannot be directly referenced via existing blocks (e.g. you cannot [glide to](/palette/#glide-to-block) it directly without knowing its position ahead of time, as it cannot be selected in the sprite dropdown menu), and exist as their own thing. They are deleted every time the [flag](#flag) is clicked, and can also be deleted manually using the [`delete this clone` block](/palette/#delete-clone-block).

Clones can be created with the [create clone block](/palette/#create-clone-block) so long as the [maximum number of clones](#max-clones) has not been reached. Code can be written specifically for the clones of a sprite via the use of the [when I start as a clone block](/palette/#when-i-start-as-a-clone-block). The [stage](#stage) is the [target](#target) which cannot be cloned, whereas both sprites *and clones* can themselves be cloned.

### Edge

> The usefulness of defining "Edge" is up for debate. It may be best left to the section about [fencing](#fencing). Feel free to offer insight!

A boundary around the viewing area of the [stage](#stage) that restricts the [costume](#costume) of a [sprite](#sprite) from going off-screen.

### Flag

> The usefulness of defining "Flag" is up for debate. Feel free to offer insight!

The button that is clicked to start a project. It is also known as the green flag. In simple terms, it makes the project `Go`. When clicked, it runs any scripts placed under [when flag clicked blocks](/palette/#when-flag-clicked-block).

### JavaScript

> Definitions for general terms indirectly related to Scratch may be put into their own section instead, however this is up for debate. Feel free to offer insight!

The programming language that Scratch 3.0 runs in. The logic it uses is largely similar to the logic Scratch uses due to Scratch's dependence on JavaScript for performing operations and manipulating values. In fact, this is where the type of value [undefined](#undefined) is taken from; it is a type of value in JavaScript for representing what is not defined or known. Thanks to the quirks of Scratch and [no-op hidden reporter blocks](#hidden-blocks), we can obtain this type of value.

### List

A series of [items](#item) stored together in sequence. Each item is referenced by its numerical index (aka item #), a positive [integer](#integer) ranging from `1` to the [length](#length) of the list (inclusive). Lists can be empty, meaning that they have a length of `0` and contain no items. There is also a [maximum number of items](#max-items) that a list can hold, aka a limit to its length.

### Mod

A modification (altered version) of the Scratch 3.0 [runtime](#runtime) that is nonstandard and may introduce new blocks, features, or changes not present in standard Scratch. The majority of this spec will be documenting standard Scratch behavior. For information on nonstandard blocks and behaviors in mods, see the [relevant appendix](/palette/#nonstandard-blocks).

### Opcode

A [name](#name) unique to every [block](#block) in the Scratch programming language. It tells blocks what to do. For example, if the opcode of a block is [`motion_movesteps`](/palette/#motion_movesteps), it attempts to move steps.

### Project

A [stage](#stage) and optionally some [sprites](#sprite) packaged together to do something. They can be loaded into a [runtime](#runtime) and executed. They can also be saved as [project files](/files/).

### Runtime

The environment in which a [project](#project) is run. It keeps track of the project's current state and executes its code. [Projects files can be loaded into and saved from runtimes](/files/).

### Script

A set of [blocks](#block) put together to create code. Here is an example of a script:

```sb
when flag clicked
ask [What's your name?] and wait
say (join [Hello, ] (join (answer) [!]))
stop [this script v]
```

Blocks are put together in the following ways:

* TODO :D

### Sprite

A kind of [target](#target) that can exist on its own, have [variables](#variable) only it can set, and be moved, pointed, scaled, and hidden, all of which are things that the [stage](#stage) cannot do.

### Stage

A special [target](#target), with one and only one existing in every project that is always shown behind all [sprites](#sprite). It is sort of like the [global scope](https://en.wikipedia.org/wiki/Scope_(computer_science)#Global_scope) found in some programming languages, but it also exists as its own entity.

Unlike [sprites](#sprite), it cannot be moved, pointed, scaled, hidden, or have variables that only it can set. However, it can do everything else a sprite can.

### Target

An object that runs blocks, shows images, and plays sounds. It has its own [variables](#variable) and [scripts](#script) to perform operations. It can take the form of either a [sprite](#sprite) or the [stage](#stage).

A target exists as its own independent unit. However, targets can interact with each other in some ways, e.g. via [messages](#message).

### User

The individual who is interacting with the [project](#project) and provides input. They may optionally have a [username](#username) that the project can use to identify them.

### Variable

A [named](#name) container belonging to a [target](#target) that holds exactly one [value](#value) and is interacted with via [blocks](#block). The following operations are often performed with variables:

* **Get**: Read the current value of the variable.
* **Set**: Modify the current value of the variable.

Some variables are created on a project-by-project basis for general use by [scripts](#script). For example, a `(score)` variable can be created to keep track of an arbitrary point value. Others are directly built into the [runtime](#runtime) and cannot be deleted. For example, the [`(x position)`](#x-position) variable always exists in every [sprite](#sprite) to set its rendered horizontal position.

General purpose variables can be interacted with using [variables blocks](/palette/#variables-blocks). Runtime variables have their own dedicated blocks instead and are usually limited or sandboxed in some way, unlike general purpose variables.

## Values

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

### Value

A general value. This can be a [string](#string), [number](#number), [boolean](#boolean), or in rare cases [undefined](#undefined). [Variables](#variable) can hold individual values, and a [list](#list) can store many of them as [items](#item).

### Angle

A [number](#number) intended to be in [degrees](https://en.wikipedia.org/wiki/Degree_(angle)). `[sin v] of ()`, `[cos v] of ()`, and `[tan v] of ()` expect angles as input.

### Answer

A [string](#string) provided to the [project](#project) by the [user](#user) as input via the [ask and wait block](/palette/#ask-and-wait-block).

### Boolean

A special type of [value](#value) used to represent the result of a logical operation. It is always either [`true`](#true) or [`false`](#false).

#### True

A kind of [boolean](#boolean) used to represent a yes or an affirmative answer as a result of a logical operation. When casted to a [string](#string), it is written as `true`. When casted to a [number](#number), it is casted to `1`. It is considered [truthy](#truthy), as it is itself the definition of truthy.

#### False

A kind of [boolean](#boolean) used to represent a no or a negative answer as a result of a logical operation. When casted to a [string](#string), it is written as `false`. When casted to a [number](#number), it is casted to `0`. It is considered [falsy](#falsy), as it is itself the definition of falsy.

### Direction

An [angle](#angle) determining how a sprite is pointed on the screen. It is always wrapped to remain in the range -179 and 181 (exclusive). An angle $a$ can be converted to a direction $d$ like so:

$d=\operatorname{mod}\left(a+179,360\right)-179$

Or in scratchblocks:

```sb
set [direction v] to ((((angle) + (179)) mod (360)) * (179))
```

The way a sprite's direction impacts how it is rendered is determined by its [rotation style](#rotation-style).

### Integer

A whole [number](#number), or a number that is not a fraction (e.g. `42`, `-37`). Many [blocks](#block) report integers (e.g. `round ()`, `costume [number v]`, `loudness`, `item # of () in [list v]`) and expect integers (e.g. `item () of [list v]`), just to name a few.

### Item

A [value](#value) in a [list](#list).

### Key

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

### Length

A positive [integer](#integer) representing how many [letters](#letter) or [items](#item) there are in a [string](#string) or [list](#list), respectively.

### Letter

An individual [UTF-16](https://en.wikipedia.org/wiki/UTF-16) [code unit](https://developer.mozilla.org/en-US/docs/Glossary/Code_unit). Several joined together create a [string](#string). In Scratch, letters cannot be directly interacted with per se; getting a letter from a string just reports another string containing only that letter.

### Name

A [string](#string) with the intention of identifying something. This can be applied to a great number of things, but is usually used in regards to a variable, list, costume, sound, [user](#username), or [sprite](#sprite).

### Number

A [numerical](https://en.wikipedia.org/wiki/Number) [value](#value). Most numbers are [real](https://en.wikipedia.org/wiki/Real_number) and can be positive (`+`), negative (`-`), whole (`#`), or fractional (`#.#`). In [JavaScript](#javascript), these numbers are internally stored as [double-precision 64-bit binary format IEEE 754](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) values. Thus, Scratch follows largely the same rules JavaScript does when operating on numbers, though with exceptions. In addition to real numbers, special kinds of numbers exist too, which are for situations that cannot be fully expressed with real numbers.

#### Infinity

A special [number](#number) that is always greater than any other number. When [casted](#to-string) to a [string](#string), it is written as `Infinity`. It is created when the result of a mathematical operation is too large to be represented as a real number.

```sb
[Infinity] + (1) // Infinity
[10 ^ v] of (1000) // Infinity
[log v] of (0) // -Infinity
(1) / [Infinity] // 0
(1) / (0) // Infinity
```

#### -Infinity

A special [number](#number) that is always lower than any other number. When [casted](#to-string) to a [string](#string), it is written as `-Infinity`. It is created in the same manner as [Infinity](#infinity).

Whether `-Infinity` or `Infinity` is produced by an operation is determined in the same way that a real number would be negative or not. For example, `(1) / (n)` produces a positive number, while `(-1) / (n)` produces a negative number. In the same manner, `(1) / (0)` produces positive infinity, while `(-1) / (0)` produces negative infinity.

#### NaN

A special [number](#number) that is not a number. When [casted](#to-string) to a [string](#string), it is written as `NaN`. It is interpreted as a `0` when passed as input to other mathematical operations, unlike in [JavaScript](#javascript) where it causes most operations to report `NaN`. It can be produced by doing unknown or unrepresentable things with numbers, such as multiplying [`Infinity`](#infinity) and zero, adding `Infinity` to [`-Infinity`](#-infinity), or getting the square root of a negative number. Unlike Infinity, it can never be negative.

### Rotation Style

A [string](#string) that determines how a [sprite](#sprite)'s [direction](#direction) impacts the way it is visibly rotated when rendered. Officially, it can only be one of the following strings: `all around`, `left-right`, or `don't rotate`.

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

#### Rotation Style: All Around

(commented out)

```md
![A demonstration of the "all around" rotation style](/img/all-around.gif)
```

#### Rotation Style: Left-Right

```md
![A demonstration of the "left-right" rotation style](/img/left-right.gif)
```

#### Rotation Style: Don't Rotate

```md
![A demonstration of the "don't rotate" rotation style](/img/don't-rotate.gif)
```

### String

A type of [value](#value) consisting of a series (i.e. string) of [letters](#letter), also known as text. All strings are considered [truthy](#truthy) except for the [empty string](#empty-string), the string `0`, and the string `false` (case-insensitive), which are considered [falsy](#falsy).

#### Empty String

A [string](#string) containing no letters. It has a [length](#length) of `0` and is one of the only strings considered [falsy](#falsy). Also known as a "null string," it is typically used in place of a value where there is none, e.g. getting an [item](#item) from a [list](#list) when it does not exist, or getting the [answer](#answer) provided by a user when they have not been [asked](/palette/#ask-and-wait-block) anything yet.

### Undefined

A special [value](#value) that represents nothing. When converted to a [string](#string), it is written as `undefined`. This type of value is uncommon but can be produced by [hidden reporter blocks](#hidden-blocks). In most cases, however, Scratch uses `0` or an [empty string](#empty-string) to represent nothing.

### Username

A [name](#name) used to reference a [user](#user). In standard Scratch, usernames:

* Are always 3 to 20 [letters](#letter) [long](#length) (inclusive)
* Can only contain the following symbols:
  * Uppercase Latin letters (A-Z)
  * Lowercase Latin letters (a-z)
  * Numerical digits (0-9)
  * Underscores (_)
  * Hyphens (-)

Also, official ("real") usernames are registered with the [Scratch website](https://scratch.mit.edu). They are unique (different from each other) and are case-insensitive, meaning that if a username "Endless-Ocean" is registered, there **cannot** *also* be an "endless-ocean" or "EndlEss-ocEan", though there **can** *also* be an "endless_ocean", "Endless--Ocean", and "Endless-Ocean1" if not already registered.

Official usernames can only be changed under extraordinarily rare circumstances (e.g. the username contained sensitive information about the user that the [Scratch team](https://en.scratch-wiki.info/wiki/Scratch_Team) decided to change for them), meaning that once it is created, it usually cannot be altered later.

Scripts can detect the current user's username via the [(`username`) block](/palette/#username-block). If the user is signed in, the block reports their username. If the user is signed out, the block reports an [empty string](#empty-string). In the official Scratch editor, the username reported by the username block should remain constant for the entire run of the project.

> The only exception to this rule in official contexts is when the user does the following steps in sequence:
>
> * Uses Scratch through the official website
>   * The user cannot sign into their account from the offline editor
> * Loads a shared project while signed out of their account
>   * This does not work with an unshared project because the user cannot view it while signed out
> * Signs in to their account from the same window while the project is open
>   * A menu exists for the user to sign in to their account without reloading the page
>
> Then the reported username is changed from the empty string to the username that the user signed in with, without reloading the project. After this happens, the user cannot change their username again without reloading the project or modifying the [runtime](#runtime) directly, e.g. via [developer tools](https://en.wikipedia.org/wiki/Web_development_tools).

Due to the aforementioned limitations of real usernames, project *can* technically check if the user's username is "real" or not by:

* Crossreferencing it with a list of known usernames to see if it is registered with the Scratch website
* Remembering the usernames that the username block has reported (e.g. via cloud variables) and see if it encounters the same username with different casing
* Checking to see if the username is changed while the project is running (impossible without modification unless the user is signing in after being signed out)

A project could potentially utilize any of these ways to detect if it is actually being run in the official Scratch environment or an unofficial implementation of it.

Thus, for a truly accurate recreation of Scratch, the `(username)` block should **only report registered usernames** with the Scratch website, and a project which remembers usernames (e.g. via cloud variables) should **never encounter the same username it has seen before with different casing**, except in extraordinarily rare cases where the casing of a user's username was officially changed by the Scratch team, which is not known to have happened ever. The username should also not be changed while the project is running; the moment the project is started, whatever username the username block reports will be the username for the entire duration of time for which it runs, unless the user was signed out when the project began and signs in while the project is running.

In most cases, however, projects will probably not notice anything wrong with the username (but a few niche ones *could* break), so long as it only contains valid characters (A-Z, a-z, 0-9, _, -) and is between 3-20 letters in length, as previously stated. In general, usernames are really just any arbitrary [string](#string) that identifies a user.

### X Position

A horizontal position on the Scratch coordinate plane. All [sprites](#sprite) have one. (TODO: document coordinate system)

### Y Position

A vertical position on the Scratch coordinate plane. All [sprites](#sprite) have one. (TODO: document coordinate system)

### Other Values

> Inclusion of this section is up for debate. Feel free to offer insight!

Other kinds values can potentially exist in modified or bugged versions of Scratch. This is because Scratch is built on JavaScript, and although it is highly unlikely for a project to work with any type of value other than the ones listed above, there is always the potential for other JavaScript primitives to be glitched into the project, e.g. by setting the value via developer tools, or some wider unknown issue.

They will not be specified in this specification as of yet (since they cannot be obtained through *official* means), but other values that could potentially be encountered in the rarest of cases are:

* `null`: A special value representing nothing. Distinct from [undefined](#undefined) in that it is meant to *explicitly* be nothing, whereas undefined exists for representing unknown behavior or values.
  * The writers of this specification do not know if `null` can be produced by existing blocks without modification.
    * If it is found to be an obtainable value, it may be documented further. Otherwise, it will not be, and is likely not necessary for inclusion in a reimplementation of Scratch.
  * This value can be casted to other data types. (`null` was obtained via "custom extensions" in [a modification of Scratch](/palette/#turbowarp) that still has largely the same behaviors as standard Scratch to see how it would behave if somehow obtained.)
    * When [casted](#to-string) to a [string](#string), it is written as `null`.
    * When [casted](#to-number) to a [number](#number), it is casted to `0`.
    * When [casted](#to-boolean) to a [boolean](#boolean), it is [`false`](#falsy).

## Procedures

The following procedures are often performed by Scratch and are mentioned throughout this document:

### Casting

Most blocks automatically convert [values](#value) between types through the use of very particular logic, also known as [casting](https://en.scratch-wiki.info/wiki/Casting). The logic Scratch uses is specified below.

#### To String

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
* If the value is [**something else**](#other-values), **follow the logic [JavaScript](#javascript) has for the `toString` method of that value** to convert it to a string **and return it.** (Likely unnecessary though, as no known "other values" can be encountered.)
  * If the value is somehow **null**, **return the string `null`.**
  * TODO: Explain this step better or maybe just omit it because this step is not needed

#### To Number

Scratch uses the following logic to convert any given [value](#value) to a [number](#number):

* If the value is [**NaN**](#nan), **return the number `0`.**
* If the value is a [**number**](#number), **return the value** as it is.
* If the value is [**undefined**](#undefined), **return the number `0`.**
* If the value is [**true**](#true), **return the number `1`.**
* If the value is [**false**](#false), **return the number `0`.**
* If the value is a [**string**](#string) or [something else](#other-values):
  * **If the value can be converted to a number** according to [these rules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)**, return it.**
  * **Otherwise, return the number `0`.**
  * TODO: specify string -> number coercion better b/c [JavaScript](#javascript) logic

#### To Boolean

Scratch uses the following logic to convert any given [value](#value) to a [boolean](#boolean):

##### Falsy

A value is **falsy**, or casted to [**false**](#false), if the value is:

* an [**empty string**](#empty-string) (no [letters](#letter), [length](#length) is `0`),
* the **[strings](#string) `0`** or **`false`** (case-insensitive),
* one of the **[numbers](#number) `0`**, **`-0`**, or [**`NaN`**](#nan),
* [**undefined**](#undefined),
* [**null**](#other-values) (rare),
* or **false**.

##### Truthy

Any value that is **not** [**falsy**](#falsy) is considered **truthy** and casted to [**true**](#true).

#### To Direction

Scratch uses the following logic to convert any given [value](#value) to a [direction](#direction):

1. [**Cast the value to number**](#to-number).
2. **Plug the casted value** into the following equation **as $a$ to find $d$:**
    * $d=\operatorname{mod}\left(a+179,360\right)-179$
    * Here is the same equation written in blocks:

      ```sb
      set [direction v] to ((((angle) + (179)) mod (360)) * (179))
      ```

3. **Return $d$** (`direction`)**.**

### Fencing

In Scratch, whenever the position of a sprite changes, it then fences (aka restricts) the position of the sprite to fit inside of a fence (aka boundary) that is intended to keep it within the viewing area of the stage. Additionally, whenever the size of a sprite changes, it then fences (aka restricts) the size of the sprite to remain reasonably visible and not too large so as to cause rendering problems. This is primarily so that sprites do not randomly disappear due to erroneous code, but it is also an intentional feature of Scratch that does get utilized by some projects.

Scratch uses the following procedures to determine what the position and size of a sprite should be limited to depending on the width and height of its current costume, as well as its direction.

#### Fencing Position

* TODO :D

#### Fencing Size

* TODO ;D

Each fencing procedure is only applied after the position or size of the sprite changes (if the position changes, only the position is fenced; if the size changes, only the size is fenced). Because of this behavior, if one switches the costume to a particularly large or small costume, moves or resizes it, and then switches the costume back without changing the position and size afterward, then the sprite will remain at the same position and size that it had with the large or small costume (since fencing is *not applied when switching costumes*), allowing projects to circumvent fencing if needed.
