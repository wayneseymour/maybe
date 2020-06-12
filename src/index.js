
/* eslint new-cap: 0 */
/* eslint no-unused-vars: 0 */

export function Just(x) {
    return {
        value: () => x,
        map: (f) => Maybe.of(f(x)),
        isJust: () => true,
        inspect: () => `Just(${x})`,
    };
}
Just.of = function of(x) {
    return Just(x);
};
export function just(x) {
    return Just.of(x);
}

export function Maybe(x) {
    return {
        chain: (f) => f(x),
        map: (f) => Maybe(f(x)),
        inspect: () => `Maybe(${x})`,
        nothing: () => Nothing(),
        isNothing: () => false,
        isJust: () => false,
    };
}
Maybe.of = function of(x) {
    return just(x);
};

export function maybe(x) {
    return Maybe.of(x);
}
export function fromNullable(x) {
    return x !== null && x !== undefined && x !== false && x !== 'undefined' ? just(x) : nothing();
}

export function Nothing() {
    return {
        value: () => {
            throw new TypeError(`Nothing algebraic data type returns...no value :)`);
        },
        map: (f) => {},
        isNothing: () => true,
        inspect: () => `[Nothing]`,
    };
}
export function nothing() {
    return Nothing();
}
