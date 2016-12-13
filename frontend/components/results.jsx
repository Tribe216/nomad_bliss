import React from 'react';
import ResultsBox from './results_box';
class Results extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let boxes = [];

    if (this.props.results.length > 0) {

      this.props.results.forEach( (result, idx) => {

        boxes.push(
            <ResultsBox result={result} rank={idx+1} />
        );
      });
    } else {
      boxes.push(
          <article key='none' className='results-box'>
            No Results
          </article>
      );
    }

    return (
      <section className="results-section">
        { boxes }
      </section>
    );
  }
}


export default Results;
