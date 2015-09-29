'use strict';

function toTitleCase(input) {
	return input.replace(/\b\w+/g, function (s) {
		return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase();
	});
}

angular.module('marcusFilters', [])
	.filter('reverse', function () {
		return function (input) {
			var i, out;

			if (angular.isString(input)) {
				out = '';
				for (i = 0; i < input.length; i++) {
					out = input.charAt(i) + out;
				}
				return out;
			} else {
				return input;
			}
		};
	})
	.filter('titleCase', function () {
		return function (input) {

			if (angular.isString(input)) {
				return toTitleCase(input);
			}

			return input;
		};
	})
	.filter('uniqueStringArray', function () {
		return function (array) {

			if (angular.isArray(array)) {
				array = array.filter(function (item, index, inputArray) {
					return inputArray.indexOf(item) === index;
				});
			}

			return array;
		};
	});