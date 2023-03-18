# $createRole
Creates a new role.

## Syntax
```
$createRole[role name;color hex;hoist?;mentionable?]
```

### Parameters
- `role name` `(Type: String || Flag: Required)`: The name to give the new role.
- `color hex` `(Type: Color || Flag: Required)`: The [color hex](https://htmlcolorcodes.com/color-picker) of the new role.
- `hoist?` `(Type: Bool || Flag: Vacantable)`: Whether the role should be displayed separately (hoisted) or not. `no` means the role won't be hoisted, `yes` means it will.

![example](https://user-images.githubusercontent.com/69215413/122795705-965e9480-d28b-11eb-8e4e-98338f143ecb.png)

- `mentionable?` `(Type: Bool || Flag: Vacantable)`: Whether the role should be mentionable by everyone. `no` means the role won't be mentionable, `yes` means it will.

![example](https://user-images.githubusercontent.com/69215413/122795765-a37b8380-d28b-11eb-8f06-c23e01bafc11.png)

## Example
```
$nomention
$createRole[Cool Role;#FFFF00;yes;no]
Created new role!
```

![example](https://user-images.githubusercontent.com/69215413/125972939-7d2950a4-1831-4696-8a23-d07d45fa9456.png)

![example](https://user-images.githubusercontent.com/69215413/125973030-7c9b980c-cffb-4f8e-aacc-a644a6fa23c3.png)
