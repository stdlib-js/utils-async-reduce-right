/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var EPS = require( '@stdlib/constants-float64-eps' );
var pkg = require( './../package.json' ).name;
var factory = require( './../lib/factory.js' );


// MAIN //

bench( pkg+':factory', function benchmark( b ) {
	var reduceRightAsync;
	var arr;
	var len;
	var i;

	function onItem( acc, v, i, clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			acc.sum += v;
			clbk( null, acc );
		}
	}
	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		arr[ i ] = EPS;
	}
	reduceRightAsync = factory( onItem );

	i = 0;
	b.tic();

	return next();

	function next( error ) {
		var acc;
		i += 1;
		if ( error ) {
			b.fail( 'should not return an error' );
		}
		if ( i <= b.iterations ) {
			arr[ 0 ] += 10.0;
			acc = {
				'sum': 0.0
			};
			return reduceRightAsync( arr, acc, next );
		}
		b.toc();
		b.pass( 'benchmark finished' );
		b.end();
	}
});
