import React from 'react';

import DetailHeader from './detail_header';
import DetailScoreBarSection from './detail_score_bar_section';
import DetailTagsSection from './detail_tags_section'

class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='detail-modal'>
        <DetailHeader
          cityName={this.props.cityDetails.city_name}
          regionName={this.props.cityDetails.region_name}
          imageUrl={this.props.cityDetails.image_url}
        />
        <DetailScoreBarSection scores={this.props.cityDetails.scores} />
        <DetailTagsSection tags={this.props.cityDetails.tags} />
      </section>
    );

  }
}

export default Detail;
