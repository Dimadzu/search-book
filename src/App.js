
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';
import { API_KEY, API_URL_SERCH } from './Api';
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      onSearch:''

    }
  };
   getData= async function searchBook() {
    const response = await fetch(`${API_URL_SERCH}=${this.state.onSearch}:keyes&key=${API_KEY}`);
    const data = await response.json();
    console.log(data);
  }
  componentDidMount(){

  };
  componentDidUpdate(prevProps,prevState) {
    if(prevState.onSearch!==this.state.onSearch) this.getData();
  };

  render() {
    const onSearch = value =>this.setState({onSearch: value.toUpperCase()});

    const { Search } = Input;
    const suffix = (
      <AudioOutlined
        style={{
          fontSize: 16,
          color: '#1890ff',
        }}
      />
    );



    return (
      <div className="App">
        <header className="App-header">
          <Space direction="vertical">
            <Search
              placeholder="input search text"
              enterButton="Search"
              size="large"
              suffix={suffix}
              onSearch={onSearch}
              
            />
          </Space>




        </header>
      </div>
    );
  }
}
export default App;
