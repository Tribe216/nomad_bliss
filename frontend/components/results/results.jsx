import React from 'react';
import ResultsBox from './results_box';
import Modal from 'react-modal';
import customStyles from '../modal_style';
import DetailContainer from '../detail/detail_container';

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

  render() {
    let boxes = [];

    if (this.props.results.length > 0) {

      this.props.results.forEach( (result, idx) => {

        boxes.push(
          <ResultsBox key={idx} fake={false} result={result} rank={idx+1} openDetail={this.openModal} updateCityDetail={this.props.updateCityDetail} />
        );
      });

      boxes.push(<ResultsBox fake={true} />);
    } else {
      boxes.push(
          <div>No Results</div>
      );
    }

    return (
      <section className="results-section">
        { boxes }
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


      </section>

    );
  }
}


export default Results;
