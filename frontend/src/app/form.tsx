import Link from "next/link";
import { Row, Col, Form, Input, InputNumber, Select } from "antd";
import { detect, browserName, BrowserInfo, detectOS } from "detect-browser";

import DataTable from "antd-data-table";
import React, { Component } from "react";

let s = [
  "Неполадки в 1С",
  "Поломка компьютера",
  "Сбой в работе СКУД",
  "Сбой в работе видеонаблюдения",
  "Сбой в работе интернета",
  "Требуется консультация",
  "Требуется монтаждемонтаж",
];

let e = [""];

let b = [];

export class FormView extends Component {
  constructor(props: any) {
    super(props);

    props = {
      columns: [],
      data: [],
      isLoading: true,
      tickets: [],
    };
    this.state = {
      browser: {},
    };
  }

  async detectBrowser() {
    // let browser = detect();
    // // handle the case where we don't detect the browser
    // if (browser) {
    //   console.log(browser.name);
    //   console.log(browser.version);
    //   console.log(browser.os);
    // }
    // return navigator
  }

  render() {
    let { props, state } = this;
    return <div>Form</div>;
  }
}
