interface ILaunchOptions {
  location: string;
  BASEURL: string;
}

interface ITVApp {
  onLaunch(options: ILaunchOptions): Promise<void>;
  onWillResignActive(): void;
  onDidEnterBackground(): void;
  onWillEnterForeground(): void;
  onDidBecomeActive(): void;
  onWillTerminate(): void;
}

declare var App: ITVApp;

interface INavigationDocument {
  /**
   * The documents currently on the stack.
   */
  readonly documents: Document[];
  /**
   * Removes all documents currently on the stack.
   */
  clear(): void;
  /**
   * Dismisses the document displayed in modal view.
   */
  dismissModal(): void;
  /**
   * Inserts a new document directly before a document currently on the stack.
   * @param document The DOM document that is to be added onto the stack.
   * @param beforeDocument A DOM document currently on the stack. The new document is placed on the stack directly after this document.
   */
  insertBeforeDocument(document: Document, beforeDocument: Document): void;
  /**
   * Removes the top most document from the stack.
   */
  popDocument(): void;
  /**
   * Removes all of the documents on the stack that are above the passed document.
   * @param document A DOM document created by parsing a TVML file.
   */
  popToDocument(document: Document): void;
  /**
   * Removes all documents from the stack except for the bottom-most document, which is the root document.
   */
  popToRootDocument(): void;
  /**
   * A DOM document created by parsing a TVML file.
   * @param document A DOM document created by parsing a TVML file.
   */
  presentModal(document: Document): void;
  /**
   * Pushes the specified document onto the stack
   * @param document The DOM document that is to be added onto the stack.
   */
  pushDocument(document: Document): void;
  /**
   * Removes the specified document from the stack.
   * @param document A DOM document created by parsing a TVML file.
   */
  removeDocument(document: Document): void;
  /**
   * Replaces a document on the stack with a new document.
   * @param document The DOM document that is to be added onto the stack.
   * @param oldDocument The DOM document that is being replaced.
   */
  replaceDocument(document: Document,oldDocument: Document): void;
}

/**
 * A document stack that holds the individual TVML documents for a client-server app.
 */
declare var navigationDocument: INavigationDocument;
