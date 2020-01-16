import { generateInterfaceRegistry } from '@polkadot/types/scripts/generateTypes/interfaceRegistry';
import { generateTsDef } from '@polkadot/types/scripts/generateTypes/tsDef';
import * as defaultDefinations from '@polkadot/types/interfaces/definitions';

import * as ormlDefinations from '@orml/types/interfaces/definitions';

import * as laminarDefinations from '../src/interfaces/definitions';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { runtime, deprecated, ...substrateDefinations } = defaultDefinations;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { runtime: _runtime, ...ormlModulesDefinations } = ormlDefinations;

const definations = {
  '@polkadot/types/interfaces': substrateDefinations,
  '@orml/types/interfaces': ormlModulesDefinations,
  '@laminar/types/interfaces': laminarDefinations
};

generateTsDef(definations, 'packages/types/src/interfaces', '@laminar/types/interfaces');
generateInterfaceRegistry(definations, 'packages/types/src/interfaceRegistry.ts');
