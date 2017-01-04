import React from 'react';
import ResultsBox from './results_box';
import Modal from 'react-modal';
import customStyles from '../modal_style';
import DetailContainer from '../detail/detail_container';
import ResultsNone from './results_none';
class Results extends React.Component {

  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);

    this.state = {
      modalIsOpen: false,
      modalFormType: null
    };
  }

  componentDidMount() {
    $(window.setTimeout( () => $('.detail-bar-colored').css({"width":"100%"}), 1))
  }

  openModal()  {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  boxesOrEmpty() {
    if (this.props.results.length > 0) {
      const boxes = [];
      let maxId = 0;

      this.props.results.forEach( (result, idx) => {
        boxes.push(
          <ResultsBox
            key={idx}
            fake={false}
            result={result}
            rank={idx+1}
            openDetail={this.openModal} 
            updateCityDetail={this.props.updateCityDetail}
          />
        );

        maxId = idx + 1;
      });

      boxes.push(<ResultsBox key={maxId} fake={true} />);

      return (
        <section className="results-section">
          { boxes }
          </section>
      );
    } else {
      return (<ResultsNone />);
    }

  }

  render() {
    return (
      <div>

        { this.boxesOrEmpty() }
        <Modal
          animationType={"fade"}
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <DetailContainer closeModal={this.closeModal} />
        </Modal>
      </div>
    );
  }
}


export default Results;
