import React from 'react';

class DetailHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='detail-header'>
        <img className='detail-bg-image' src={window.city_bg} />
        <section className='detail-header-box'>
          <div className='detail-header-city'>{this.props.cityName}</div>
          <div className='detail-header-region'>{this.props.regionName}</div>
        </section>
      </header>
    );

  }
}

export default DetailHeader;
