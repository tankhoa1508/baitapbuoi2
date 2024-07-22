import { useState } from "react";
import { Button, Card, CardBody, CardTitle, CardSubtitle, Container, Row, Col } from "reactstrap";
import "./products.css"
import Product from "./Product";

function Products() {
    const [listCateTour, setListCateTour] = useState([
        { id: 1, title: "New York" },
        { id: 2, title: "London" },
        { id: 3, title: "Tokyo" },
        { id: 4, title: "Los Angeles" },
    ]);

    const [listTour, setTour] = useState([
        {
            id: 1,
            title: "Three Temples Bangkok City Tour Must Visit",
            category: "New York",
            price: 149.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-1.png",
        },
        {
            id: 2,
            title: "Essence of Vietnam South to North",
            category: "New York",
            price: 167.19,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-2.png",
        },
        {
            id: 3,
            title: "Osa Peninsula to Dominical City Tour",
            category: "New York",
            price: 134.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-3.png",
            special: true
        },
        {
            id: 4,
            title: "Mt Fuji, Hakone, Lake Ashi Cruise",
            category: "New York",
            price: 50.15,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-4.png",
        },
        {
            id: 5,
            title: "Three Temples Bangkok City Tour Must Visit",
            category: "London",
            price: 149.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-5.png",
        },
        {
            id: 6,
            title: "Essence of Vietnam South to North",
            category: "London",
            price: 167.19,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-6.png",
            special: true
        },
        {
            id: 7,
            title: "Osa Peninsula to Dominical City Tour",
            category: "London",
            price: 134.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-7.png",
        },
        {
            id: 8,
            title: "Mt Fuji, Hakone, Lake Ashi Cruise",
            category: "London",
            price: 50.15,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-8.png",
        },
        {
            id: 9,
            title: "Three Temples Bangkok City Tour Must Visit",
            category: "Tokyo",
            price: 149.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-9.png",
            special: true
        },
        {
            id: 10,
            title: "Essence of Vietnam South to North",
            category: "Tokyo",
            price: 117.19,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-10.png",
        },
        {
            id: 11,
            title: "Osa Peninsula to Dominical City Tour",
            category: "Tokyo",
            price: 134.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-11.png",
        },
        {
            id: 12,
            title: "Mt Fuji, Hakone, Lake Ashi Cruise",
            category: "Tokyo",
            price: 50.15,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-12.png",
            special: true
        },
        {
            id: 13,
            title: "Three Temples Bangkok City Tour Must Visit",
            category: "Los Angeles",
            price: 149.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-13.png",
        },
        {
            id: 14,
            title: "Essence of Vietnam South to North",
            category: "Los Angeles",
            price: 117.19,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-14.png",
        },
        {
            id: 15,
            title: "Osa Peninsula to Dominical City Tour",
            category: "Los Angeles",
            price: 134.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-15.png",
        },
        {
            id: 16,
            title: "Mt Fuji, Hakone, Lake Ashi Cruise",
            category: "Los Angeles",
            price: 50.15,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-16.png",
        },
    ]);

    const [selectedCategory, setSelectedCategory] = useState("New York");

    const filteredTours = listTour.filter((item) => item.category === selectedCategory);

    return (
        <Container className="slide">
            <div className="headline-tour">
                <h3>Perfect destination</h3>
                <h2>Trending destinations</h2>
            </div>

            <ul>
                {
                    listCateTour.map((item) => (
                        <li key={item.id}>
                            <Button className={(item.title===selectedCategory) ? "active": ""} 
                                color="primary" 
                                onClick={() => setSelectedCategory(item.title)}
                            >
                                {item.title}
                            </Button>
                        </li>
                    ))
                }
            </ul>

            <div className="tab-content">
                <Row>
                    {
                        filteredTours.map((item) => (
                            <Product pro={item} data-aos="flip-left"/>
                        ))
                    }
                </Row>
            </div>
        </Container>
    )
}

export default Products;
