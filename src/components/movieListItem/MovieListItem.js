import React, { useContext } from "react";
import "./MovieListItem.css";
import { Context } from "../../context";

const MovieListItem = ({ name, views, id, favourite }) => {
  const { dispatch } = useContext(Context);

  const onFavourite = () => {
    dispatch({ type: "ON_FAVOURITE", payload: { id, favourite } });
  };

  const onDelete = () => {
    dispatch({ type: "ON_DELETE", payload: id });
  };

  return (
    <li className="list-group-item d-flex justify-content-between favourite">
      <span>{name}</span>
      <input className="views" type="number" defaultValue={views} />
      <div>
        {favourite ? (
          <button type="button">
            <i className="fas fa-star "></i>
          </button>
        ) : (
          ""
        )}
        <button
          onClick={onFavourite}
          type="button"
          className="btn-cookie btn-sm"
        >
          <i className="fa-solid fa-thumbs-up"></i>
        </button>
        <button onClick={onDelete} type="button" className="btn-trash btn-sm">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

// class MovieListItem extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = { favourite: false };
//   // }
//   // onFavourite() {
//   //   this.setState(({ favourite }) => ({ favourite: !favourite }));
//   // }

//   render() {
//     const { name, views, onDelete } = this.props;
//     const { favourite } = this.state;

//     return (
//       <li className="list-group-item d-flex justify-content-between favourite">
//         <span>{name}</span>
//         <input className="views" type="number" defaultValue={views} />
//         <div>
//           {favourite ? (
//             <button type="button">
//               <i className="fas fa-star "></i>
//             </button>
//           ) : (
//             ""
//           )}
//           <button
//             onClick={() => this.onFavourite()}
//             type="button"
//             className="btn-cookie btn-sm"
//           >
//             <i className="fa-solid fa-thumbs-up"></i>
//           </button>
//           <button onClick={onDelete} type="button" className="btn-trash btn-sm">
//             <i className="fas fa-trash"></i>
//           </button>
//         </div>
//       </li>
//     );
//   }
// }

// const MovieListItem = ({ name, views }) => {
//   return (
//     <li className="list-group-item d-flex justify-content-between favourite">
//       <span>{name}</span>
//       <input className="views" type="number" defaultValue={views} />
//       <div>
//         <button type="button" className="btn-cookie btn-sm">
//           <i className="fas fa-cookie"></i>
//         </button>
//         <button type="button" className="btn-trash btn-sm">
//           <i className="fas fa-trash"></i>
//         </button>
//         <button className="star" type="button">
//           <i className="fas fa-star "></i>
//         </button>
//       </div>
//     </li>
//   );
// };

export default MovieListItem;
