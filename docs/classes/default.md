[[libraryNameWithSpacesAndUpperCases]](../README.md) / default

# Class: default

Check if the connection is working.

**`example`** ```ts
aio.amIonline();
//=> false

aio.amIonline();
//=> true

aio.whenOffline( () => {
  alert('lost connection')
} )
```
@param void

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Methods

- [amIonline](default.md#amionline)
- [whenOffline](default.md#whenoffline)

## Constructors

### constructor

\+ **new default**(): [*default*](default.md)

**Returns:** [*default*](default.md)

## Methods

### amIonline

▸ `Static`**amIonline**(): *boolean*

**Returns:** *boolean*

Defined in: [index.ts:17](https://github.com/linediconsine/amIoffline/blob/3a1076b/src/index.ts#L17)

___

### whenOffline

▸ `Static`**whenOffline**(`callback`: () => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | () => *void* |

**Returns:** *void*

Defined in: [index.ts:21](https://github.com/linediconsine/amIoffline/blob/3a1076b/src/index.ts#L21)
