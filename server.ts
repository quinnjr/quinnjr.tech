import { join } from 'path';
import { readFileSync } from 'fs';
import { createWindow } from 'domino';
import 'zone.js/node';

const indexFile = join(process.cwd(), 'dist/quinnjr-tech/browser/index.html');
const template = readFileSync(indexFile).toString();
const win = createWindow(template);

// Pollyfills
(global as any).window = win;
(global as any).document = win.document;

import './server/main';
export * from './src/main.server';
