//# sourceURL=application.ts

//
//  application.js
//  PodcstTV
//
//  Created by Shantanu Raj on 05/01/19.
//  Copyright © 2019 Shantanu Raj. All rights reserved.
//

/*
 * This file provides an example skeletal stub for the server-side implementation
 * of a TVML application.
 *
 * A javascript file such as this should be provided at the tvBootURL that is
 * configured in the AppDelegate of the TVML application. Note that  the various
 * javascript functions here are referenced by name in the AppDelegate. This skeletal
 * implementation shows the basic entry points that you will want to handle
 * application lifecycle events.
 */

/**
* This convenience funnction returns an alert template, which can be used to present errors to the user.
*/
const createLoader = function(title: string) {

  const loadingView = `<?xml version="1.0" encoding="UTF-8" ?>
      <document>
          <loadingTemplate>
              <activityIndicator>
                  <title>${title}</title>
              </activityIndicator>
          </loadingTemplate>
      </document>`;

  const parser = new DOMParser();
  const loadingDoc = parser.parseFromString(loadingView, "application/xml");

  return loadingDoc;
}

/**
 * @description The onLaunch callback is invoked after the application JavaScript
 * has been parsed into a JavaScript context. The handler is passed an object
 * that contains options passed in for launch. These options are defined in the
 * swift or objective-c client code. Options can be used to communicate to
 * your JavaScript code that data and as well as state information, like if the
 * the app is being launched in the background.
 *
 * The location attribute is automatically added to the object and represents
 * the URL that was used to retrieve the application JavaScript.
 */
App.onLaunch = async function(_options: {}) {
  const loader = createLoader("PodcstTV");
  navigationDocument.pushDocument(loader);
}


App.onWillResignActive = function() {

}

App.onDidEnterBackground = function() {

}

App.onWillEnterForeground = function() {

}

App.onDidBecomeActive = function() {

}

App.onWillTerminate = function() {

}
