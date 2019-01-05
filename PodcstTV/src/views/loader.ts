import { TView } from '../types';
import DOM from '../utils/dom';

interface ILoaderProps {
  title: string;
}

const view = ({ title }: ILoaderProps) => `
  <?xml version="1.0" encoding="UTF-8" ?>
  <document>
      <loadingTemplate>
          <activityIndicator>
              <title>${title}</title>
          </activityIndicator>
      </loadingTemplate>
  </document>
`;

const Loader: TView<ILoaderProps> = (props) => {
  return DOM.render(view(props));
};

export default Loader;
