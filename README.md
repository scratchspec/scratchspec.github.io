# Scratch Specification

A detailed explanation of how Scratch 3.0 works as a programming language.

To read it, you can visit the [published page](https://scratchspec.github.io/), or view the source markdown files in this repository.

## Roadmap

As of October 19, 2025, I have finally returned to working on this project! Apologies for the long break, as I have been busy with other things, but I'm really devoted to finishing this project! Here is a roadmap of what I'll be doing. (Note: Some things may be done out of order to meet certain needs faster.)

> [!NOTE]
> I'm not really an expert on Scratch, and even after writing this I probably won't be, so if you happen to have any deep knowledge of what Scratch does, it would be very helpful if you could contribute it! I'll be referencing Scratch's source code as I write, and I will be sure to analyze and fact-check every single detail, but if you already know a lot about something regarding Scratch then you may be able to explain it much better than I can, especially since I have a tendency to put big words where I don't understand things... yeah...

### Pre-Write

- [ ] Specify ScratchJr
  - Yes, I know that this spec is for Scratch 3.0... but I *really* need a place to add info for [something I'm making](https://github.com/oceanisendless/sjr2sb3)... so I'll just write about it here and pretend it's relevant somehow.
  - Documenting the entirety of Scratch is quite daunting to me at the moment, so I think that starting with a smaller version of Scratch will help me better lay out the groundwork for documenting all of Scratch!
- [ ] Define Scratch concepts
  - I need to figure out what Scratch fundamentally _is_ as a programming language. I need to define all the relevant terminology, concepts, etcetera.
  - Once I have clearly specified the basic elements of Scratch, I can reference them as I write other sections so as not to repeat information.

### Investigation
- [ ] Figure out Scratch runtime execution
  - Before I go to the high-level stuff like blocks and such, I need to explain how scripts are run, i.e. how Scratch interpets the blocks.
  - [ ] Script running
  - [ ] Memory I guess
  - I will keep the specifics about the Scratch VM abstract so that it's more flexible to implement
- [ ] Specify blocks (Scratch ones for now)
  - And so begins the great block specifying!... or something...
  - [ ] Determine what specific info needs to be added on each block and how to format it
  - [ ] Document built-in Scratch blocks
    - [ ] Core categories and relevant hidden blocks
    - [ ] Scratch extensions and relevant hidden blocks
    - [ ] Obsolete or not-very-useful-but-they-still-exist hidden blocks
- [ ] Saving/loading file formats
  - Scratch has various file formats it uses to represent stuff. I need to document those and explain what the values are and how they get loaded into the runtime and saved back to files!
  - [ ] `.sb3`
  - [ ] `.sb2`
  - [ ] `.sb`
  - [ ] `.scratch`? (might be too unstable)
- [ ] Write out low-level stuff
  - [ ] Input/Output (how are user inputs received? how are the graphics drawn?? how are the sounds played???)
  - [ ] Cloud interaction (probably not too hard)
  - [ ] ***Scratch Link*** (connecting to hardware)
    - Something tells me this will be the hardest but maybe not

### Ongoing efforts

- **FACT CHECK *EVERYTHING***
- Document every block ever
- Improve on content as much as possible
- Maybe decide how to best go about documenting other versions of Scratch

## Status

It's a lot. I'm kind of overwhelmed when I see how much goes into Scratch that I don't understand. This spec could go absolutely nowhere. But I will really put in the effort and try to follow through on this project. I'll be taking things one step at a time, and seeing where it goes!
