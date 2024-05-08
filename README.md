# Decorators in typescript's enum

typescript has not support decorators in enum yet:
https://github.com/microsoft/TypeScript/issues/3279#issuecomment-1260635779

so we need some temporary solution:

[MyEnum.ts](src/MyEnum.ts)

Note: 
 It is necessary to add the setting in tsconfig.json:
```
{
  "compilerOptions": {
    "experimentalDecorators": true,


    ... // other setting
  }
}
```


demo url:

https://poerlang.github.io/typescript-enum-class-decorators/
