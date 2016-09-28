import React , { Component } from 'react'
import { connect } from 'react-redux';
import { getProfile, removeWalker } from '../../actions/OwnerActions';

class ShowProfile extends Component {
  constructor(props) {
    super(props);

    this._fire = this._fire.bind(this);
  }

  componentWillMount() {
    this.props.getProfile();
  }

  _fire(e) {
    e.preventDefault();
    this.props.removeWalker(this.props.ownerId);
  }

  render() {
    let { name , image , phone, location, walker } = this.props.profile;
    let Walker = <div></div>
    if (walker) {
      Walker = (
        <div>
          <p>Walker: {walker.name}</p>
          <p>Walker Number: {walker.phone}</p>
          <button className="btn btn-danger" onClick={this._fire}>Fire</button>
        </div>
      )
    }

    return (
      <div>
        <img width="150px" src={image} alt="NO_IMAGE"/>
        <p>{name}</p>
        <p>{phone}</p>
        <p>{location}</p>
        {Walker}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ownerId: state.owner._id
})

const mapDispatchToProps = (dispatch) => ({
  removeWalker: (id) => dispatch(removeWalker(id)),
  getProfile: () => dispatch(getProfile())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowProfile)
