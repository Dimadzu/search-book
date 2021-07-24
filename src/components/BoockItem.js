import React from "react";
import { Card, Col, Row, Image  } from 'antd';


const BoockItem =props=>{
  const {data} = props;
 console.log(data);


    return (
        <div className="site-card-wrapper">
         {data.map( (item)=>(
        <Row style={{ marginTop: 16 }} key={item.id}>
          <Col span={24}>
            <Card title={item.volumeInfo.title} bordered={true}>
              <Row gutter={[16, 16]}>
                <Col span={8}>
                <Image  src={item.volumeInfo.imageLinks.thumbnail}/>
                </Col>
                <Col span={16}>col</Col>
              </Row> 
            </Card>
          </Col>
        </Row>
        ))}
      </div>
    )
}

export default BoockItem;

