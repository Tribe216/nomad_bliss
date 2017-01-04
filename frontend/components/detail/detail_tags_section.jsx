import React from 'react';
import { barData } from '../../util/helpers.js';

class DetailTagsSection extends React.Component {
  constructor(props) {
    super(props);
    this.generateTags = this.generateTags.bind(this);
  }

  generateTags() {
    return this.props.tags.map( (tagText, i) => {
      return (
        <span key={i} className="detail-tag">{tagText}</span>
      );
    });
  }

  render() {
    return (
      <section>
        <h1 className='detail-tags-header'>Tags</h1>
        <span className='detail-tags'>
          { this.generateTags() }
        </span>
      </section>
    );

  }
}

export default DetailTagsSection;
