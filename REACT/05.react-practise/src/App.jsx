
import './App.css'
import Counter from './components/Counter';
import Layout from './components/Layout';
import List from './components/List';
import ListItem from './components/ListItem';
import Users from './components/Users';

function App() {

  const techs = ["html", "css", "js", "react"];

  return (
    <>
      {/* <List>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </List> */}

      <List>
        {/* {techs.map((tech) => (<li key={tech}>{tech}</li>))} */}
        {techs.map((tech) => (<ListItem key={tech} tech={tech} />))}
      </List>

      <hr />
      <Layout>
        <h1>Tech List</h1>
        <List>
          {techs.map((tech) => (<ListItem key={tech} tech={tech} />))}
        </List>
      </Layout>

      <hr />
      <Counter />

      <hr />
      <Users />
    </>
  )
}

export default App
