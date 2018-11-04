import React, { Component } from 'react'
import styled from 'styled-components'
import FoodCard from '../components/foodCard'
import Layout from '../components/layout'
import arrozConPollo from '../images/arroz-pollo.png'
import ceviche from '../images/ceviche.jpg'
import papaALaHuancaina from '../images/papa-huancaina.jpg'

const Container = styled.div`
  background-color: #f2f2f2;
  padding: 10px;
  border: 2px solid #CCCCCC;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`

class Gallery extends Component {
  state = {
    cardWidth: 200
  }

  render() {
    const { cardWidth } = this.state
    return (
      <Layout>
        <Container>
          <FoodCard size={cardWidth} img={papaALaHuancaina} text="Papa a la huancaina" />
          <FoodCard size={cardWidth} img={ceviche} text="Ceviche" />
          <FoodCard size={cardWidth} img={papaALaHuancaina} text="Papa a la huancaina" />
          <FoodCard size={cardWidth} img={arrozConPollo} text="Arroz con pollo" />
          <FoodCard size={cardWidth} img={ceviche} text="Ceviche" />
          <FoodCard size={cardWidth} img={papaALaHuancaina} text="Papa a la huancaina" />
          <FoodCard size={cardWidth} img={arrozConPollo} text="Arroz con pollo" />
          <FoodCard size={cardWidth} img={ceviche} text="Ceviche" />
          <FoodCard size={cardWidth} img={papaALaHuancaina} text="Papa a la huancaina" />
          <FoodCard size={cardWidth} img={arrozConPollo} text="Arroz con pollo" />
          <FoodCard size={cardWidth} img={ceviche} text="Ceviche" />
          <FoodCard size={cardWidth} img={papaALaHuancaina} text="Papa a la huancaina" />
          <FoodCard size={cardWidth} img={arrozConPollo} text="Arroz con pollo" />
          <FoodCard size={cardWidth} img={ceviche} text="Ceviche" />
          <FoodCard size={cardWidth} img={ceviche} text="Ceviche" />
        </Container>
      </Layout>
    )
  }
}

export default Gallery
