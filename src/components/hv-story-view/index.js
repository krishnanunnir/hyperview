// @flow

/**
 * Copyright (c) Garuda Labs, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import * as Namespaces from 'hyperview/src/services/namespaces';
import React, { PureComponent } from 'react';
import type { HvComponentProps } from 'hyperview/src/types';
import { LOCAL_NAME } from 'hyperview/src/types';
import StoryContainer from 'hyperview/src/core/components/stories-view';
import { createProps } from 'hyperview/src/services';
import urlParse from 'url-parse';

export default class HvStoryView extends PureComponent<HvComponentProps> {
  static namespaceURI = Namespaces.HYPERVIEW;

  static localName = LOCAL_NAME.STORY;

  static localNameAliases = [];

  props: HvComponentProps;

  render() {
    let images = '';
    if (this.props.element.getAttribute('source')) {
      const source = this.props.element.getAttribute('source');
      images = source.split(',');
    }

    return (
      <StoryContainer
        containerStyle={{
          height: '100%',
          width: '100%',
        }}
        duration={20}
        enableProgress={true}
        images={images}
        onComplete={() => alert('onComplete')}
        visible={true}
      />
    );
  }
}
