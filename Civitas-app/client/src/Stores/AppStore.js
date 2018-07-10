import AppDispatcher from '../Dispatcher/AppDispatcher.js';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _uploadWindowOpen = false;
let _photoViewerOn = false;
let _signupWindowOn = false;
let _loginWindowOn = false;
var bgColor = null;

var _photos = {};
var _selectedPhoto = {};

function loadPhotoData(data) {
  _photos = data;
}

function setSelectedPhoto(obj) {
  _selectedPhoto = obj;
}

class Appstore extends EventEmitter {

  emitChange(){
    this.emit( CHANGE_EVENT);
  }

  addChangeListener( callback ){
    this.on( CHANGE_EVENT, callback);
  }

  removeChangeListener(callback){
    this.removeListener (CHANGE_EVENT, callback);
  }

  getSelectedPhoto(){
    return _selectedPhoto;
  }

  getUploadWindowStatus() {
	return _uploadWindowOpen;
	}

	getPhotoViewerStatus() {
  	return _photoViewerOn;
  }

	getSignupWindowStatus() {
		return _signupWindowOn;
	}

  getLoginWindowStatus() {
    return _loginWindowOn;
  }
}

const _appStore = new Appstore();

export default _appStore;

_appStore.dispatchToken = AppDispatcher.register( action => {
  switch ( action.actionType ){

    case 'receiveData':
    loadPhotoData(action.data);
    break;

    case 'setSelectedPhoto':
    setSelectedPhoto(action.data);
    _appStore.emitChange();
    break;

    case 'photoViewerOn':
    _photoViewerOn = true;
    _appStore.emitChange();
    break;

    case 'photoViewerOff':
    _photoViewerOn = false;
    _appStore.emitChange();
    break;

		case 'signupWindowOn':
		_signupWindowOn = true;
		_appStore.emitChange();
		break;

		case 'signupWindowOff':
		_signupWindowOn = false;
		_appStore.emitChange();
		break;

    case 'loginWindowOn':
    _loginWindowOn = true;
    _appStore.emitChange();
    break;

    case 'loginWindowOff':
    _loginWindowOn = false;
    _appStore.emitChange();
    break;


    case 'toggleUploadWindow':
	_uploadWindowOpen = !_uploadWindowOpen;
	_appStore.emitChange();
	break;

    default:
    break;
  }

  return true;
});
