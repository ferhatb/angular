/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {$, ExpectedConditions, browser, by, element} from 'protractor';
import {verifyNoBrowserErrors} from '../../../../../_common/e2e_util';

function waitForElement(selector: string) {
  var EC = ExpectedConditions;
  // Waits for the element with id 'abc' to be present on the dom.
  browser.wait(EC.presenceOf($(selector)), 20000);
}

describe('animation example', () => {
  afterEach(verifyNoBrowserErrors);

  describe('index view', () => {
    var URL = '/core/animation/ts/dsl/';

    it('should list out the current collection of items', () => {
      browser.get(URL);
      waitForElement('.toggle-container');
      expect(element.all(by.css('.toggle-container')).get(0).getText()).toEqual('Look at this box');
    });
  });
});
