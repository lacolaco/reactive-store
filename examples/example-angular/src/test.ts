// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { CommonModule } from '@angular/common';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { configure } from '@testing-library/angular';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting(), {
  teardown: {
    destroyAfterEach: true,
  },
});
configure({
  defaultImports: [CommonModule],
});

// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
