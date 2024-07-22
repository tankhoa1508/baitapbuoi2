import { Button, Card, CardBody, CardTitle, CardSubtitle, Container, Row, Col } from "reactstrap";
function Product(props) {
    const {pro} = props
    return (
            <Col key={pro.id} lg={3} md={4} sm={6} xs={12} data-aos="flip-left">
                <Card style={{ width: '18rem' }}>
                    <img
                        alt={pro.title}
                        src={pro.img}
                    />
                    <CardBody>
                        <p className="category"><i className="fa-solid fa-map-pin"></i> {pro.category}</p>
                        <CardTitle className="title" tag="h5">
                            {pro.title}
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            From <span className="span1">${pro.price.toFixed(2)}</span> <span className="span2">$250.00</span>
                        </CardSubtitle>
                    </CardBody>
                </Card>
            </Col>
    )
}

export default Product;