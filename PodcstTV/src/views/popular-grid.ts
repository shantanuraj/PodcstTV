import { IPodcast, TView } from '../types';
import { chunkN, dropN, topN } from '../utils/data';
import DOM from '../utils/dom';

interface IPopularGridProps {
  podcasts: IPodcast[];
}

const renderPodcast = ({ cover, title }: IPodcast) => {
  return (`
    <lockup>
      <img src="${cover}" width="300" height="300" />
      <title>${title}</title>
    </lockup>
  `).trim();
}

const renderPodcasts = (podcasts: IPodcast[]) => {
  return (`
    <section>
      ${podcasts.map(renderPodcast).join('\n')}
    </section>
  `).trim();
}

const renderChunk = (podcasts: IPodcast[]) => {
  return (`
    <shelf>
      ${renderPodcasts(podcasts)}
    </shelf>
  `).trim();
}

const renderChunks = (chunkedPodcasts: IPodcast[][]) => {
  return chunkedPodcasts.map(renderChunk).join('\n');
}

const view = ({ podcasts }: IPopularGridProps) => {
  const top10Podcasts = topN(10)(podcasts);
  const restPodcasts = dropN(10)(podcasts);
  const chunkedPodcasts = chunkN(10)(restPodcasts);
  return (
    `
    <?xml version="1.0" encoding="UTF-8" ?>
    <document>
    <stackTemplate>
        <banner>
          <title>Popular</title>
        </banner>
        <collectionList>
          <shelf>
              <section>
                ${renderPodcasts(top10Podcasts)}
              </section>
          </shelf>
          ${renderChunks(chunkedPodcasts)}
        </collectionList>
    </stackTemplate>
    </document>
  `
  );
}

const PopularGrid: TView<IPopularGridProps> = (props) => {
  return DOM.renderDoc(view(props));
};

export default PopularGrid;
