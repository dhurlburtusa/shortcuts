# Tiled Notes

## Custom Types

Tiled allows custom types to be declared. As of Tiled 1.12, classes or enums can be declared.

Custom types are stored in the *.tiled-project file (uses JSON format) as an array under the `propertyTypes` key. All custom types have a type, ID, and name.

Custom types can be exported and imported in a JSON format.

### Class

Classes have a name. They can be assigned a color, set whether to draw fill, declared what is can be used for (layer, map, object, project, property, terrain (aka wangcolor), terrain set (aka wangset), tile, or tileset). They can also be assigned members.

#### Class Members

**Types**

- bool (`false` or `true`)
- color (string with `#aarrggbb` format)
- float (number)
- file (string of a file)
- int (number)
- object (to be determined)
- string (string)
- list (array of any type; types may be mixed; items don't have a `name` key)
- enum

### Enum

Enums can be either a number or string. Each enum may allow multiple values to be selected.

Number enums are stored as strings.
