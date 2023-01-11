import React from 'react'
import {  Input } from 'antd';

const onSearch = (value: string) => console.log(value);
const { Search } = Input;

export default function SearchContent() {
  return (
    <div style={{ justifyContent:'center', width: 400}}>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
    </div>
  )
}