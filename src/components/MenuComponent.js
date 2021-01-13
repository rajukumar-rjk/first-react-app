import React, { Component } from 'react';
import {Card, CardImgOverlay, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectDish : null
        };
    }

    onDishSelect(dish){
        console.log(dish)
        this.setState({selectDish: dish})
    };

    showSelectedDish(dish){
        if(dish != null){
            return(<Card>
                <CardImg top width="100%" src={dish.image} alt={dish.price} />
                <CardBody>
                    <CardTitle tag="h5">{dish.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">label: {dish.label} | price:  {dish.price}</CardSubtitle>
                    <CardText> {dish.description} </CardText>
                    <Button>Buy</Button>
                </CardBody>
            </Card>)
        }else{
            return(<div></div>);
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            // Example one to show images by Media tag
            // return (
            //   <div key={dish.id} className="col-12 mt-5">
            //     <Media tag="li">
            //       <Media left middle>
            //           <Media object src={dish.image} alt={dish.name} />
            //       </Media>
            //       <Media body className="ml-5">
            //         <Media heading>{dish.name}</Media>
            //         <p>{dish.description}</p>
            //       </Media>
            //     </Media>
            //   </div>
            // );

            // Example two to show images by Card tag
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.onDishSelect(dish)}>
                        <CardImg top width="100%" src={dish.image} alt={dish.price} />
                        <CardImgOverlay>
                            <CardTitle tag="h5">{dish.name}</CardTitle>
                            {/* <CardSubtitle tag="h6" className="mb-2 text-muted">label: {dish.label} | price:  {dish.price}</CardSubtitle>
                            <CardText> {dish.description} </CardText> */}
                            {/* <Button>Buy</Button> */}
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });


        return (
          <div className="container">
            <div className="row">
                  {menu}
            </div>

            <div d="new" className="row">
                {this.showSelectedDish(this.state.selectDish)}
            </div>

          </div>
        );
    }
}

export default Menu;