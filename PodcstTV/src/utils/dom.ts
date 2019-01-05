const DOM = {
  renderDoc(view: string): Document {
    const parser = new DOMParser();
    return parser.parseFromString(view.trim(), 'application/xml');
  },
  render(doc: Document) {
    navigationDocument.pushDocument(doc);
  },
}

export default DOM;
