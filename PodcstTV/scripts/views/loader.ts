import { TView } from '../types';

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
  const parser = new DOMParser();
  return parser.parseFromString(view(props), 'application/xml');
};

export default Loader;
