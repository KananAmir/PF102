
import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import Input from './components/Input'

import styled from 'styled-components'

//inline css
//global css (normal css)
//scss
//module css (module scss)
//css in js (styled components)
//ui kits

function App() {

  return (
    <>
      <div className="container">
        <Input />
        <hr />
        <input type="text" name="" id="" />

        <hr />
        {/* 
        <div className="cards" style={{ display: "flex", flexWrap: "wrap" }}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div> */}


        {/* <div className="card">
          <div className="card-image">
            test
          </div>
        </div> */}

        <hr />
        <Button />

        <hr />
        <Container>
          <Header>Lorem, ipsum dolor.</Header>

        </Container>
      </div>
    </>
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  padding: 10px 20px;
  text-align: center;
  color: red;
`;
export default App
