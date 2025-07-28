# TODO

> [!IMPORTANT]
> This spec is a work in progress; it's nowhere near complete. **Please [contribute](#contributing) if you can!** Anywhere that says TODO is something that needs to be worked on, as well as any sections that are empty or missing.

Various things need to be worked on to make this a good resource:

* **Cleanup excessive linking and wordiness.** Links to headings should only be applied if they offer further context about a section and have not been previously or recently linked to in said section. Additionally, this specification should explain everything about Scratch with **no extra wordiness or fluff.** (Unfortunately, @OceanIsEndless has a *strong* tendency to do both of these.) It is unclear what its structure should be as well.
* ⚠️ ‼️ **Cite reliable sources.** ‼️ ⚠️ This specification should provide references to the code of Scratch itself (not just wikis) to prove its claims and hopefully be an accurate source of information about the Scratch programming language. It has not been decided how to best reference material though. (Just link them, or go wiki style?)

## TODO: Blocks

This specification should eventually document every block ever! (A bit hopeful, but certainly possible, and most definitely necessary for Scratch 3.0 to be 100% functionally recreatable from this document.)

Below is a list of blocks that have been or still need to be documented here. (Fully specified blocks are checked off.) Specifying [standard](#palette) blocks is the first priority. Once they are documented, the scope of this spec can be expanded to include [hidden](#hidden-blocks), [obsolete](#obsolete-blocks), and even [nonstandard](#nonstandard-blocks) blocks as well, probably in that order.

<details>
  <summary>Click to view block list</summary>

* □ [Motion Blocks](#motion-blocks)
  * □ **Standard**
    * □ `move () steps`
    * □ `turn cw () degrees`
    * □ `turn ccw () degrees`
    * □ `go to ( v)`
    * □ `go to x: () y: ()`
    * □ `glide () secs to ( v)`
    * □ `glide () secs to x: () y: ()`
    * □ `point in direction ()`
    * □ `point towards ( v)`
    * □ `change x by ()`
    * □ `set x to ()`
    * □ `change y by ()`
    * □ `set y to ()`
    * □ `if on edge, bounce`
    * □ `set rotation style [left-right]`
    * □ `(x position)`
    * □ `(y position)`
    * □ `(direction)`
  * □ [**Hidden**](#hidden-blocks) (**specify** what they do, even if nothing at all)
    * □ `scroll right ()`
    * □ `scroll up ()`
    * □ `align scene [ v]`
    * □ `(x scroll)`
    * □ `(y scroll)`
  * □ [**Obsolete**](#obsolete-blocks) (**imagine** what they *would* do if kept operational)
    * □ `scroll right ()`
    * □ `scroll up ()`
    * □ `align scene [ v]`
    * □ `(x scroll)`
    * □ `(y scroll)`
  * □ [**Nonstandard**](#nonstandard-blocks) (blocks that [mods](#mod) of Scratch added)
    * □ [PenguinMod](#penguinmod)
      * □ `move [ v] () steps`
      * □ `change by x: () y: ()`
      * □ `point towards x: () y: ()`
      * □ `turn around`
      * □ `if touching ( v), bounce`
      * □ `set rotation style [look at | up-down v]`
      * □ `move to stage [ v]`
    * □ [Unsandboxed](#unsandboxed)
      * □ `(rotation style)`
* □ [Looks blocks](#looks-blocks)
* □ [Sound blocks](#sound-blocks)
* □ [Events blocks](#events-blocks)
* □ [Control blocks](#control-blocks)
* □ [Sensing blocks](#sensing-blocks)
* □ [Operators blocks](#operators-blocks)
* □ [Variables blocks](#variables-blocks)
* □ [List blocks](#list-blocks)
* □ [Custom blocks](#custom-blocks)
* □ [Addon blocks](#addon-blocks)
* □ *other categories of blocks*
* □ TODO: Write list of blocks TODO :)

</details>
