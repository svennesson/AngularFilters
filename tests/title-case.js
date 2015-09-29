'use strict';

describe('Title case filter', function () {
	beforeEach(module('marcusFilters'));

	it('Puts title case on every word in a string', function () {
		inject(function (titleCaseFilter) {
			expect(titleCaseFilter('hej marcus')).toEqual('Hej Marcus');
			expect(titleCaseFilter('hej marcus-svensSON')).toEqual('Hej Marcus-Svensson');
			expect(titleCaseFilter('hEJ d-i-t-t cP')).toEqual('Hej D-I-T-T Cp');
		});
	});
});