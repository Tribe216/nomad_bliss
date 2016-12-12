import React from 'react';

class Results extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let boxes = [];

    if (this.props.results.length > 0) {

      this.props.results.forEach( (result, idx) => {

        boxes.push(
          <li>
            <article className='result-box'>
              Name: {result.city_name}<br />
              Rating: {result.scores.overall}<br />
            </article>
          </li>
        );
      });
    } else {
      boxes.push(
        <li>
          <article className='result-box'>
            No Results
          </article>
        </li>
      );
    }

    return (
      <section className="result-section">
        { boxes }
      </section>
    );
  }
}


export default Results;
