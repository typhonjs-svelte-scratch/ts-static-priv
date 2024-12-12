//// [tests/cases/compiler/jsFileCompilationClassContainingStaticPrivateMembers.ts] ////

//// [a.js]
class c {
    static #privateStaticProp = 'Should be removed for JS declaration generation.';
    static #privateStaticFn() { return 'Should be removed for JS declaration generation.'; }
}


//// [out.js]
var _a, _c_privateStaticProp, _c_privateStaticFn;
class c {
}
_a = c, _c_privateStaticFn = function _c_privateStaticFn() { return 'Should be removed for JS declaration generation.'; };
_c_privateStaticProp = { value: 'Should be removed for JS declaration generation.' };


//// [out.d.ts]
declare class c {
    #private;
}
