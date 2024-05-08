export class Enum extends Number {
    private static ___value_to_key___: any = {}
    private static ___value_to_info___: any = {}

    static valueToKey(value: any) {
        return this.___value_to_key___[value]
    }

    static valueToInfo(value: any) {
        return this.___value_to_info___[value]
    }
}

export function AddInfo(info: any) {
    return (a_enum_class: any | Enum, key: any) => {
        if(!a_enum_class.___value_to_key___) a_enum_class.___value_to_key___ = {};
        if(!a_enum_class.___value_to_info___) a_enum_class.___value_to_info___ = {};
        const value = a_enum_class[key];
        a_enum_class.___value_to_key___[value] = key;
        a_enum_class.___value_to_info___[value] = info;
    }
}

export class FooEnum extends Enum {
    @AddInfo('一') static one = 1;
    @AddInfo('二') static two = 2;
    @AddInfo('三') static three = 3;
}

export const testEnums = () => {
    let theType: FooEnum;
    let value = Math.random();
    if(value>0.3333){
        if(value>0.6666){
            theType = FooEnum.three
        }else{
            theType = FooEnum.two
        }
    }else{
        theType = FooEnum.one;
    }
    let output;
    if (theType === FooEnum.one) {
        output = ['the enum = 1 ---->', FooEnum.valueToKey(FooEnum.one), FooEnum.valueToInfo(FooEnum.one), FooEnum.one]
    } else if (theType === FooEnum.two){
        output = ['the enum = 2 ---->',  FooEnum.valueToKey(FooEnum.two), FooEnum.valueToInfo(FooEnum.two), FooEnum.two]
    }else{
        output = ['the enum = 3 ---->',  FooEnum.valueToKey(FooEnum.three), FooEnum.valueToInfo(FooEnum.three), FooEnum.three];
    }
    return output;
}
