import React from 'react'
import Router from 'next/router';
import { Layout, Menu as MenuAntd, theme } from 'antd';
import { LineChartOutlined, HomeOutlined, TeamOutlined, GoldOutlined, BankOutlined } from '@ant-design/icons';

const { Sider } = Layout;


export default function Menu({page}) {

  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (
    <Sider width={200} style={{ background: colorBgContainer }}>
      <MenuAntd
        mode="inline"
        defaultSelectedKeys={[page]}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        items={[
          {
            key: '1',
            icon: <HomeOutlined />,
            label: 'HOME',
            onClick: () => {Router.push('/dashboard');}
          },
          {
            key: '2',
            icon: <LineChartOutlined />,
            label: 'ENGINE Health',
            onClick: () => {Router.push('/assets');}
          },
          {
            key: '3',
            icon: <TeamOutlined />,
            label: 'Users',
          },
          {
            key: '4',
            icon: <GoldOutlined />,
            label: 'Units',
          },
          {
            key: '5',
            icon: <BankOutlined />,
            label: 'Company',
          }
        ]}
      />
    </Sider>
  )
}