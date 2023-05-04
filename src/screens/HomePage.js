import React, { useEffect } from "react";
// import pizzas from "../items";
import Pizza from "../components/Pizza";

import { useDispatch, useSelector } from "react-redux";
import { getAllChickens } from "../actions/chickenAction";
import Loading from "../components/Loading";
import Error from "../components/Error";

function HomePage() {
  const dispatch = useDispatch();
  const pizzasstate = useSelector((state) => state.getAllChickensReducer);
  console.log(pizzasstate);
  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllChickens());
  }, []);

  return (
    <>
      <div className="row">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="something went wrong" />
        ) : (
          pizzas?.pizzas?.map((pizza, i) => {
            return (
              <div className="col-md-4" key={i} style={{ marginTop: -30 }}>
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default HomePage;
