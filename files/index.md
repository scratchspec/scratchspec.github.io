# File Format

> This section will be expanded once other stuff gets documented. For now, runtime behavior is more pressing than file formatting.

Scratch projects can be saved and loaded from a computer as files. Scratch has several project file formats, each with their own complicated structures and loading behaviors. Even with a perfectly accurate [runtime](/concepts/ideas/#runtime) environment, a saved project that is not properly loaded may not work as it was intended to, and could very well break! The purpose of this section is to lay out how project files are created and interpreted.

## SB3

The .sb3 file format is the standard format for storing Scratch **3.0** projects, the version of Scratch that this specification documents. In reality, it is a renamed [.zip](https://en.wikipedia.org/wiki/ZIP_(file_format)) file that contains the following files:

* `project.json`, a [.json](https://en.wikipedia.org/wiki/JSON) file storing project data.
* Various image files used as [costumes](/concepts/ideas/#costume).
* Various audio files used as [sounds](/concepts/ideas/#sound).

### Block Structure

Scratch 3.0 stores block data in the `blocks` property of each target in `project.json`.

The `blocks` property is a mapping between block identifiers and their serialized representations. Its entries can contain regular block objects or top-level variable and list primitives serialized as arrays.

These identifiers are used to reference blocks and describe their connections within scripts.

#### Block Objects

A serialized block entry can contain a block object describing an operation and its relationships with other blocks.

The following properties are defined:

| Property | Description |
|---|---|
| `opcode` | Identifies the block operation. |
| `next` | References the next block in a script, or `null`. |
| `parent` | References the block to which the current block is connected, or `null`. |
| `inputs` | Stores named input connections. |
| `fields` | Stores named field values. |
| `shadow` | Indicates whether the block is a shadow block. |
| `topLevel` | Indicates whether the block is positioned independently in the workspace. |
| `x` | Horizontal workspace coordinate. |
| `y` | Vertical workspace coordinate. |
| `mutation` | Stores additional block-specific information, such as custom procedure metadata. |
| `comment` | References an associated comment, when present. |

The `opcode` property is required for regular block objects. Other properties are optional and depend on the block.

#### Block Connections

Blocks reference one another through their identifiers rather than being directly nested inside one another.

The `next` property identifies the following block in a script.

The `parent` property identifies the block to which the current block is connected. This can be a block containing an input or the preceding block in a script. Top-level blocks have no parent.

Input connections can also reference other blocks through their identifiers.

Together, these references describe the relationships between blocks in a workspace.

#### Inputs

The `inputs` property stores named input connections. Each input is represented by an array whose first element specifies the connection type.

The standard input types are:

| Value | Name | Description |
|---|---|---|
| `1` | `INPUT_SAME_BLOCK_SHADOW` | The input contains an unobscured shadow block or a primitive shadow value. |
| `2` | `INPUT_BLOCK_NO_SHADOW` | The input contains a regular block without a shadow block. |
| `3` | `INPUT_DIFF_BLOCK_SHADOW` | The input contains a regular block together with a separate shadow block or shadow value. |

The standard input representations include:

- Type `1`: `[1, blockId]`
- Type `2`: `[2, blockId]`
- Type `3`: `[3, blockId, shadowId]`

These are common representations. The referenced values can also be serialized primitive arrays rather than block identifiers.

The remaining elements depend on the connection type and can contain block identifiers, `null` values, or primitive representations.

#### Fields

The `fields` property stores named field values.

Unlike inputs, fields do not represent connections to other blocks. They store values associated directly with a block, such as menu selections, variable references, and operator options.

In standard serialized projects, field values are generally represented as arrays containing the field value and, where applicable, an associated identifier.

The exact representation depends on the field.

#### Shadow Blocks

Shadow blocks represent default values for block inputs.

They provide default values when no regular block is connected to an input. When a regular block is connected to an input with a shadow, the shadow can remain serialized as its default value.

The `shadow` property identifies whether a serialized block is a shadow block.

#### Top-Level Blocks

The `topLevel` property identifies blocks positioned independently in the workspace.

Top-level blocks can include workspace coordinates through the `x` and `y` properties.

Blocks connected to other blocks are generally not top-level blocks.

#### Primitive Entries

Not every entry in the `blocks` property is a regular block object.

The `blocks` mapping can also contain top-level variable and list primitives serialized directly as arrays.

Input representations can contain additional primitive arrays, including:

| Primitive type | Value |
|---|---|
| Number | `4`–`8` |
| Color | `9` |
| Text | `10` |
| Broadcast | `11` |
| Variable | `12` |
| List | `13` |

These primitive representations can appear inside input arrays rather than as separate block objects.

For example, a numeric primitive can appear directly inside an input:

```json
{
  "inputs": {
    "VALUE": [1, [4, 42]]
  }
}
```

Top-level variable and list primitives must therefore be distinguished from regular block objects and primitives embedded in inputs.

#### Comments

Block comments and workspace comments are represented separately.

A block can contain a `comment` property referencing an associated comment identifier.

The target-level `comments` property stores the comment objects themselves, including their text and workspace positioning information.

This distinction separates the association between a block and its comment from the actual comment data.

#### References

- Scratch Parser: [`sb3_definitions.json`](https://github.com/scratchfoundation/scratch-parser/blob/master/lib/sb3_definitions.json)
- Scratch Parser: [`sb3_schema.json`](https://github.com/scratchfoundation/scratch-parser/blob/master/lib/sb3_schema.json)
- Scratch VM: [`src/serialization/sb3.js`](https://github.com/scratchfoundation/scratch-vm/blob/develop/src/serialization/sb3.js)

## SB2

The .sb2 file format is the standard format for storing Scratch **2.0** projects, the version of Scratch preceding Scratch 3.0, the version that this specification documents.

The standard Scratch 3.0 editor is compatible with .sb2 files. It has a procedure for converting .sb2 files to [.sb3](#sb3) files, which it then loads.

TODO: Specify!!

## SB

The .sb file format is the standard format for storing projects from Scratch **1.4** and earlier, which are early versions of Scratch that work drastically different than modern Scratch due to the major changes in between. Unlike [.sb2](#sb2) and [.sb3](#sb3) files, .sb files are stored in binary using a much less human-readable format.

Despite major differences, the standard Scratch 3.0 editor remains compatible with .sb files. It has a procedure for converting .sb files to .sb2 files, which it then converts to .sb3 files and loads.

TODO: Specify!
