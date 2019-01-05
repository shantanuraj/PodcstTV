interface ITVApp {
  onLaunch(options: {}): Promise<void>;
  onWillResignActive(): void;
  onDidEnterBackground(): void;
  onWillEnterForeground(): void;
  onDidBecomeActive(): void;
  onWillTerminate(): void;
}

declare var App: ITVApp;

interface INavigationDocument {
  pushDocument(doc: Document): void;
}

declare var navigationDocument: INavigationDocument;
