import React from 'react';

class Results extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className='results-box'>      
        <img className='results-bg-image' src={window.city_bg} />
        <span className='results-header-ranked'>{this.props.rank}</span>
        <span className='results-header'>

          <span className='results-header-city'>{this.props.result.city_name}</span>
          <span className='results-header-region'>{this.props.result.region_name}</span>
        </span>
      </article>
    );
  }
}


export default Results;
