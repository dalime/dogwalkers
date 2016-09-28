import axios from 'axios';
import RouteActions from './RouteActions';

export function receiveProfile(profile) {
  return {
    type: 'RECEIVE_PROFILE',
    payload: { profile }
  }
}

export function removeProfile() {
  return {
    type: 'REMOVE_PROFILE'
  }
}

export function register(owner) {
    axios.post('/api/owners/register', owner)
      .then(() => {
        RouteActions.route('/login');
      })
      .catch(console.error)
}

export function login (owner) {
  return dispatch => {
    axios.post('/api/owners/login', owner)
      .then(() => {
        dispatch(getProfile())
        RouteActions.route('/loginSuccess')
      })
      .catch(console.error)
  }
}

export function logout() {
  return dispatch => {
    axios.post('/api/owners/logout')
      .then(() => {
        RouteActions.route('/');
        dispatch(removeProfile());
      })
      .catch(console.error)
  }
}

export function getProfile() {
  return dispatch => {
    axios.get('/api/owners/profile')
      .then(res => res.data)
      .then(profile => {
        dispatch(receiveProfile(profile))
      })
      .catch(console.error)
  }
}

export function updateProfile(id, obj) {
  return dispatch => {
    axios.put(`/api/owners/${id}`, obj)
      .then(res => res.data)
      .then(profile => {
        dispatch(receiveProfile(profile));
        RouteActions.route('/loginSuccess');
      })
      .catch(console.error)
  }
}

export function addWalker(ownerId, walkerId) {
  return dispatch => {
    axios.put(`/api/owners/${ownerId}/addWalker/${walkerId}`)
      .then(res => res.data)
      .then(profile => {
        dispatch(receiveProfile(profile));
        RouteActions.route('/walkers');
      })
      .catch(console.error)
  }
}

export function removeWalker(ownerId) {
  return dispatch => {
    axios.put(`/api/owners/removeWalker/${ownerId}`)
      .then(res => res.data)
      .then(profile => {
        dispatch(receiveProfile(profile));
      })
      .catch(console.error)
  }
}
