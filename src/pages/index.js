import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import food from '../images/food.png'

import Layout from '../components/layout'
import Image from '../components/image'

const Bar = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
  color: #c3c3c3;
`


const IndexPage = () => (
  <Layout>
    <h2><span>Sun</span>Code<span>Flower</span> presents..</h2>
    <p>We all love tasty food and eat well. But sometimes we lack the imagination or words to describe what we want for dinner.</p>
    <p>We present you a mega application using the latest technologies that can solve all the above problems.</p>
    <p>In our great app we use only morder API such as Fauna (for call the db and receive data), Clarify (to detect food image), Formspree (for collecting delivery address), Pilon (because it's interesting to try). And many, many others.</p>
    <p>Meet ...</p>
    <h1 style={{ textAlign:'center', }}><a href=""><span>Sun</span>Food<span>App</span></a></h1>
    <div style={{ maxWidth: '300px', margin: 'auto', textAlign:'center', }}>
    <img src={food} alt="Logo" alt="{siteTitle}" title="{siteTitle}"/>
    </div>
  </Layout>
)

export default IndexPage
