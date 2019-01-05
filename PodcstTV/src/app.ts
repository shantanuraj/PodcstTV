//# sourceURL=application.ts

//
//  application.js
//  PodcstTV
//
//  Created by Shantanu Raj on 05/01/19.
//  Copyright © 2019 Shantanu Raj. All rights reserved.
//

import fetch from './utils/fetch';
import DOM from './utils/dom';
import Loader from './views/loader';

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
App.onLaunch = async function(options) {
  const loader = Loader({ title: 'ATV' });
  DOM.render(loader);
  const title = await fetch(`${options.BASEURL}/text`)
    .then(res => res.text());
  const meloader = Loader({ title });
    DOM.render(meloader);
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
