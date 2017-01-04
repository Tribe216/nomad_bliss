import React from 'react';
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
        tags: [],
        searchBar: ""
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

    this.costRanges = [
      {
        label: "$",
        max: 750
      },
      {
        label: "$$",
        max: 1500
      },
      {
        label: "$$$",
        max: 2500
      },
      {
        label: "$$$$",
        min: 2500.01
      }
    ];

    this.metrics = [
      {
        name: "overall",
        label: "Good Reviews",
        min: 6
      },
      {
        name: "internet",
        label: "Good Internet",
        min: 6
      },
      {
        name: "food_scene",
        label: "Good Food",
        min: 6
      },
      {
        name: "dryness",
        label: "Dry Weather",
        min: 6
      },
      {
        name: "outdoors",
        label: "Nature",
        min: 6
      },
      {
        name: "safety",
        label: "Safe",
        min: 6
      },
      {
        name: "lgbt",
        label: "LGBT Friendly",
        min: 6
      },
      {
        name: "coworking",
        label: "Co Working",
        min: 6
      },
      {
        name: "english",
        label: "Good English",
        min: 6
      },
      {
        name: "clean_air",
        label: "Clean Air",
        min: 6
      }
    ];

    this.toggleWeatherMonth = this.toggleWeatherMonth.bind(this);
    this.toggleMetric = this.toggleMetric.bind(this);
    this.toggleCostOfLiving = this.toggleCostOfLiving.bind(this);
    this.setWeatherMonth = this.setWeatherMonth.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
    this.setcostRange = this.setcostRange.bind(this);
    this.updateFromSearchBar = this.updateFromSearchBar.bind(this);
  }

  resetFilters() {
    this.setState({ searchFilters: {} });
    this.setState({ activeFilters: [] });
    this.props.updateSearchResults.bind(this, this.state);
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

  setcostRange(newRange=null) {
    let actives = merge([], this.state.activeFilters);

    let allRanges = this.costRanges.map( (range) => {
      return range.label;
    });

    actives.remove(...allRanges);

    if (newRange) {
      actives.push(newRange.label);
    }

    this.setState({ activeFilters: actives });
  }

  isActive(buttonLabel) {
    return this.state.activeFilters.includes(buttonLabel);
  }

  toggleActive(buttonLabel) {
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

  weatherMonthButtons() {
    const buttons = [];

    this.monthNames.forEach( (monthAbbr, idx) => {
      let _className = this.state.activeFilters.includes(monthAbbr) ?
        "filter-button weather-button active" : "weather-button filter-button";

      buttons.push(
        <button className={_className} key={idx} onClick={ this.toggleWeatherMonth.bind(this, monthAbbr, idx) }>
          {monthAbbr}
        </button>
      );
    });

    return (
      <span key='2' className="button-box month-box">{buttons}</span>
    );
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

  weatherRangeButtons() {
    const buttons = [];

    this.weatherRanges.forEach( (range, idx) => {
      let _className = this.state.activeFilters.includes(range.label) ?
        "temp-button filter-button active" : "temp-button filter-button";

      buttons.push(
        <button className={_className} key={range.label} onClick={ this.toggleWeatherRange.bind(this, range) }>
          { range.label }
        </button>
      );
    });

    return  [<span key='0' className="temp-box button-box group">{buttons}</span>];
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

  costOfLivingButtons() {
    const buttons = [];

    this.costRanges.forEach( (range, idx) => {
      let _className = this.state.activeFilters.includes(range.label) ?
        "cost-button filter-button active" : "cost-button filter-button";

      buttons.push(
        <button className={_className} key={range.label} onClick={ this.toggleCostOfLiving.bind(this, range) }>
          { range.label }
        </button>
      );
    });

    return  [<span key='1' className="cost-box button-box group">{buttons}</span>];
  }

  toggleCostOfLiving(range) {
    let newFilters = merge({}, this.state.searchFilters);
    // debugger
    if (this.state.activeFilters.includes(range.label)) {
      delete newFilters.metrics['cost_of_living'];
      this.setcostRange();
    } else {
      newFilters.metrics['cost_of_living'] = {};
      if (range.min) {
        newFilters.metrics['cost_of_living']['min'] = range.min;
      }

      if (range.max) {
        newFilters.metrics['cost_of_living']['max'] = range.max;
      }

      this.setcostRange(range);
    }

    this.setState({ searchFilters: newFilters });
  }

  metricButtons() {
    const buttons = [];

    this.metrics.forEach( (metric, idx) => {
      let _className = this.state.activeFilters.includes(metric.label) ?
        "filter-button active" : "filter-button ";

      buttons.push(
          <button className="filter-button" className={_className} key={metric.label} onClick={ this.toggleMetric.bind(this, metric) }>
          { metric.label }
        </button>

      );
    });

    return buttons;
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

    this.toggleActive(metric.label);
    this.setState({ searchFilters: newFilters });
  }

  tagButtons() {
    const buttons = [];
    if (this.props.tags) {
      this.props.tags.forEach( (tagName, idx) => {
        let _className = this.state.activeFilters.includes(tagName) ?
          "filter-button active" : "filter-button ";

        buttons.push(
            <button className="filter-button" key={tagName} className={_className} onClick={ this.toggleTag.bind(this, tagName) }>
            { tagName }
          </button>
        );
      });
    }

    return buttons;
  }

  searchBar() {
    const bgUrl = window.search_icon;
    const divStyle = {
      backgroundImage: 'url(' +  bgUrl  + ')'
    };

    return (
      <input
        type="text"
        className="filters-search-bar"
        style= {divStyle}
        onKeyUp={ this.updateFromSearchBar } />
    );
  }

  updateFromSearchBar(e) {
    let newFilters = merge({}, this.state.searchFilters);
    newFilters.searchBar = e.target.value;
    this.setState({ searchFilters: newFilters });
  }


  toggleTag(tagName) {
    let newFilters = merge({}, this.state.searchFilters);
    if (newFilters.tags.includes(tagName)) {
      newFilters.tags.remove(tagName);
    } else {
      newFilters.tags.push(tagName);
    }

    this.toggleActive(tagName);
    this.setState({ searchFilters: newFilters });
  }

  render() {
    // { JSON.stringify(this.state); }
    let aa = this.weatherRangeButtons();
    let bb = this.costOfLivingButtons();
    let cc = this.metricButtons();
    let dd = this.tagButtons();

    let lowButtons = aa.concat(bb).concat(cc).concat(dd);

    return (
      <nav className="filter-nav">
        { this.weatherMonthButtons() }
        <section className="below-months">
          { lowButtons }
        </section>
        { this.searchBar() }
      </nav>
    );
  }
}

export default Filters;
