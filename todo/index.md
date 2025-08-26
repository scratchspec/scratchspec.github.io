# TODO

This spec is a work in progress; it's nowhere near complete. **Please [contribute](/intro/#contributing) if you can!** Anywhere that says TODO is something that needs to be worked on, as well as any sections that are empty or missing.

## TODO: Cleanup

Various things need to be worked on to make this a good resource:

* ⚠️ ‼️ **Cite reliable sources.** ‼️ ⚠️ This specification should eventually provide references to the code of Scratch itself (not just wikis) to prove its claims and be an accurate source of information about the Scratch programming language. As it is in early stages with little to no actual research done, misleading or inaccurate information is sometimes presented (pointed out in issues [#4](https://github.com/OceanIsEndless/scratch-spec/issues/4), [#6](https://github.com/OceanIsEndless/scratch-spec/issues/6), and [#7](https://github.com/OceanIsEndless/scratch-spec/issues/7)). It should also be made clear to others that this spec is more of an early draft and the content it hopes to cover has not been extensively investigated **yet.**
* **Decide on formatting and structure guidelines.** Currently, the rules of how this spec is to be formatted are [not well defined](/CONTRIBUTING.md), and the rules should probably be rewritten and refined to help provide more organized and comprehensive documentation (e.g. when to use links between sections, what terms to use in reference to Scratch [ideas](/ideas/), how to best cite sources, what qualifies as a section, etc).
* **Cleanup excessive linking and wordiness.** Links to headings should only be applied if they offer further context about a section and have not been previously or recently linked to in said section. Additionally, this specification should explain everything about Scratch with **no extra wordiness or fluff.** Unfortunately, @OceanIsEndless has a *strong* tendency to do both of these. It is unclear what the spec's structure should be as well, and there may be too many or too little sections.

## TODO: Blocks

This specification should eventually document every block ever! (A bit hopeful, but certainly possible, and most definitely necessary for Scratch 3.0 to be 100% functionally recreatable from this document.)

Below is a list of blocks that have been or still need to be documented here. (Fully specified blocks are crossed off.) Specifying [standard](/ideas/concepts/#standard-blocks) blocks is the first priority. Once they are documented, the scope of this spec can be expanded to include [hidden](/ideas/concepts/#hidden-blocks), [obsolete](/palette/obsolete/), and even [nonstandard](/palette/nonstandard/) blocks as well, probably in that order.

:::: details Click to view block list

::: details [Motion Blocks](/palette/standard/#motion-blocks)

* [**Standard**](/palette/standard/#standard-motion-blocks)
  * [`move () steps`](/palette/standard/#motion_movesteps)
  * `turn cw () degrees`
  * `turn ccw () degrees`
  * `go to ( v)`
  * `go to x: () y: ()`
  * `glide () secs to ( v)`
  * `glide () secs to x: () y: ()`
  * `point in direction ()`
  * `point towards ( v)`
  * `change x by ()`
  * `set x to ()`
  * `change y by ()`
  * `set y to ()`
  * `if on edge, bounce`
  * `set rotation style [ v]`
  * `(x position)`
  * `(y position)`
  * `(direction)`
* [**Hidden**](/palette/standard/#hidden-motion-blocks) (**specify** what they do, even if nothing at all)
  * `scroll right ()`
  * `scroll up ()`
  * `align scene [ v]`
  * `(x scroll)`
  * `(y scroll)`
* [**Obsolete**](/palette/obsolete/#motion-blocks) (**imagine** what they *would* do if kept operational)
  * `scroll right ()`
  * `scroll up ()`
  * `align scene [ v]`
  * `(x scroll)`
  * `(y scroll)`
* [**Nonstandard**](/palette/nonstandard/#motion-blocks) (blocks that [mods](/ideas/concepts/#mod) of Scratch added)
  * [PenguinMod](/palette/nonstandard/#penguinmod)
    * `move [ v] () steps`
    * `change by x: () y: ()`
    * `point towards x: () y: ()`
    * `turn around`
    * `if touching ( v), bounce`
    * `set rotation style [look at | up-down v]`
    * `move to stage [ v]`
  * [Unsandboxed](/palette/nonstandard/#unsandboxed)
    * `(rotation style)`

:::

::: details [Looks blocks](/palette/#looks-blocks)

:::

::: details [Sound blocks](/palette/#sound-blocks)

:::

::: details [Events blocks](/palette/#events-blocks)

:::

::: details [Control blocks](/palette/#control-blocks)

:::

::: details [Sensing blocks](/palette/#sensing-blocks)

:::

::: details [Operators blocks](/palette/#operators-blocks)

:::

::: details [Variables blocks](/palette/#variables-blocks)

:::

::: details [List blocks](/palette/#list-blocks)

:::

::: details [Custom blocks](/palette/#custom-blocks)

:::

::: details [Music blocks](/palette/#music-blocks)

:::

::: details [Pen blocks](/palette/#pen-blocks)

:::

Etcetera... More will be written in time.

::::
