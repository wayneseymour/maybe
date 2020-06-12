import { fromNullable } from '../src';


describe(`maybe algebraic datatype functions`, () => {
	describe(`helpers`, () => {
		it(`'fromNullable' should be a fn`, () => {
			expect(typeof fromNullable).toBe('function');
		});
	});
	describe(`'fromNullable`, () => {
		it(`should continue processing if a truthy is calculated`, () => {
            // console.log(`\n### attempt({detail: 'x'}).value(): \n\t${attempt({detail: 'x'}).value()}`);
            expect(attempt({detail: 'x'}).value()).toBe('x')
		});
		it(`should drop processing if a falsey is calculated`, () => {
		    const obj = {
		        a: 'abc'
            };
            expect(fromNullable(obj.b).inspect()).toBe('[Nothing]')
        });
	});
});
const pluck = x => obj => obj[x];
const attempt = obj =>
	fromNullable(obj)
		.map(pluck('detail'));
