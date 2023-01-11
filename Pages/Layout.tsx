import React, { Children } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import Router from 'next/router';
import { parseCookies } from 'nookies'
import { Breadcrumb, Layout as LayoutApp, Menu as MenuAntd, theme } from 'antd';
import { LineChartOutlined, HomeOutlined, TeamOutlined, GoldOutlined, BankOutlined } from '@ant-design/icons';
import { getAPIClient } from '../src/Services/axios'
import ListAssets from '../src/Component/ListAssets'

const { Content, Sider } = LayoutApp;

export default function Layout({children}) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
    <LayoutApp>
      <Sider width={200} style={{ background: colorBgContainer }}>
        <MenuAntd
          mode="inline"
          defaultSelectedKeys={['1']}
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
    </LayoutApp>

      <LayoutApp style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Assets</Breadcrumb.Item>
        </Breadcrumb>

          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
            >
            {/* { assets?.map(item => {
                return(<HomeChart data={item.healthHistory}/>)
            })} */}
            {children}
            {/* <ListAssets/> */}
          </Content>
      </LayoutApp>
    </>

  );
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);
  const { ['tractian.token']: token } = parseCookies(ctx);

  if(!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  
  await apiClient.get('/users')
  
  return {
    props: {}
  }
}