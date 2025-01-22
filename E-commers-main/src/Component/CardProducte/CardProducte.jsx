// import { useEffect, useState } from "react";
// import Cardsst from "../Cardsst/Cardsst";

// const CardProducte = () => {
//   const [proudcetes, setproudcetes] = useState([]);
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => response.json())
//       .then((data) => setproudcetes(data));
//   }, []);

//   return (
//     <>
//       <h2 className="text-center p-3">Our productes</h2>
//       <div className="container">
//         <div className="row">
//           {proudcetes.map((proudcet) => {
//             return (
//               <div className="col-3" key={proudcet.id}>
//                 <Cardsst  proudcet={proudcet}/>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default CardProducte;
