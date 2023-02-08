import { YMaps, Map } from "react-yandex-maps";
import { Row, Col } from "antd";
import React, { useState } from "react";

import { Router } from "next/router";
const MapView = (config) => (
  <YMaps>
    <Row>
      <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
    </Row>
  </YMaps>
);

export default MapView;
