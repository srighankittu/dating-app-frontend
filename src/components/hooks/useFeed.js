import { useState } from "react";
import { feed } from "../../api/user/user";
import { useDispatch } from "react-redux";
import { addFeedData } from "../../store/feedSlice";
// import { useSelector } from "react-redux";

const useFeed = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  //   const feed = useSelector((state) => state.feed);
  const getFeed = async (page, limit) => {
    try {
      //   if (feed.data.length === 0) return;
      setIsLoading(true);
      setError(null);
      console.log(page, limit);
      const feedData = await feed(page, limit);
      setCount(feedData.data.length); // Use feedData instead of feedInfo
      dispatch(addFeedData(feedData));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { error, isLoading, getFeed, count };
};

export default useFeed;
