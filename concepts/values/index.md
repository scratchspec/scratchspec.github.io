# Values

Values are data stored in the [runtime](/concepts/ideas/#runtime) that can be interacted with and manipulated by [blocks](/concepts/ideas/#block). In Scratch, the following types of values exist:

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

## Value

A general value. This can be a [string](#string), [number](#number), [boolean](#boolean), or in rare cases [undefined](#undefined). [Variables](/concepts/ideas/#variable) can hold individual values, and a [list](/concepts/ideas/#list) can store many of them as [items](#item).

## Angle

A [number](#number) intended to be in [degrees](https://en.wikipedia.org/wiki/Degree_(angle)). `[sin v] of ()`, `[cos v] of ()`, and `[tan v] of ()` expect angles as input.

## Answer

A [string](#string) provided to the [project](/concepts/ideas/#project) by the [user](/concepts/ideas/#user) as input via the [ask and wait block](/palette/standard/#ask-and-wait-block).

## Boolean

A special type of [value](#value) used to represent the result of a logical operation. It is always either [`true`](#true) or [`false`](#false).

### True

A kind of [boolean](#boolean) used to represent a yes or an affirmative answer as a result of a logical operation. When casted to a [string](#string), it is written as `true`. When casted to a [number](#number), it is casted to `1`. It is considered [truthy](/concepts/logic/#truthy), as it is itself the definition of truthy.

### False

A kind of [boolean](#boolean) used to represent a no or a negative answer as a result of a logical operation. When casted to a [string](#string), it is written as `false`. When casted to a [number](#number), it is casted to `0`. It is considered [falsy](/concepts/logic/#falsy), as it is itself the definition of falsy.

## Direction

An [angle](#angle) determining how a sprite is pointed on the screen. It is always wrapped to remain in the range -179 and 181 (exclusive). An angle $a$ can be converted to a direction $d$ like so:

$d=\operatorname{mod}\left(a+179,360\right)-179$

Or in scratchblocks:

```sb
set [direction v] to ((((angle) + (179)) mod (360)) * (179))
```

The way a sprite's direction impacts how it is rendered is determined by its [rotation style](#rotation-style).

## Integer

A whole [number](#number), or a number that is not a fraction (e.g. `42`, `-37`). Many [blocks](/concepts/ideas/#block) report integers (e.g. `round ()`, `costume [number v]`, `loudness`, `item # of () in [list v]`) and expect integers (e.g. `item () of [list v]`), just to name a few.

## Item

A [value](#value) in a [list](/concepts/ideas/#list).

## Key

A [name](#name) used by Scratch for referring to a key on the [user](/concepts/ideas/#user)'s keyboard. Specific keys are referred to by name. To refer to any arbitrary key (as in, "press any key to continue"), the name `any` can be used.

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

## Length

A positive [integer](#integer) representing how many [letters](#letter) or [items](#item) there are in a [string](#string) or [list](/concepts/ideas/#list), respectively.

## Letter

An individual [UTF-16](https://en.wikipedia.org/wiki/UTF-16) [code unit](https://developer.mozilla.org/en-US/docs/Glossary/Code_unit). Several joined together create a [string](#string). In Scratch, letters cannot be directly interacted with per se; getting a letter from a string just reports another string containing only that letter.

## Name

A [string](#string) with the intention of identifying something. This can be applied to a great number of things, but is usually used in regards to a variable, list, costume, sound, [user](#username), or [sprite](/concepts/ideas/#sprite).

## Number

A [numerical](https://en.wikipedia.org/wiki/Number) [value](#value). Most numbers are [real](https://en.wikipedia.org/wiki/Real_number) and can be positive (`+`), negative (`-`), whole (`#`), or fractional (`#.#`). In [JavaScript](/concepts/ideas/#javascript), these numbers are internally stored as [double-precision 64-bit binary format IEEE 754](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) values. Thus, Scratch follows largely the same rules JavaScript does when operating on numbers, though with exceptions. In addition to real numbers, special kinds of numbers exist too, which are for situations that cannot be fully expressed with real numbers.

### Infinity

A special [number](#number) that is always greater than any other number. When [casted](/concepts/logic/#to-string) to a [string](#string), it is written as `Infinity`. It is created when the result of a mathematical operation is too large to be represented as a real number.

```sb
[Infinity] + (1) // Infinity
[10 ^ v] of (1000) // Infinity
[log v] of (0) // -Infinity
(1) / [Infinity] // 0
(1) / (0) // Infinity
```

### -Infinity

A special [number](#number) that is always lower than any other number. When [casted](/concepts/logic/#to-string) to a [string](#string), it is written as `-Infinity`. It is created in the same manner as [Infinity](#infinity).

Whether `-Infinity` or `Infinity` is produced by an operation is determined in the same way that a real number would be negative or not. For example, `(1) / (n)` produces a positive number, while `(-1) / (n)` produces a negative number. In the same manner, `(1) / (0)` produces positive infinity, while `(-1) / (0)` produces negative infinity.

### NaN

A special [number](#number) that is literally not a number. When [casted](/concepts/logic/#to-string) to a [string](#string), it is written as `NaN`. It is created by doing unknown or unrepresentable things with numbers, such as multiplying [`Infinity`](#infinity) by `0`, adding `Infinity` to [`-Infinity`](#-infinity), or getting the square root of a negative number. Unlike Infinity, it does not have a negative counterpart. It is interpreted as a `0` when passed as input to other mathematical operations, unlike in [JavaScript](/concepts/ideas/#javascript) where it causes most operations to report `NaN`.

## Opcode

A [name](#name) that identifies the operation a [block](/concepts/ideas/#block) performs when run. For example, the opcode of the [`move () steps`](/palette/standard/#motion_movesteps) block is `motion_movesteps`, and when run it moves the sprite by the given number of steps, as named.

## Rotation Style

A [string](#string) that determines how a [sprite](/concepts/ideas/#sprite)'s [direction](#direction) impacts the way it is visibly rotated when rendered. Officially, it can only be one of the following strings: `all around`, `left-right`, or `don't rotate`.

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

### All Around

<video width="360" height="360" src="/img/all-around.webm" autoplay loop muted playsinline style="
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
"></video>

### Left-Right

<video width="360" height="360" src="/img/left-right.webm" autoplay loop muted playsinline style="
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
"></video>

### Don't Rotate

<video width="360" height="360" src="/img/dont-rotate.webm" autoplay loop muted playsinline style="
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
"></video>

## String

A type of [value](#value) consisting of a series (i.e. string) of [letters](#letter), also known as text. All strings are considered [truthy](/concepts/logic/#truthy) except for the [empty string](#empty-string), the string `0`, and the string `false` (case-insensitive), which are considered [falsy](/concepts/logic/#falsy).

### Empty String

A [string](#string) containing no letters. It has a [length](#length) of `0` and is one of the only strings considered [falsy](/concepts/logic/#falsy). Also known as a "null string," it is typically used in place of a value where there is none, e.g. getting an [item](#item) from a [list](/concepts/ideas/#list) when it does not exist, or getting the [answer](#answer) provided by a user when they have not been [asked](/palette/standard/#ask-and-wait-block) anything yet.

## Undefined

A special [value](#value) that represents nothing. When converted to a [string](#string), it is written as `undefined`. This type of value is uncommon but can be produced by [hidden reporter blocks](/concepts/ideas/#hidden-blocks). In most cases, however, Scratch uses `0` or an [empty string](#empty-string) to represent nothing.

## Username

A [name](#name) used to reference a [user](/concepts/ideas/#user). In standard Scratch, usernames:

* Are always 3 to 20 [letters](#letter) [long](#length) (inclusive)
* Can only contain the following symbols:
  * Uppercase Latin letters (A-Z)
  * Lowercase Latin letters (a-z)
  * Numerical digits (0-9)
  * Underscores (_)
  * Hyphens (-)

Also, official ("real") usernames are registered with the [Scratch website](https://scratch.mit.edu). They are unique (different from each other) and are case-insensitive, meaning that if a username "Endless-Ocean" is registered, there **cannot** *also* be an "endless-ocean" or "EndlEss-ocEan", though there **can** *also* be an "endless_ocean", "Endless--Ocean", and "Endless-Ocean1" if not already registered.

Official usernames can only be changed under extraordinarily rare circumstances (e.g. the username contained sensitive information about the user that the [Scratch team](https://en.scratch-wiki.info/wiki/Scratch_Team) decided to change for them), meaning that once it is created, it usually cannot be altered later.

Scripts can detect the current user's username via the [(`username`) block](/palette/standard/#username-block). If the user is signed in, the block reports their username. If the user is signed out, the block reports an [empty string](#empty-string). In the official Scratch editor, the username reported by the username block should remain constant for the entire run of the project.

> The only exception to this rule in official contexts is when the user does the following steps in sequence:
>
> * Uses the [official Scratch website](https://scratch.mit.edu/)
>   * The user cannot sign into their account from the offline editor
> * Loads a shared project while signed out of their account
>   * This does not work with an unshared project because the user cannot view it while signed out
> * Signs in to their account from the same window while the project is open
>   * A menu exists for the user to sign in to their account without reloading the page
>
> Then the reported username is changed from the empty string to the username that the user signed in with, without reloading the project. After this happens, the user cannot change their username again without reloading the project or modifying the [runtime](/concepts/ideas/#runtime) directly, e.g. via [developer tools](https://en.wikipedia.org/wiki/Web_development_tools).

Due to the aforementioned limitations of real usernames, project *can* technically check if the user's username is "real" or not by:

* Crossreferencing it with a list of known usernames (or making a request to the Scratch API using cloud variables and an external service such as [scratchattach](https://scratchattach.tim1de.net/)) to see if it is registered with the Scratch website
* Remembering the usernames that the username block has reported (e.g. via cloud variables) to see if it encounters the same username with different casing
* Checking if the username is changed while the project is running (impossible through normal means unless the user is signing in after being signed out)

A project could potentially utilize any of these ways to detect if it is actually being run in the official Scratch environment or an unofficial version of it.

Thus, for a truly accurate recreation of Scratch, the `(username)` block should **only report registered usernames** with the Scratch website, and a project which remembers usernames (e.g. via cloud variables) should **never encounter the same username it has seen before with different casing**, except in extraordinarily rare cases where the casing of a user's username was officially changed by the Scratch team, which is not known to have happened ever. The username should also not be changed while the project is running; the moment the project is started, whatever username the username block reports will be the username for the entire duration of time for which it runs, unless the user was signed out when the project began and signs in while the project is running.

In most cases, however, projects will probably not notice anything wrong with the username (but a few niche ones *could* break), so long as it only contains valid characters (A-Z, a-z, 0-9, _, -) and is between 3-20 letters in length, as previously stated. In general, usernames are really just any arbitrary [string](#string) that identifies a user.

## X Position

A [number](#number) representing a horizontal position on the Scratch coordinate plane. All [sprites](/concepts/ideas/#sprite) have one.

> TODO: document coordinate system

## Y Position

A [number](#number) representing a vertical position on the Scratch coordinate plane. All [sprites](/concepts/ideas/#sprite) have one.

> TODO: document coordinate system

## Other Values

> Inclusion of this section is up for debate. Feel free to offer insight!

Other kinds values can potentially exist in modified or bugged versions of Scratch. This is because Scratch is built on JavaScript, and although it is highly unlikely for a project to work with any type of value other than the ones listed above, there is always the potential for other JavaScript primitives to be glitched into the project, e.g. by setting the value via developer tools, or some wider unknown issue.

They will not be specified in this specification as of yet (since they cannot be obtained through *official* means), but other values that could potentially be encountered in the rarest of cases are:

* `null`: A special value representing nothing. Distinct from [undefined](#undefined) in that it is meant to *explicitly* be nothing, whereas undefined exists for representing unknown behavior or values.
  * The writers of this specification do not know if `null` can be produced by existing blocks without modification.
    * If it is found to be an obtainable value, it may be documented further. Otherwise, it will not be, and is likely not necessary for inclusion in a reimplementation of Scratch.
  * This value can be casted to other data types. (`null` was obtained via "custom extensions" in [a modification of Scratch](/palette/nonstandard/#turbowarp) that still has largely the same behaviors as standard Scratch to see how it would behave if somehow obtained.)
    * When [casted](/concepts/logic/#to-string) to a [string](#string), it is written as `null`.
    * When [casted](/concepts/logic/#to-number) to a [number](#number), it is casted to `0`.
    * When [casted](/concepts/logic/#to-boolean) to a [boolean](#boolean), it is [`false`](/concepts/logic/#falsy).
