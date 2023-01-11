import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { Breadcrumb, Layout, theme } from 'antd';
import { getAPIClient } from '../Services/axios'
import ListAssets from '../Component/ListAssets'
import Menu from '../Component/Menu';

const { Content } = Layout;

export default function Dashboard() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Layout>
        <Menu page={'1'}/>
        <Layout style={{ padding: '0 24px 24px' }}>
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
        
            <ListAssets/>

          </Content>
        </Layout>
      </Layout>
    </div>

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