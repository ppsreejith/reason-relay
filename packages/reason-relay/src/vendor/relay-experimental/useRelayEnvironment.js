/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+relay
 * 
 * @format
 */
'use strict';

var _require = require('react-relay'),
    ReactRelayContext = _require.ReactRelayContext;

var invariant = require("fbjs/lib/invariant");

var _require2 = require('react'),
    useContext = _require2.useContext;

function useRelayEnvironment() {
  var context = useContext(ReactRelayContext);
  !(context != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'useRelayEnvironment: Expected to have found a Relay environment provided by ' + 'a `RelayEnvironmentProvider` component. ' + 'This usually means that useRelayEnvironment was used in a ' + 'component that is not a descendant of a `RelayEnvironmentProvider`. ' + 'Please make sure a `RelayEnvironmentProvider` has been rendered somewhere ' + 'as a parent of ancestor your compontent.') : invariant(false) : void 0;
  return context.environment;
}

module.exports = useRelayEnvironment;