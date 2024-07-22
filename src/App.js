import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import tour from "./data"; // Nhập dữ liệu tour từ file data.js
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import CardTour from './CardTour'; // Nhập component CardTour
import "./App.css"; //CSS

function App() {
  // Tạo danh sách các danh mục tour duy nhất từ dữ liệu tour
  const allTourCate = Array.from(new Set(tour.map((item) => item.category)));
  
  // Khai báo state để theo dõi tab đang hoạt động
  const [activeTab, setActiveTab] = useState("tab0");

  // Hàm chuyển đổi tab
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Container className="mt-5 tour-tab">
        {/* Phần tiêu đề */}
        <div className="heading-title">
          <h3>Perfect destination</h3>
          <h2>Trending destinations</h2>
        </div>
        {/* Nav cho các tab */}
        <Nav tabs className="justify-content-center">
          {allTourCate.map((item, index) => (
            <NavItem key={index}>
              <NavLink
                className={activeTab === `tab${index}` ? "active" : ""}
                onClick={() => toggle(`tab${index}`)}
              >
                {item}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        {/* Tab content */}
        <TabContent activeTab={activeTab}>
          {allTourCate.map((item, index) => (
            <TabPane tabId={`tab${index}`} key={index}>
              <Row>
                {tour.map(
                  (tourItem, indexTour) =>
                    tourItem.category === item && (
                      <Col lg={3} md={6} key={indexTour} className="mb-4">
                        <CardTour
                          title={tourItem.title}
                          img={tourItem.img}
                          cate={tourItem.category}
                          price={tourItem.price}
                        />
                      </Col>
                    )
                )}
              </Row>
            </TabPane>
          ))}
        </TabContent>
      </Container>
    </div>
  );
}

export default App;
