# Argument Flags
Argument flags mark how arguments may be used *(or hence, not used at all)*.

### Optional
The argument is optional and can be excluded (but can't be left empty).

For example, `$someFunction[argument1;argument2]`, let's say 'argument1' is required and 'argument2' is optional. Then that means that both `$someFunction[argument1]` and `$someFunction[argument1;argument2]` would work.

> 🗒️ **Note:** Optional argument(s) can't be before required argument(s). In addition, if there is an ellipsis (an argument that can be repeated, denoted with the `...` placeholder) there can't be any optional arguments.

### Required
The argument must be included and requires some input (it can't be left empty).

### Emptiable
Required but can be left empty, can not be excluded.

For example, `$someFunction[argument1;argument2;argument3]`, let's say 'argument1' is required, 'argument2' is emptiable, and 'argument3' is required. Then that means that both `$someFunction[argument1;;argument3]` and `$someFunction[argument1;some argument here;argument3]` would work. 

### Vacantable
Optional but can also be left empty.

Same as the optional flag, except you can also leave the argument empty instead of excluding it.

For example, `$someFunction[argument1;argument2]`, let's say 'argument1' is required and 'argument2' is vacatable. Then that means that both `$someFunction[argument1]`, `$someFunction[argument1;]`, and `$someFunction[argument1;argument2]` would work.