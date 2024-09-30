import { useState } from "react";
import './Cus.css';
import { Card, Col, Container, Row } from "react-bootstrap";

import useNewsData from "../hooks/useNewsData";
import CustomPagination from "./CustomPagination";
import image from "../assets/news2.jpg"

const NewsList = (props) => {
  const { category, searchTerm} = props;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  const { newsData, loading, error } = useNewsData(category, searchTerm);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const totalArticles = newsData.length;
  // console.log(totalArticles)
  const totalPages = Math.ceil(totalArticles / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = newsData.slice(startIndex, endIndex);
  // console.log(image);

  return (
    <Container>
      <h2 className="title">{category? category:'E-News'}</h2>
      <Row>
        {currentArticles?.map((article) => (
          <Col xs={12} md={6} lg={4} key={article.url}>
            <Card className="m-1" style={{height:"400px"}}>
              <Card.Img src={article.image == null ? image : article.image} style={{height:"180px"}} variant="top" />
              <Card.Body>
                <Card.Title>{article.title.slice(0,40)}...</Card.Title>
                <Card.Text>{article.description.slice(0,100)}...</Card.Text>
                <Card.Link className="btn read-more-bg" href={article.url}>Read More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </Container>
  );
};

export default NewsList;
