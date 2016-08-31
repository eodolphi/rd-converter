import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import GPSFixed from 'material-ui/svg-icons/device/gps-fixed';

import * as actions from '../actions/converterActions';
import ReactMapboxGl, {Popup} from "react-mapbox-gl";
import MapboxCSS from "react-mapbox-gl/dist/mapbox-css/mapbox-gl.css";


const mapStyle = {
  width: '100%',
  height: '100%',
  position: 'fixed',
  top: 0,
  left: 0
};


export const Converter = (props) => {
  let popup;
  if (props.converter.converted) {
    popup = (
      <Popup coordinates={props.converter.center}>
        <h2>{props.converter.converted.type.toUpperCase()}-coordinates: {props.converter.converted.coordinates[0].toPrecision(6)}, {props.converter.converted.coordinates[1].toPrecision(6)}</h2>
      </Popup>
    );
  }
  function possibleDispatchCoordinates(_event, text) {
    const coordinates = text.split(',');

    if (coordinates.length === 2) {
      props.actions.setCoordinates(
        coordinates.map(num => Number(num))
      );
    }
  }

  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(function(position) {
      props.actions.setCoordinates(
        [position.coords.longitude, position.coords.latitude]
      );
    });
  }

  return (
      <MuiThemeProvider>
       <div>
         <ReactMapboxGl
           style={'mapbox://styles/mapbox/streets-v8'}
           accessToken={'pk.eyJ1IjoiZW9kb2xwaGkiLCJhIjoiY2lyZmFheGc1MDAyN2lubTRnaXU4OTBsbiJ9.ecqcGpG_EmvUE5TStHeboQ'}
           containerStyle={mapStyle}
           zoom={[props.converter.zoomLevel]}
           center={props.converter.center}>
           {popup}
        </ReactMapboxGl>
         <AppBar showMenuIconButton={false} title="RD converter" style={{backgroundColor: 'white'}} titleStyle={{color: 'rgb(0, 188, 212)'}}>
              <TextField hintText="Coordinates" style={{paddingTop: 12}} onChange={possibleDispatchCoordinates}/>
              <IconButton onClick={getCurrentPosition} >
                <GPSFixed/>
              </IconButton>
         </AppBar>
        </div>
      </MuiThemeProvider>
  );
};

Converter.propTypes = {
  actions: PropTypes.object.isRequired,
  converter: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    converter: state.converter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Converter);
