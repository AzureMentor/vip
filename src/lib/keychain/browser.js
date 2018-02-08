// @flow

/**
 * internal dependencies
 */
import type { Keychain } from './keychain';

module.exports = class Secure implements Keychain {
	getPassword( service: string ): Promise<string> {
		return window.localStorage.getItem( service );
	}

	setPassword( service: string, password: string ): Promise<boolean> {
		return window.localStorage.setItem( service, password );
	}

	deletePassword( service: string ): Promise<boolean> {
		return window.localStorage.removeItem( service );
	}
};
