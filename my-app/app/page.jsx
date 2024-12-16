import Image from "next/image";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import ProductList from "./components/Home/ProductList";

// function List() {
//   return (
//     <div>
//       <ul>
//         <li> item 1</li>
//         <li> item 2</li>
//         <li> item 3</li>
//       </ul>
//     </div>
//   )
// }


function Home() {
  return (
    <div>

      <link rel="icon" type="image/x-icon" href="/favicon_sevda.ico" />
      <title> SevdaLive</title>
        
      <Header />
      <ProductList />
      <Footer />

    </div>
  );
}

export default Home;
