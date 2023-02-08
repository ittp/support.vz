/**
 * This is an auto-generated demo by dumi
 * if you think it is not working as expected,
 * please report the issue at
 * https://github.com/umijs/dumi/issues
 **/
import { parse } from "yaml";

import React, {
  Component,
  useEffect,
  createContext,
  useState,
  Fragment
} from "react";
import { createRoot } from "react-dom/client";

import { render } from "react-dom";
import "./index.css";

import {
  ConfigProvider,
  AutoComplete,
  Tag,
  Statistic,
  Col,
  Row,
  Input,
  Button,
  Timeline
} from "antd";
import ru_RU from "antd/locale/ru_RU";
import {
  getPageTitle,
  PageHeader,
  ProBreadcrumb,
  ProCard,
  ProForm
} from "@ant-design/pro-components";

import Link from "antd/es/typography/Link";

// let cl = require("./clients.yaml");
let data = parse(require("./clients.yaml")).keys;
let tickets = parse(require("./clients.yaml")).tickets;

// let clients = data.map((i) => i);
// console.log(clients);

let ColLine = ({ key, item }) => (
  <Row key={key}>
    <Col>{key}</Col>
    <Col>{item}</Col>
  </Row>
);

function onSelect(value) {
  console.log("onSelect", value);
}

class Complete extends Component {
  state = {
    value: "",
    dataSource: [clients]
  };

  onSearch = (searchText) => {
    this.setState({
      dataSource: !searchText
        ? []
        : [searchText, searchText.repeat(2), searchText.repeat(3)]
    });
  };

  onChange = (value) => {
    this.setState({ value });
  };

  render() {
    const { dataSource, value } = this.state;
    re.Configturn(
      <div>
        <AutoComplete
          dataSource={dataSource}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={this.onSearch}
          placeholder="input here"
        />
        <br />
        <br />
        <AutoComplete
          value={value}
          dataSource={dataSource}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={this.onSearch}
          onChange={this.onChange}
          placeholder="control mode"
        />
      </div>
    );
  }
}

let TimeLineItem = ({ data }) => {
  let { date, time, user } = data;

  return (
    <Timeline.Item color={data.color}>
      <Row gutter={1} wrap={true} color={""}>
        <Col span={6}>{date}</Col>
        <Col span={6}>{time}</Col>
        <Col span={6}>11</Col>
        <Col span={6}>{user}</Col>
      </Row>
    </Timeline.Item>
  );
};

function Main() {
  let [config, setConfig] = useState({});
  //const router = useRouter();

  useEffect(() => {
    console.log(config);
    console.log("rendered");
  });

  //console.log(clients.map((client, key) => <div>{client}</div>));
  return (
    <>
      <Timeline>
        <TimeLineItem data={{ time: "15:00", state: "created", user: 1 }} />
        <Timeline.Item color="red">Закрыта</Timeline.Item>
        <Timeline.Item color="green">
          <Row mode="flex">
            <Col span={6}>06.12.2022</Col>
            <Col span={6}>15:30</Col>
            <Col span={6}>Выполнена</Col>
            <Col span={6}>Иванов Иван</Col>
          </Row>
        </Timeline.Item>
        <Timeline.Item color="blue">
          <Row mode="flex">
            <Col span={6}>06.12.2022</Col>
            <Col span={6}>15:30</Col>
            <Col span={6}>Назначена</Col>
            <Col span={6}>Иванов Иван</Col>
          </Row>
        </Timeline.Item>
        <Timeline.Item color="gray">
          <Row mode="flex">
            <Col span={6}>05.12.2022</Col>
            <Col span={6}>17:30</Col>
            <Col span={6}>Создана</Col>
            <Col span={6}>Юлия Мохова</Col>
          </Row>
        </Timeline.Item>
      </Timeline>
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Main />);

// render(<RoutedApp />, container);

// import ReactDOM from "react-dom"
// ReactDOM.render(<App />, document.getElementById("root"));
