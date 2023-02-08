

import PageLoader from "next/dist/client/page-loader";
import React, { Component, createContext } from "react";
import PageFooter from "./Footer";

import { ConfigProvider } from "antd";



const RoutedApp = () => {
  // const router = useRouter();
  // const { pid } = router.query;
  return (
    <ConfigProvider locale={ru_RU}>
      <PageHeader
        onBack={(action) => console.log(action)}
        children={<App />}
        title="Заявки"
        subTitle={"Текущие"}
        extra={"B"}
        breadcrumb={[1, 2]}
      />
    </ConfigProvider>
  );
};


  /* <ConfigProvider locale={ru_RU}>
  <ProCard split="vertical">
    <ProCard title="Заявки" colSpan="30%">
    </ProCard>
    <ProCard title="Просмотр" headerBordered>
      <div>Информация</div>
      <MapView />
    </ProCard>
  </ProCard>
</ConfigProvider>; */
}

// left: list  <Cols data={list} />



export default class AppLayout extends Component {


  render(){

    return <>
    <PageLoader />
    1
    </>
  }
}