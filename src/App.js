import React, {Component} from 'react';
import './App.css';
import ProductCard from './ProductCard'
import {Col, Row, Modal, Button, Form, Input} from 'antd'
import 'antd/dist/antd.css'
import CollectionForm from './Form'

class App extends Component{

    API_URL="http://localhost:8000"

    state = {
      products: [],
      visible: false
    }
  

    showModal = () => {
      this.setState({ visible: true });
    };
  
    handleCancel = () => {
      this.setState({ visible: false });
    };
  
    handleCreate = () => {
      const { form } = this.formRef.props;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }
  
        console.log('Received values of form: ', values);

        fetch(this.API_URL+'/product/add?name='+values.name+'&price='+values.price, {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(
            {
              name:'blabla',
              price:'60'             }
          )
         });

        form.resetFields();
        this.setState({ visible: false });
      });
    };
        
    saveFormRef = formRef => {
      this.formRef = formRef;
    };
  componentWillMount() {
    this.getData();
  }

  getData() {
    setInterval(() => {
      fetch(this.API_URL+'/product/all')
      .then(res => res.json())
      .then((data) => {
        this.setState({ products: data })
      })
      .catch(console.log)
    }, 1000)
  }

  render() {
    return(
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Button type="primary" onClick={this.showModal}>Add product</Button>

        <CollectionForm 
        wrappedComponentRef={this.saveFormRef}
        visible={this.state.visible}
        onCancel={this.handleCancel}
        onCreate={this.handleCreate}
        />
        
        <Row gutter={16}>
          
          {this.state.products.map(product => (
          <div>
            <Col span={6} style={{margin: 5}}>
              <ProductCard product={product} />
            </Col>
          </div>
        ))}
          
        </Row>
      </div>
    )
  }
}


export default App;
