import React from 'react'
import HeaderBlock from "../components/HeaderBlock"
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <>
      <HeaderBlock />
      <div className='container-fluid' style={{ paddingTop: '150px' }} >

        <div className='d-flex justify-content-between'>
          <h1>All Projects</h1>
          <input placeholder='Search projects by their languages' type="text" className='form-control w-25' />

        </div>

        <Row className='mt-3'>
          <Col className='mb-3' sm={12} md={6} lg={4}>
            <ProjectCard />
          </Col>

        </Row>
      </div>


    </>
  )
}

export default Projects