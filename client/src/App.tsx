/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import { Button, Col, Container, Offcanvas, Row } from 'react-bootstrap'
import { GiHamburgerMenu } from 'react-icons/gi'
import Chapter1 from './components/Chapter1'

const Main = () => {
    const location = useLocation();

    useEffect(() => {
        console.log(location);
    }, [location]);
    return (
        <Container fluid className='p-4'>
            <Row className="justify-content-center">
                <Col xs={12} className='text-center'>
                    <p className="fs-1 fw-bold">Select a Chapter to study</p>
                </Col>
            </Row>
        </Container>
    )
}

const App = () => {
    const [showOffcanvas, setShowOffcanvas] = useState<boolean>(false);

    const handleOffcanvasOpen = () => setShowOffcanvas(true);
    const handleOffcanvasClose = () => setShowOffcanvas(false);

    return (
        <Router>
            <Button
                variant='outline-info'
                className="position-fixed bottom-0 mb-2 sidebar-expand-button d-print-none d-flex align-items-center justify-content-center"
                style={{
                    left: "-1vw",
                    width: "45px",
                    height: "45px",
                    marginLeft: 10,
                    zIndex: 1000,
                    
                }}
            >
                <GiHamburgerMenu
                    className="align-items-center"
                    style={{ fontSize: "22px" }}
                />
            </Button>
            <Offcanvas
                show={showOffcanvas}
                onHide={handleOffcanvasClose}
                scroll={true}
                backdrop={true}
                keyboard
            >
                <Offcanvas.Header closeButton>
                    
                </Offcanvas.Header>
            </Offcanvas>
            <Routes>
                <Route path='/*' element={ <Main /> } />
                <Route path='/chapter/:chapter/*' element={ <Chapter1 /> } />
            </Routes>
        </Router>
    )
}

export default App
