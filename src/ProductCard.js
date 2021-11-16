import React from 'react'
import {Card} from 'antd'


function ProductCard(props) {

        return(
            <Card title={props.product.name} bordered={false} extra={<a href="#">More</a>}>
              <p>{props.product.price}</p>
            </Card>
        )
    
}

export default ProductCard