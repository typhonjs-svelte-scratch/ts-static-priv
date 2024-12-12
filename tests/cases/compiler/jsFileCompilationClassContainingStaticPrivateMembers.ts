// @allowJs: true
// @declaration: true
// @outFile: out.js
// @target: ES2020

// @FileName: a.js
class c {
    static #privateStaticProp = 'Should be removed for JS declaration generation.';
    static #privateStaticFn() { return 'Should be removed for JS declaration generation.'; }
}
