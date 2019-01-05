import { App, TView } from '../types';
import DOM from '../utils/dom';

interface IPopularGridProps {
  podcasts: App.IPodcast[];
}

const renderPodcast = ({ cover, title }: App.IPodcast) => `
  <lockup>
    <img src="${cover}" width="300" height="300" />
    <title>${title}</title>
  </lockup>
`.trim();

const renderPodcasts = (podcasts: App.IPodcast[]) => {
  const chunk = podcasts.slice(0, 10);
  return chunk.map(renderPodcast).join('\n');
}

const view = ({ podcasts }: IPopularGridProps) => `
  <?xml version="1.0" encoding="UTF-8" ?>
  <document>
   <stackTemplate>
      <banner>
         <title>Popular</title>
      </banner>
      <collectionList>
         <shelf>
            <section>
               ${renderPodcasts(podcasts)}
            </section>
         </shelf>
      </collectionList>
   </stackTemplate>
  </document>
`;

const PopularGrid: TView<IPopularGridProps> = (props) => {
  return DOM.renderDoc(view(props));
};

export default PopularGrid;
