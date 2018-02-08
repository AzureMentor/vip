// @flow

const fs = require( 'fs' );

/**
 * internal dependencies
 */
import type { Keychain } from './keychain';

module.exports = class Secure implements Keychain {
	file: string;

	constructor( file: string ) {
		this.file = file;
	}

	getPassword( service: string ): Promise<string> {
		return new Promise( resolve => {
			fs.readFile( this.file, 'utf8', ( err, password ) => resolve( password ) );
		} );
	}

	setPassword( service: string, password: string ): Promise<boolean> {
		return new Promise( resolve => {
			fs.writeFile( this.file, password, err => resolve( ! err ) );
		} );
	}

	deletePassword( service: string ): Promise<boolean> {
		return new Promise( resolve => {
			fs.unlink( this.file, err => resolve( ! err ) );
		} );
	}
};
