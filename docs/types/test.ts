/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import reduceRightAsync = require( './index' );

const reducer = ( acc: any, value: number, index: number, next: Function ) => {
	acc.sum += value;
	if ( index === void 0 ) {
		throw new Error( '`index` is missing.' );
	}
	next( null, acc );
};

const done = ( error: Error | null, acc: any ) => {
	if ( error ) {
		throw error;
	}
	if ( acc === void 0 ) {
		throw new Error( '`acc` is missing.' );
	}
};


// TESTS //

// The function returns void...
{
	const acc = { 'sum': 0 };
	reduceRightAsync( [ 3000, 2500, 1000 ], acc, reducer, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	const acc = { 'sum': 0 };
	reduceRightAsync( 2, acc, reducer, done ); // $ExpectError
	reduceRightAsync( false, acc, reducer, done ); // $ExpectError
	reduceRightAsync( true, acc, reducer, done ); // $ExpectError
	reduceRightAsync( {}, acc, reducer, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a predicate argument which is not a predicate function...
{
	const acc = { 'sum': 0 };
	reduceRightAsync( [ 3000, 2500, 1000 ], acc, 2, done ); // $ExpectError
	reduceRightAsync( [ 3000, 2500, 1000 ], acc, false, done ); // $ExpectError
	reduceRightAsync( [ 3000, 2500, 1000 ], acc, true, done ); // $ExpectError
	reduceRightAsync( [ 3000, 2500, 1000 ], acc, 'abc', done ); // $ExpectError
	reduceRightAsync( [ 3000, 2500, 1000 ], acc, {}, done ); // $ExpectError
	reduceRightAsync( [ 3000, 2500, 1000 ], acc, [], done ); // $ExpectError
}

// The compiler throws an error if the function is provided a done callback argument which is not a function having a supported signature...
{
	const acc = { 'sum': 0 };
	reduceRightAsync( [ 3000, 2500, 1000 ], acc, reducer, 2 ); // $ExpectError
	reduceRightAsync( [ 3000, 2500, 1000 ], acc, reducer, false ); // $ExpectError
	reduceRightAsync( [ 3000, 2500, 1000 ], acc, reducer, true ); // $ExpectError
	reduceRightAsync( [ 3000, 2500, 1000 ], acc, reducer, 'abc' ); // $ExpectError
	reduceRightAsync( [ 3000, 2500, 1000 ], acc, reducer, {} ); // $ExpectError
	reduceRightAsync( [ 3000, 2500, 1000 ], acc, reducer, [] ); // $ExpectError
	reduceRightAsync( [ 3000, 2500, 1000 ], acc, reducer, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	const acc = { 'sum': 0 };
	reduceRightAsync(); // $ExpectError
	reduceRightAsync( [ 3000, 2500, 1000 ] ); // $ExpectError
	reduceRightAsync( [ 3000, 2500, 1000 ], acc ); // $ExpectError
	reduceRightAsync( [ 3000, 2500, 1000 ], acc, reducer ); // $ExpectError
	reduceRightAsync( [ 3000, 2500, 1000 ], acc, {}, reducer, done, {} ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	reduceRightAsync.factory( reducer ); // $ExpectType FactoryFunction<number, any>
	reduceRightAsync.factory( { 'series': true }, reducer ); // $ExpectType FactoryFunction<number, any>
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	reduceRightAsync.factory( [], reducer ); // $ExpectError
	reduceRightAsync.factory( 123, reducer ); // $ExpectError
	reduceRightAsync.factory( 'abc', reducer ); // $ExpectError
	reduceRightAsync.factory( false, reducer ); // $ExpectError
	reduceRightAsync.factory( true, reducer ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a last argument which is not a predicate function...
{
	reduceRightAsync.factory( {} ); // $ExpectError
	reduceRightAsync.factory( true ); // $ExpectError
	reduceRightAsync.factory( false ); // $ExpectError
	reduceRightAsync.factory( {}, 123 ); // $ExpectError
	reduceRightAsync.factory( {}, 'abc' ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const acc = { 'sum': 0 };
	const fcn1 = reduceRightAsync.factory( reducer );
	fcn1( 12, acc, done ); // $ExpectError
	fcn1( true, acc, done ); // $ExpectError
	fcn1( false, acc, done ); // $ExpectError
	fcn1( {}, acc, done ); // $ExpectError

	fcn1( [ 3000, 2500, 1000 ], acc, 12 ); // $ExpectError
	fcn1( [ 3000, 2500, 1000 ], acc, true ); // $ExpectError
	fcn1( [ 3000, 2500, 1000 ], acc, false ); // $ExpectError
	fcn1( [ 3000, 2500, 1000 ], acc, '5' ); // $ExpectError
	fcn1( [ 3000, 2500, 1000 ], acc, {} ); // $ExpectError
	fcn1( [ 3000, 2500, 1000 ], acc, [] ); // $ExpectError
	fcn1( [ 3000, 2500, 1000 ], acc, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const acc = { 'sum': 0 };
	const fcn1 = reduceRightAsync.factory( reducer );
	fcn1(); // $ExpectError
	fcn1( [ 3000, 2500, 1000 ] ); // $ExpectError
	fcn1( [ 3000, 2500, 1000 ], acc ); // $ExpectError
	fcn1( [ 3000, 2500, 1000 ], acc, done, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `limit` option which is not a number...
{
	reduceRightAsync.factory( { 'limit': '12' }, reducer ); // $ExpectError
	reduceRightAsync.factory( { 'limit': true }, reducer ); // $ExpectError
	reduceRightAsync.factory( { 'limit': false }, reducer ); // $ExpectError
	reduceRightAsync.factory( { 'limit': {} }, reducer ); // $ExpectError
	reduceRightAsync.factory( { 'limit': [] }, reducer ); // $ExpectError
	reduceRightAsync.factory( { 'limit': ( x: number ): number => x }, reducer ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `series` option which is not a boolean...
{
	reduceRightAsync.factory( { 'series': '12' }, reducer ); // $ExpectError
	reduceRightAsync.factory( { 'series': 12 }, reducer ); // $ExpectError
	reduceRightAsync.factory( { 'series': {} }, reducer ); // $ExpectError
	reduceRightAsync.factory( { 'series': [] }, reducer ); // $ExpectError
	reduceRightAsync.factory( { 'series': ( x: number ): number => x }, reducer ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an invalid number of arguments...
{
	reduceRightAsync.factory(); // $ExpectError
	reduceRightAsync.factory( {}, reducer, {} ); // $ExpectError
}
