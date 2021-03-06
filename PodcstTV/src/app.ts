//# sourceURL=application.ts

//
//  application.js
//  PodcstTV
//
//  Created by Shantanu Raj on 05/01/19.
//  Copyright © 2019 Shantanu Raj. All rights reserved.
//

import api from './utils/api';
import DOM from './utils/dom';
import Loader from './views/loader';
import PopularGrid from './views/popular-grid';

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
App.onLaunch = async function(_options) {
  const loader = Loader({ title: 'PodcstTV' });
  navigationDocument.pushDocument(loader);
  const podcasts = await api.top();
  const popularGrid = PopularGrid({ podcasts });
  navigationDocument.replaceDocument(popularGrid, loader);
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
