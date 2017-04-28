'use strict';

import React, { Component} from 'react';
import {
  Image
} from 'react-native';

import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';


class FLAnimatedImage extends Component {

  render() {
    return (

      <Image source={this.props.source} style={this.props.style}  />
    );
  }
}

export default FLAnimatedImage;
