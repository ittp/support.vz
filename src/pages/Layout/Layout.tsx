import { ConfigProvider, Col, Row, Form, PageHeader } from "antd";

import {
  ProCard,
  ConfigProvider as ProConfigProvider
} from "@ant-design/pro-components";


import Card from '@ant-design/pro-card';
// export * from '@ant-design/pro-descriptions';
// export * from '@ant-design/pro-field';
// export * from '@ant-design/pro-form';
// export * from '@ant-design/pro-layout';
// export * from '@ant-design/pro-list';
// export * from '@ant-design/pro-provider';
// export * from '@ant-design/pro-skeleton';
// export * from '@ant-design/pro-table';
import ProUtils '@ant-design/pro-utils';




<ConfigProvider locale={ru_RU}>
  <ProCard split="vertical">
    <ProCard title="Заявки" colSpan="30%">
      <Cols data={list} />
    </ProCard>
    <ProCard title="Просмотр" headerBordered>
      <div>Информация</div>
      <MapView />
    </ProCard>
  </ProCard>
</ConfigProvider>;
