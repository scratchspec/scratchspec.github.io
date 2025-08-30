# Logic

Internally, Scratch follows certain rules and steps to perform operations. They are provided here for reference.

## Casting

Most blocks automatically convert values between types for use using certain logic, also known as [casting](https://en.scratch-wiki.info/wiki/Casting). The logic Scratch uses to perform most conversions is specified below.

### To String

Scratch uses the following logic to convert any given [value](/concepts/values/#value) to a [string](/concepts/values/#string):

* If the value is a [**string**](/concepts/values/#string):
  * **Return the value**, as it is already a string.
* If the value is a [**number**](/concepts/values/#number):
  * **Follow the [logic JavaScript does](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)** to cast a number to a string **and return it.**
    * TODO: specify this better
  * If the value is [**NaN**](/concepts/values/#nan), **return the string `NaN`.**
  * If the value is [**Infinity**](/concepts/values/#infinity), **return the string `Infinity`.**
  * If the value is [**-Infinity**](/concepts/values/#infinity), **return the string `-Infinity`.**
* If the value is a [**boolean**](/concepts/values/#boolean):
  * If the value is [**true**](/concepts/values/#boolean), **return the string `true`.**
  * If the value is [**false**](/concepts/values/#boolean), **return the string `false`.**
* If the value is [**undefined**](/concepts/values/#undefined), **return the string `undefined`.**
* If the value is [**something else**](/concepts/values/#other-values), **follow the logic [JavaScript](/concepts/ideas/#javascript) has for the `toString` method of that value** to convert it to a string **and return it.** (Likely unnecessary though, as no known "other values" can be encountered.)
  * If the value is somehow **null**, **return the string `null`.**
  * TODO: Explain this step better or maybe just omit it because this step is not needed

### To Number

Scratch uses the following logic to convert any given [value](/concepts/values/#value) to a [number](/concepts/values/#number):

* If the value is [**NaN**](/concepts/values/#nan), **return the number `0`.**
* If the value is a [**number**](/concepts/values/#number), **return the value** as it is.
* If the value is [**undefined**](/concepts/values/#undefined), **return the number `0`.**
* If the value is [**true**](/concepts/values/#true), **return the number `1`.**
* If the value is [**false**](/concepts/values/#false), **return the number `0`.**
* If the value is a [**string**](/concepts/values/#string) or [something else](/concepts/values/#other-values):
  * **If the value can be converted to a number** according to [these rules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)**, return it.**
  * **Otherwise, return the number `0`.**
  * TODO: specify string -> number coercion better b/c [JavaScript](/concepts/ideas/#javascript) logic

### To Boolean

Scratch uses the following logic to convert any given [value](/concepts/values/#value) to a [boolean](/concepts/values/#boolean):

#### Falsy

A value is **falsy**, or casted to [**false**](/concepts/values/#false), if the value is:

* an [**empty string**](/concepts/values/#empty-string) (no [letters](/concepts/values/#letter), [length](/concepts/values/#length) is `0`),
* the **[strings](/concepts/values/#string) `0`** or **`false`** (case-insensitive),
* one of the **[numbers](/concepts/values/#number) `0`**, **`-0`**, or [**`NaN`**](/concepts/values/#nan),
* [**undefined**](/concepts/values/#undefined),
* [**null**](/concepts/values/#other-values) (rare),
* or **false**.

#### Truthy

Any value that is **not** [**falsy**](#falsy) is considered **truthy** and casted to [**true**](/concepts/values/#true).

### To Direction

Scratch uses the following logic to convert any given [value](/concepts/values/#value) to a [direction](/concepts/values/#direction):

1. [**Cast the value to number**](#to-number).
2. **Plug the casted value** into the following equation **as $a$ to find $d$:**
    * $d=\operatorname{mod}\left(a+179,360\right)-179$
    * Here is the same equation written in blocks:

      ```sb
      set [direction v] to ((((angle) + (179)) mod (360)) * (179))
      ```

3. **Return $d$** (`direction`)**.**

## Fencing

> TODO: This section has an excessive amount of fluff and does not provide any actual information and will have to be rewritten... sometime

In Scratch, whenever the position of a sprite changes, it then fences (aka restricts) the position of the sprite to fit inside of a fence (aka boundary) that is intended to keep it within the viewing area of the stage. Additionally, whenever the size of a sprite changes, it then fences (aka restricts) the size of the sprite to remain reasonably visible and not too large so as to cause rendering problems. This is primarily so that sprites do not randomly disappear due to erroneous code, but it is also an intentional feature of Scratch that does get utilized by some projects.

Scratch uses the following procedures to determine what the position and size of a sprite should be limited to depending on the width and height of its current costume, as well as its direction.

### Fencing Position

* TODO :D

### Fencing Size

* TODO ;D

Each fencing procedure is only applied after the position or size of the sprite changes (if the position changes, only the position is fenced; if the size changes, only the size is fenced). Because of this behavior, if one switches the costume to a particularly large or small costume, moves or resizes it, and then switches the costume back without changing the position and size afterward, then the sprite will remain at the same position and size that it had with the large or small costume (since fencing is *not applied when switching costumes*), allowing projects to circumvent fencing if needed.
