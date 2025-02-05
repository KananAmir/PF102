
import './App.css'
import BlogList from './components/BlogList';
import asusPhoto from "./assets/images/asus.jpg"
import lenova from "./assets/images/lenova_v15_igl.webp"
import Layout from './components/Layout';
import Books from './components/Books';

function App() {

  const blogs = [
    {
      id: 1,
      title: "React Nədir?",
      content: "React, komponent əsaslı frontend kitabxanasıdır...",
      author: "Elvin Məmmədov",
      date: "2024-02-04",
      image: "https://picsum.photos/300/300"
    },
    {
      id: 2,
      title: "Props Necə İşləyir?",
      content: "Props vasitəsilə komponentlər arasında məlumat ötürülə bilər...",
      author: "Aygün Quliyeva",
      date: "2024-02-03",
      image: "https://picsum.photos/300/300"
    },
    {
      id: 3,
      title: "Componentlərin Üstünlükləri",
      content: "Componentlər kodun təkrar istifadəsinə və daha asan idarə olunmasına imkan yaradır...",
      author: "Nihad Əhmədov",
      date: "2024-02-02",
      image: "https://picsum.photos/300/300"
    }
  ];
  // blogs.length = 0;

  const handleClick = () => {
    console.log("clicked");
  }

  const greeting = (e) => {
    // console.log(`Hello ${e}`);
    console.log(e);
  }
  return (
    <>
      {/* <img src={asusPhoto} alt="asus" width={300} /> */}
      {/* <img src={lenova} alt="lenova" width={300} /> */}
      {/* <img src="../public/images/vite.svg" alt="vite logo" /> */}
      {
        blogs.length > 0 && <BlogList blogs={blogs} />
        // blogs.length > 0 ? <BlogList blogs={blogs} /> : <p>bloglar yoxdur</p>
      }

      <hr />
      <Layout>
        <h1>Lorem ipsum dolor sit.</h1>
        <section>
          <h3>Lorem ipsum dolor sit.</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate omnis at dolor iure libero suscipit iusto officiis itaque vitae non mollitia iste quidem unde necessitatibus, odio, molestiae vero reprehenderit veniam.</p>
        </section>
      </Layout>
      <hr />

      <Books />

      <hr />
      {/* <button onClick={() => { handleClick() }}>Click</button> */}
      <button onClick={handleClick}>Click</button>
      <hr />
      {/* <button onClick={() => { greeting("miri") }}>hello</button>
      <button onClick={greeting}>hello</button> */}
    </>
  )
}

export default App
