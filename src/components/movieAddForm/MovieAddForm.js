import React, { useContext, useState } from "react";
import "./MovieAddForm.css";
import { Context } from "../../context";

const MovieAddForm = () => {
  const [state, setState] = useState({ name: "", views: "" });
  const { dispatch } = useContext(Context);

  const addFormHandler = (e) => {
    e.preventDefault();
    if (state.name === "" || state.views === "") return;
    const data = { name: state.name, views: state.views };
    dispatch({ type: "ADD_FORM", payload: data });
    setState({ name: "", views: "" });
  };
  const changeHandlerInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className="movieAddForm">
      <h3>Yangi kino qo'shish</h3>
      <form className="add-form d-flex" onSubmit={addFormHandler}>
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Qanday kino"
          name="name"
          onChange={changeHandlerInput}
          value={state.name}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Necchi marta ko'rilgan"
          name="views"
          onChange={changeHandlerInput}
          value={state.views}
        />
        <button type="submit" className="btn btn-outline-dark">
          Submit
        </button>
      </form>
    </div>
  );
};

// class MovieAddForm extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     name: "The ",
//   //     views: "111",
//   //   };
//   // }

//   // addFormHandler = (e) => {
//   //   const { name, views } = this.state;

//   //   e.preventDefault();
//   //   this.props.addForm({
//   //     name: name,
//   //     views: views,
//   //   });
//   //   this.setState({
//   //     name: "",
//   //     views: "",
//   //   });
//   // };

//   // changeHandlerInput = (e) => {
//   //   this.setState({
//   //     [e.target.name]: e.target.value,
//   //   });
//   // };
//   render() {
//     const { name, views } = this.state;

//     return (
//       <div className="movieAddForm">
//         <h3>Yangi kino qo'shish</h3>
//         <form className="add-form d-flex" onSubmit={this.addFormHandler}>
//           <input
//             type="text"
//             className="form-control new-post-label"
//             placeholder="Qanday kino"
//             name="name"
//             onChange={this.changeHandlerInput}
//             value={name}
//           />
//           <input
//             type="number"
//             className="form-control new-post-label"
//             placeholder="Necchi marta ko'rilgan"
//             name="views"
//             onChange={this.changeHandlerInput}
//             value={views}
//           />
//           <button type="submit" className="btn btn-outline-dark">
//             Submit
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

export default MovieAddForm;
