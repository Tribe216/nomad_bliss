import React from 'react';
import update from 'immutability-helper';
import { merge } from 'lodash';

const filterButton = (name, min, max) => {
  return (
    <button className="filter-metric-button"></button>
  );
};



class Filters extends React.Component {

  constructor(props) {
    super(props);

    this.state= {
      searchFilters: {
        metrics: {},
        weather: {},
        tags: []
      }
    };

    this.toggleWeatherMonth = this.toggleWeatherMonth.bind(this);
    this.toggleMetric = this.toggleMetric.bind(this);
  }

  componentDidMount() {
    this.props.updateSearchResults(this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    this.props.updateSearchResults(this.state);
  }

  toggleMetric(metricData) {

  }

  toggleTag(tagName) {

  }

  toggleWeatherMonth(monthCode) {
    let newFilters = merge({}, this.state.searchFilters);

    const currentMonth = this.state.searchFilters.weather.month;
    if (monthCode === currentMonth) {
      delete newFilters.weather['month'];
    } else {
      newFilters.weather['month'] = monthCode;
    }

    this.setState({ searchFilters: newFilters });
  }

  toggleMetric(metric) {
    let newFilters = merge({}, this.state.searchFilters);

    if(newFilters.metrics[metric.name] &&
       newFilters.metrics[metric.name].min === metric.min &&
       newFilters.metrics[metric.name].max === metric.max
    ) {
      delete newFilters.metrics[metric.name];
    } else {
      newFilters.metrics[metric.name] = {};
      if (metric.min !== undefined) {
        newFilters.metrics[metric.name]['min'] = metric.min;
      }

      if (metric.max !== undefined) {
        newFilters.metrics[metric.name]['max'] = metric.max;
      }

    }

    this.setState({ searchFilters: newFilters });
  }

  toggleWeatherRange(range) {

    let newFilters = merge({}, this.state.searchFilters);
    if ( newFilters.weather['min'] === range['min'] &&
         newFilters.weather['max'] === range['max']) {
      delete newFilters.weather['min'];
      delete newFilters.weather['max'];
    } else {
        newFilters.weather['min'] = range['min'];
        newFilters.weather['max'] = range['max'];
    }

    this.setState({ searchFilters: newFilters });
  }

  weatherMonthButtons() {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const buttons = [];

    monthNames.forEach( (monthAbbr, idx) => {
      buttons.push(<li>
        <button className="month-button" key={monthAbbr} onClick={ this.toggleWeatherMonth.bind(this, idx) }>
          {monthAbbr}
        </button>
      </li>);
    });

    return (
      <ul className="month-button-list">{buttons}</ul>
    );
  }

  weatherRangeButtons() {
    const ranges = [
      {
        label: "Cold",
        max: 10
      },
      {
        label: "Cool",
        min: 10.01,
        max: 15
      },
      {
        label: "Warm",
        min: 15.01,
        max: 25
      },
      {
        label: "Hot",
        min: 25.01
      }
    ];

    const buttons = [];

    ranges.forEach( (range, idx) => {
      buttons.push(<li>
        <button key={range.label} onClick={ this.toggleWeatherRange.bind(this, range) }>
          { range.label }
        </button>
      </li>);
    });

    return (
      <ul>{buttons}</ul>
    );
  }

  metricButtons() {
    const metrics = [
      {
        name: "overall",
        label: "Good Reviews",
        min: 6
      },
      {
        name: "cost_of_living",
        label: "Cheap",
        max: 6
      },
      {
        name: "internet",
        label: "Good Internet",
        min: 6
      },
      {
        name: "fun",
        label: "Fun",
        min: 6
      },
      {
        name: "fun",
        label: "Boring",
        max: 5
      }
    ];

    const buttons = [];

    metrics.forEach( (metric, idx) => {
      buttons.push(<li>
        <button key={metric.label} onClick={ this.toggleMetric.bind(this, metric) }>
          { metric.label }
        </button>
      </li>);
    });

    return (
      <ul>{buttons}</ul>
    );
  }


  render() {
    return (
      <div>
        { JSON.stringify(this.state) }
        { this.weatherMonthButtons() }
        { this.weatherRangeButtons() }
        { this.metricButtons() }
        <br />
        <button onClick={ this.props.updateSearchResults.bind(this, this.state) }> UPDATE </button>
      </div>
    );
  }
}

export default Filters;
