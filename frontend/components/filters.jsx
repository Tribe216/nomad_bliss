import React from 'react';
import update from 'immutability-helper';
import { merge } from 'lodash';

const filterButton = (name, min, max) => {
  return (
    <button className="filter-metric-button"></button>
  );
};

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

class Filters extends React.Component {

  constructor(props) {
    super(props);

    this.state= {
      searchFilters: {
        metrics: {},
        weather: {},
        tags: []
      },
      activeFilters: []
    };

    this.monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    this.weatherRanges = [
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

    this.toggleWeatherMonth = this.toggleWeatherMonth.bind(this);
    this.toggleMetric = this.toggleMetric.bind(this);
    this.setWeatherMonth = this.setWeatherMonth.bind(this);
    this.setActive = this.setActive.bind(this);

  }

  setWeatherMonth(newMonth=null) {
    let actives = merge([], this.state.activeFilters);
    actives.remove(...this.monthNames);

    if (newMonth) {
      actives.push(newMonth);
    }

    this.setState({ activeFilters: actives });

  }

  setWeatherTemp(newTemp=null) {
    let actives = merge([], this.state.activeFilters);


    let allRanges = this.weatherRanges.map( (range) => {
      return range.label;
    });

    actives.remove(...allRanges);

    if (newTemp) {
      actives.push(newTemp);
    }

    this.setState({ activeFilters: actives });
  }

  setActive(buttonLabel) {
    let actives = merge([], this.state.activeFilters);

    if (actives.includes(buttonLabel)) {
      actives.remove(buttonLabel);
    } else {
      actives.push(buttonLabel);
    }

    this.setState({ activeFilters: actives });
  }

  componentWillMount() {
    this.props.updateTags();
  }

  componentDidMount() {
    this.props.updateSearchResults(this.state.searchFilters);

  }

  componentDidUpdate(prevProps, prevState) {
    this.props.updateSearchResults(this.state.searchFilters);
  }

  toggleTag(tagName) {
    let newFilters = merge({}, this.state.searchFilters);
    if (newFilters.tags.includes(tagName)) {
      newFilters.tags.remove(tagName);
    } else {
      newFilters.tags.push(tagName);
    }

    this.setActive(tagName);
    this.setState({ searchFilters: newFilters });
  }

  toggleWeatherMonth(monthAbbr, monthCode) {
    let newFilters = merge({}, this.state.searchFilters);


    const currentMonth = this.state.searchFilters.weather.month;
    if (monthCode === currentMonth) {
      delete newFilters.weather['month'];
      this.setWeatherMonth();
    } else {
      newFilters.weather['month'] = monthCode;
      this.setWeatherMonth(monthAbbr);
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

    this.setActive(metric.label);
    this.setState({ searchFilters: newFilters });
  }

  toggleWeatherRange(range) {

    let newFilters = merge({}, this.state.searchFilters);
    if ( newFilters.weather['min'] === range['min'] &&
         newFilters.weather['max'] === range['max']) {
      delete newFilters.weather['min'];
      delete newFilters.weather['max'];
      this.setWeatherTemp();
    } else {
        newFilters.weather['min'] = range['min'];
        newFilters.weather['max'] = range['max'];
        this.setWeatherTemp(range.label);
    }

    this.setState({ searchFilters: newFilters });
  }

  weatherMonthButtons() {
    const buttons = [];

    this.monthNames.forEach( (monthAbbr, idx) => {
      let _className = this.state.activeFilters.includes(monthAbbr) ?
        "month-button active" : "month-button";

      buttons.push(
        <button className={_className} key={monthAbbr} onClick={ this.toggleWeatherMonth.bind(this, monthAbbr, idx) }>
          {monthAbbr}
        </button>
      );
    });

    return (
      <span className="button-box month-button-list">{buttons}</span>
    );
  }

  weatherRangeButtons() {
    const buttons = [];

    this.weatherRanges.forEach( (range, idx) => {
      let _className = this.state.activeFilters.includes(range.label) ?
        "weather-range-button active" : "weather-range-button";

      buttons.push(
        <button className={_className} key={range.label} onClick={ this.toggleWeatherRange.bind(this, range) }>
          { range.label }
        </button>
      );
    });

    return (
      <span className="button-box group">{buttons}</span>
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
      let _className = this.state.activeFilters.includes(metric.label) ?
        "metric-button active" : "metric-button ";

      buttons.push(
          <span className="button-box group"><button className={_className} key={metric.label} onClick={ this.toggleMetric.bind(this, metric) }>
          { metric.label }
        </button></span>

      );
    });

    return (
      <div>{buttons}</div>
    );
  }

  tagButtons() {

    const buttons = [];
    if (this.props.tags) {
      this.props.tags.forEach( (tagName, idx) => {
        let _className = this.state.activeFilters.includes(tagName) ?
          "tag-button active" : "tag-button ";

        buttons.push(
            <span className="button-box group"><button key={tagName} className={_className} onClick={ this.toggleTag.bind(this, tagName) }>
            { tagName }
          </button></span>
        );
      });
    }

    return (
      <div>{buttons}</div>
    );
  }


  render() {
    // { JSON.stringify(this.state) }
    return (
      <nav className="filter-nav">

        { this.weatherMonthButtons() }
        { this.weatherRangeButtons() }
        { this.metricButtons() }
        { this.tagButtons() }
        <br />
        <button onClick={ this.props.updateSearchResults.bind(this, this.state) }> UPDATE </button>
      </nav>
    );
  }
}

export default Filters;
