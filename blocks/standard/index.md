# Standard Blocks

This section documents each and every block that is available in Scratch 3.0, and its precise functionality.

::: info

How to organize and refer to these blocks is up for debate. Naming headings for blocks by opcode could work (and probably will) but may seem too cryptic. Feel free to offer insight!

:::

::: details Index

[[toc]]

:::

## Example block

::: info

This is an ***example* section** about a block. It does not exist in Scratch.

:::

The heading for a section about a block should be its opcode, as used in the [SB3](/files/#sb3) [file format](/files/#file-format).

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

## Motion blocks

These blocks relate to motion, or moving sprites. They manipulate the x position, y position, and direction of a sprite in order to position it in the desired manner. Notably, they do not do anything when used from the [stage](/ideas/#stage).

### Standard motion blocks

These motion blocks are officially supported in Scratch 3.0:

#### motion_movesteps

**Operation:**

Moves the sprite forward the given number of pixels in the direction that it is facing. Negative numbers move the sprite backwards.

**Block:**

```sb
move (STEPS) steps
```

**Arguments**:

| Name: | [Casted](/ideas/#casting) to: | Provides the:                         |
|:-----:|:----------------------:|:-------------------------------------:|
|`STEPS`| [number](/ideas/#to-number)   | Number of steps (aka pixels) to move. |

**Procedure:**

The x position of the sprite is changed by the **sine of the sprite's direction** multiplied by the number of steps to move, and the y position of the sprite is changed by the **cosine of the sprite's direction** multiplied by the number of steps to move.

This can be expressed as:

$x' = x + \sin(d) \cdot S$

$y' = y + \cos(d) \cdot S$

Where $S$ is the `STEPS` to move, $d$ is the direction of the sprite, and $x$ and $y$ are the x and y positions of the sprite, respectively.

In scratchblocks, this operation can also be replicated as:

```sb
go to x: ((x position) + (([sin v] of (direction)) * (STEPS))) y: ((y position) + (([cos v] of (direction)) * (STEPS)))
```

After the sprite is moved, its position is [fenced](/ideas/#fencing-position).

### Hidden motion blocks

These motion blocks exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility with projects created in older versions of Scratch or being used internally:

TODO

## Looks blocks

These blocks relate to the looks, or appearance of targets. They manipulate the size, costume, layer, visiblility, and graphic effects of a sprite in order to make it appear a certain way.

### Standard looks blocks

These looks blocks are officially supported in Scratch 3.0:

TODO

### Hidden looks blocks

These looks blocks exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility with projects created in older versions of Scratch or being used internally:

TODO

## Sound blocks

These blocks relate to sound, or the playback of audio. They play the sound files that a sprite has access to and manipulate the volume and sound effects of a sprite in order to make it stream sounds however is needed.

TODO

### Standard sound blocks

These sound blocks are officially supported in Scratch 3.0:

TODO

### Hidden sound blocks

These sound blocks exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility with projects created in older versions of Scratch or being used internally:

TODO

## Events blocks

These blocks relate to the start of a script. They cause scripts to run in order for the project to do things.

### Standard events blocks

These events blocks are officially supported in Scratch 3.0:

TODO

### Hidden events blocks

These events blocks exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility with projects created in older versions of Scratch or being used internally:

TODO

## Control blocks

These blocks relate to the execution of other blocks. They cause scripts to run in more complex ways in order for the project to perform more logical operations.

### Standard control blocks

These control blocks are officially supported in Scratch 3.0:

TODO

### Hidden control blocks

These control blocks exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility with projects created in older versions of Scratch or being used internally:

TODO

## Sensing blocks

These blocks relate to sensing, or detecting various values. They can read information that couldn't be determined otherwise in order to make the project more aware of its [runtime](/ideas/#runtime) context.

### Standard sensing blocks

These sensing blocks are officially supported in Scratch 3.0:

TODO

#### sensing_username

**Operation:**

Reports the [username](/ideas/#username) of the [user](/ideas/#user) that has loaded the [project](/ideas/#project) in the context of the Scratch website.

**Block:**

```sb
(username)
```

**Arguments**:

None

**Procedure**:

* If the user is signed into their Scratch account (username known):
  * Their username is known, as the user is registered with Scratch and signed into their account.
  * **Report the user's [username](/ideas/#username).**
* If the user is not signed into their account (username unknown):
  * Their username is not known, as the user is using Scratch without being signed into an account.
  * **Report an [empty string](/ideas/#empty-string).**

Technically, this block can report any username registered with the Scratch website or the empty string without breaking anything. Although it is meant to report the username of the user who has loaded the project, there is no way for a project to confirm that the reported username is actually theirs.

### Hidden sensing blocks

These sensing blocks exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility with projects created in older versions of Scratch or being used internally:

TODO

## Operators blocks

TODO: Add description

### Standard operators blocks

These operators blocks are officially supported in Scratch 3.0:

TODO

### Hidden operators blocks

These operators blocks exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility with projects created in older versions of Scratch or being used internally:

TODO

## Variables blocks

TODO: Add description

### Standard variables blocks

These variables blocks are officially supported in Scratch 3.0:

TODO

### Hidden variables blocks

These variables blocks exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility with projects created in older versions of Scratch or being used internally:

TODO

## List blocks

TODO: Add description

### Standard list blocks

These list blocks are officially supported in Scratch 3.0:

TODO

### Hidden list blocks

These list blocks exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility with projects created in older versions of Scratch or being used internally:

TODO

## Custom blocks

TODO: Add description

### Standard custom blocks

These custom blocks are officially supported in Scratch 3.0:

TODO

### Hidden custom blocks

These custom blocks exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility with projects created in older versions of Scratch or being used internally:

TODO

### Special custom blocks

> This section may be moved to a [relevant section](/ideas/nonstandard/), though it will have to be clarified that these blocks can be loaded into Scratch, they just don't do anything outside of [mods](/ideas/#mod).

Usually, when a custom block or parameter is used outside of its definition, it does nothing or returns `0`. However, there are specific custom blocks and parameters that have unique behaviors when used outside of their definitions, specifically in certain Scratch [mods](/ideas/#mod).

A strategy that some Scratch mods use to add their own blocks to Scratch without breaking compatibility (making the project not load in standard Scratch) is by adding them as custom blocks without definitions. In normal Scratch, when a custom block does not have a definition, it won't do anything special; however, when the blocks are run in mods of Scratch, they can be coded to have different behaviors. The behaviors of these blocks in standard Scratch and modifications are specified below:

TODO: Specify!!!

## Music blocks

TODO: Add description

TODO: Add sections

## Pen blocks

TODO: Add description

TODO: Add sections

## Video Sensing blocks

TODO: Add description

TODO: Add sections

## Text to Speech blocks

TODO: Add description

TODO: Add sections

## Translate blocks

TODO: Add description

TODO: Add sections

## Makey Makey blocks

TODO: Add description

TODO: Add sections

## micro:bit blocks

TODO: Add description

TODO: Add sections

## LEGO EV3 blocks

TODO: Add description

TODO: Add sections

## BOOST blocks

TODO: Add description

TODO: Add sections

## WeDo 2.0 blocks

TODO: Add description

TODO: Add sections

## Force and Acceleration blocks

TODO: Add description

TODO: Add sections

## CoreEx blocks

These two extension blocks do not do anything and simply existed with the purpose of testing Scratch 3.0's extension system. They can still be used in projects, though they do not do anything useful and the odds of encountering them in the wild (normal Scratch projects) are *highly* slim.

### Standard CoreEx blocks

There are no standard CoreEx blocks, as they were never intended to be used in projects.

### Hidden CoreEx blocks

These CoreEx blocks exist in Scratch 3.0 but are not actively supported or used on their own, either being kept for compatibility reasons or being used internally for testing:

TODO
