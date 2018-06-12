import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.View`
  flex: 1;
`

const Title = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.PRIMARY};
`


class HomeScreen extends Component {
  render() {
    return (
      <Wrapper>
        <Title>hello home</Title>
      </Wrapper>
    )
  }
}

export default HomeScreen
