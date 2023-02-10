import { readFileSync } from 'fs';
import { execSync } from 'child_process';
import {
    generateBanner,
    getFirstCommitYear,
    rollupConfigBasicLib
} from '@0bdx/build-helpers';

export default rollupConfigBasicLib(
    'dev-server.js',
    generateBanner(
        new Date(),
        readFileSync('./package.json', 'utf-8'),
        getFirstCommitYear(execSync),
        true,
    ),
);
