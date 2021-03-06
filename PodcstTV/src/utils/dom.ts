const DOM = {
  parse(view: string): Document {
    const parser = new DOMParser();
    return parser.parseFromString(view.trim(), 'application/xml');
  },
}

export default DOM;
