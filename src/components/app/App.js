import React, { useContext, useEffect, useState } from "react";
import AppInfo from "../appInfo/AppInfo";
import SearchPanel from "../searchPanel/SearchPanel";

import "./App.css";
import MovieList from "../movieList/MovieList";
import MovieAddForm from "../movieAddForm/MovieAddForm";
import { Context } from "../../context";

const App = () => {
  const [isLoading, setisLoading] = useState(false);
  // const [filter, setFilter] = useState("all");
  const { dispatch } = useContext(Context);

  // const filterHandler = (arr, filter) => {
  //   switch (filter) {
  //     case "popular":
  //       return arr.filter((c) => c.favourite);
  //     case "mostViewed":
  //       return arr.filter((c) => c.views > 500);
  //     default:
  //       return arr;
  //   }
  // };
  // const updateFilterHandler = (filter) => setFilter({ filter });

  useEffect(() => {
    setisLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5")
      .then((response) => response.json())
      .then((json) => {
        const newArr = json.map((item) => ({
          id: item.id,
          name: item.title,
          views: item.id * 100,
          favourite: false,
        }));
        dispatch({ type: "GET_DATA", payload: newArr });
      })
      .catch((err) => console.log(err))
      .finally(() => setisLoading(false));
  }, []);

  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className="searchPanel">
          <SearchPanel />
          {/* <AppFilter updateFilterHandler={updateFilterHandler} /> */}
        </div>
        {isLoading && "...loading"}
        <MovieList />
        <MovieAddForm />
      </div>
    </div>
  );
};

// class App extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   // this.state = {
//   //   //   data: [
//   //   //     {
//   //   //       id: 1,
//   //   //       name: "Avengers",
//   //   //       views: 918,
//   //   //       favourite: false,
//   //   //     },
//   //   //     {
//   //   //       id: 2,
//   //   //       name: "Peaky Blinders",
//   //   //       views: 555,
//   //   //       favourite: true,
//   //   //     },
//   //   //     {
//   //   //       id: 3,
//   //   //       name: "Whiplash",
//   //   //       views: 400,
//   //   //       favourite: false,
//   //   //     },
//   //   //   ],
//   //   //   term: "",
//   //   //   filter: "all",
//   //   // };
//   // }

//   // onDelete = (id) => {
//   //   this.setState(({ data }) => {
//   //     const newArr = data.filter((c) => c.id !== id);

//   //     return {
//   //       data: newArr,
//   //     };
//   //   });
//   // };

//   // addForm = (item) => {
//   //   this.setState(({ data }) => {
//   //     const newArr = [...data, { ...item, id: 4 }]; // ID can be generated in database
//   //     return {
//   //       data: newArr,
//   //     };
//   //   });
//   // };

//   // searchHandler = (arr, term) => {
//   //   if (arr.length === 0) {
//   //     return arr;
//   //   }
//   //   return arr.filter((item) => item.name.indexOf(term) > -1);
//   // };

//   // updateTermHandler = (term) => this.setState({ term });

//   // filterHandler = (arr, filter) => {
//   //   switch (filter) {
//   //     case "popular":
//   //       return arr.filter((c) => c.favourite);
//   //     case "mostViewed":
//   //       return arr.filter((c) => c.views > 500);
//   //     default:
//   //       return arr;
//   //   }
//   // };

//   // updateFilterHandler = (filter) => this.setState({ filter });
//   render() {
//     const { data, term } = this.state;
//     const allMoviesCount = data.length;
//     const visibleData = this.searchHandler(data, term);
//     return (
//       <div className="app font-monospace">
//         <div className="content">
//           <AppInfo allMoviesCount={allMoviesCount} />
//           <div className="searchPanel">
//             <SearchPanel updateTermHandler={this.updateTermHandler} />
//             <AppFilter updateFilterHandler={this.updateFilterHandler} />
//           </div>
//           <MovieList data={visibleData} onDelete={this.onDelete} />
//           <MovieAddForm addForm={this.addForm} />
//         </div>
//       </div>
//     );
//   }
// }

export default App;

// const arr = [
//   {
//     id: 1,
//     name: "Avengers",
//     views: 918,
//     favourite: false,
//   },
//   {
//     id: 2,
//     name: "Peaky Blinders",
//     views: 555,
//     favourite: true,
//   },
//   {
//     id: 3,
//     name: "Whiplash",
//     views: 400,
//     favourite: false,
//   },
// ];
