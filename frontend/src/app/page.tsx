import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

import { Row, Col, Space, Form, Select, Input } from "antd";

let { Option } = Select;

export default function Home() {
  return (
    <Row>
      <Form>
        <Input name={"category"} />
        <Select options={[{ key: 1, value: 1, children: [] }]} />
      </Form>
    </Row>
  );
}
