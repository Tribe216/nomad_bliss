import React from 'react';
import DetailScoreBarSection from './detail_score_bar_section';
import DetailTagsSection from './detail_tags_section';

class DetailAggregate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return   (
      <section className='detail-aggregate'>
        <h1 className='detail-bars-header'>Scores</h1>
        <DetailScoreBarSection scores={this.props.cityDetails.scores} />
        <DetailTagsSection tags={this.props.cityDetails.tags} />
      </section>
    );
  }
}

export default DetailAggregate;
