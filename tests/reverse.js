'use strict';

describe('The reverse filter', function () {
	beforeEach(module('marcusFilters'));

	it('reverses the order of characters', function () {
		inject(function (reverseFilter) {
			expect(reverseFilter('redrum')).toEqual('murder');
		});
	});

	it('Puts title case on every word in a string', function () {
		inject(function (titleCaseFilter) {
			expect(titleCaseFilter('hej marcus')).toEqual('Hej Marcus');
			expect(titleCaseFilter('hej marcus-svensSON ')).toEqual('Hej Marcus-Svensson');
		});
	});
});