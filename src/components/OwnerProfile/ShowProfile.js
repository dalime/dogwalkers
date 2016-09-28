import React , { Component } from 'react'
import { connect } from 'react-redux';
import { getProfile, removeWalker } from '../../actions/OwnerActions';
import { TextField, RaisedButton } from 'material-ui';


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
          <div className="col-xs-12 text-center">
            <RaisedButton
            label="Fire"
            labelPosition="before"
            className='editBtn'
            onClick={this._fire}/>
          </div>
        </div>
      )
    }

    return (
      <div className="col-xs-12 col-md-6 col-md-offset-3 text-center">
        <div className="profileFrame">
          <img src={image} className='profileImg'/>
          <div className="walkerProfText">
            <p className='profContent'>Name: {name}</p>
            <p className='profContent'>Phone Number: {phone}</p>
            <p className='profContent'>Location: {location}</p>
            {Walker}
          </div>
        </div>
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
