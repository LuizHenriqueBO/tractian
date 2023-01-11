import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { GET_ASSETS } from '../src/Services/api'
import { Breadcrumb, Layout, theme, Space,  Avatar, List, Row, Col, Tag } from 'antd';
import AssetChart from '../src/Component/AssetChart'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { AssetsType } from '../src/Interface/AssetsType'
import Menu from '../src/Component/Menu'
import Image from '../src/Component/Image'

const { Content } = Layout;

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default function Assets() {
  const [assets, setAssets] = useState<[AssetsType] | null>(null)

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    const promise = GET_ASSETS();
    promise.then((res: [AssetsType]) => {
      console.log(res)
      setAssets(res)
    })
  },[])

  
  return (
    <div>
      <Head>
        <title>Assets</title>
      </Head>

      <Layout>
        <Menu page={'2'}/>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Assets</Breadcrumb.Item>
          </Breadcrumb>

          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 300,
              background: colorBgContainer,
              borderRadius: 5
            }}
          >

            {assets?.length > 0 ? (

              <List
                
                itemLayout="vertical"
                size="large"
                pagination={{
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: 1,
                }}
                dataSource={assets}

                renderItem={(item) => (
                  <List.Item
                    style={{
                      background: '#a6a9ad',
                    }}
                  
                    key={item.name}
                    actions={[
                      <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                      <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                      <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}

                    extra={
                      <Image
                        src={item.image}
                        alt='Imagem de backgroun'
                        height='20rem'
                        minHeight='10rem'
                      />
                    }
                  >

                    <Row gutter={24} >

                      <Col className="gutter-row" span={12}>
                        <List.Item.Meta
                          avatar={<Avatar src={'/avatar.png'} />}
                          title={

                            <Row gutter={12} >

                              <Col className="gutter-row" span={8}>
                                <a href={'/avatar.png'}>{"John Doe"}</a>
                              </Col>

                              <Col className="gutter-row" span={4}>
                                <Tag color={item.status === 'inAlert' ? "#F44958" : item.status ==="inOperation" ? "#5EE186": "#F4A541"} style={{fontSize: 15}}>{item.status}</Tag>
                              </Col>
                            </Row>
                          }
                          description={"Responsible"}
                        />
                      </Col>

                      <Col className="gutter-row" span={12}>
                        <AssetChart data={item.healthHistory} text={item.name}/>        
                      </Col>

                    </Row>
                  </List.Item>
                )}
              />
            ) : null}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

  