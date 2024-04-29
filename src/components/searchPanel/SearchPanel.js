import { useContext, useState } from "react";
import { Context } from "../../context";

const SearchPanel = () => {
  const [term, setTerm] = useState("");
  const { dispatch } = useContext(Context);

  const updateTermHandler = (e) => {
    const term = e.target.value.toLowerCase();
    setTerm(term);
    dispatch({ type: "ON_TERM", payload: term });
  };

  return (
    <div>
      <input
        type="text"
        className="form-control search-input"
        placeholder="Kino qidirish"
        onChange={updateTermHandler}
        value={term}
      />
    </div>
  );
};

// class SearchPanel extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = { term: "" };
//   // }
//   updateTermHandler = (e) => {
//     const term = e.target.value.toLowerCase();
//     this.setState({ term });
//     this.props.updateTermHandler(term);
//   };

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           className="form-control search-input"
//           placeholder="Kino qidirish"
//           onChange={this.updateTermHandler}
//         />
//       </div>
//     );
//   }
// }
// const SearchPanel = () => {
//   return (
//     <div>
//       <input
//         type="text"
//         className="form-control search-input"
//         placeholder="Kino qidirish"
//       />
//     </div>
//   );
// };

export default SearchPanel;
