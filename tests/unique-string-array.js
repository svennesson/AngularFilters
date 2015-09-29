'use strict';

describe('Unique string array filter', function () {
	beforeEach(module('marcusFilters'));

	it('Removes duplicates in string array', function () {
		inject(function (uniqueStringArrayFilter) {
			expect(uniqueStringArrayFilter(['Marcus', 'Jimmy', 'Patrik', 'Marcus', 'Marcus', 'Jimmy']))
				.toEqual(['Marcus', 'Jimmy', 'Patrik']);
			expect(uniqueStringArrayFilter(['Marcus', 'Jimmy', 'Patrik', 'Marcus', 'Marcus', 'Jimmy'])).not
				.toEqual(['Marcus', 'Jimmy', 'Patrik', 'Marcus', 'Marcus', 'Jimmy']);
		});
	});
});