import { getDiscover, getGenreList, getTrending } from "@/Redux/Slices/movies";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Catalogue = () => {
  const dispatch = useDispatch();
  const  discover  = useSelector(({ movies }) => movies);

  const fetchData = async () => {
    await dispatch(getGenreList());
    await dispatch(getTrending());
    await dispatch(getDiscover());
  };
  useEffect(() => {
    fetchData();
  });

  console.log(discover);

  return <div>Catalogue</div>;
};

export default Catalogue;
