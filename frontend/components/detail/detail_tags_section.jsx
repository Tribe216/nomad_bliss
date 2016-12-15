import React from 'react';
import { barData } from '../../util/helpers.js';

class DetailTagsSection extends React.Component {
  constructor(props) {
    super(props);
    this.generateTags = this.generateTags.bind(this);
  }

  generateTags() {
    return this.props.tags.map( (tagText) => {
      return (
        <span className="detail-tag">{tagText}</span>
      );
    });
  }

  render() {
    return (
      <span className='detail-tags'>
      { this.generateTags() }
      </span>
    );

  }
}

export default DetailTagsSection;
