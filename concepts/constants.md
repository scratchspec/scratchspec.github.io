# Constants

These constant values will show up a lot throughout this specification. They can be changed to one's liking, however for true accuracy to Scratch, they should all have their "**Standard Scratch**:" values.

## Stage Bounds

### Stage Width

The horizontal size of the stage. This is an arbitrary positive [integer](#integer).

**Standard Scratch**: `480`

**Widescreen** (via unofficial modification): `640`

### Stage Height

The vertical size of the stage. This is an arbitrary positive [integer](#integer).

**Standard Scratch**: `360`

### Left Edge

The horizontal position of the left edge. This is derived from the [stage width](#stage-width).

**Formula**: `stage width / -2`

**Standard Scratch**: `-240`

### Right Edge

The horizontal position of the right edge. This is derived from the [stage width](#stage-width).

**Formula**: `stage width / 2`

**Standard Scratch**: `240`

### Top Edge

The vertical position of the top edge. This is derived from the [stage height](#stage-height).

**Formula**: `stage height / 2`

**Standard Scratch**: `180`

### Bottom Edge

The vertical position of the bottom edge. This is derived from the [stage height](#stage-height).

**Formula**: `stage height / -2`

**Standard Scratch**: `-180`

## Limits

### Max Items

The maximum [length](#length) of a [list](#list), aka the most items that one list can hold. This limit is imposed to prevent excessive memory usage by [projects](#project). This is an arbitrary positive [integer](#integer).

**Standard Scratch**: `200000`

**Modified Scratch**: None (many Scratch mods do not enforce this limit, though memory overflow may eventually occur)

### Max Clones

The maximum number of [clones](#clone) that can exist at one time. If this limit is reached, another clone cannot be created until one is deleted. This limit is imposed to prevent excessive memory usage by [projects](#project). This is an arbitrary positive [integer](#integer).

**Standard Scratch**: `300`

**Modified Scratch**: None (many Scratch mods do not enforce this limit, though memory overflow may eventually occur)
