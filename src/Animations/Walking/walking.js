import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import { actionConstants } from '../../types/actionConstants';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import image0 from './images/walking0.jpg';
import image1 from './images/walking1.jpg';
import image2 from './images/walking2.jpg';
import image3 from './images/walking3.jpg';

class Walking extends React.Component{

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({
      type: actionConstants.WALKING_FIGURE_GET_IMG0,
      payload: { image0 },
    });
  }

  render() {
    return (
      <div>
        <img src={image0}/>
      </div>
    );
  }
}

Walking.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  walkingImages: state.walking.walkingImages,
});

export default connect(mapStateToProps)(Walking);
