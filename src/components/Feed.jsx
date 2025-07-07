import { useEffect, useState } from "react";
import useFeed from "./hooks/useFeed";
import { useSelector } from "react-redux";

const Feed = () => {
  const { getFeed, isLoading, error, count } = useFeed();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);
  useEffect(() => {
    getFeed(page, limit);
  }, [page, limit]);
  const feed = useSelector((store) => store.feed);
  if (isLoading) return <div> Loading...</div>;
  if (error) return <div>Unable to load profiles..</div>;
  return (
    <div>
      {count} profile's found
      <div className="flex">
        {feed?.data?.map((profile) => {
          return (
            <div
              className="border border-solid border-white w-[250px]"
              key={profile._id}
            >
              <div>Firstname: {profile.firstName}</div>
              <div>LastName: {profile.lastName}</div>
              <div>Age: {profile.age}</div>
              <div>About: {profile.about}</div>
              <div className="flex space-x-25">
                 
                <button className="cursor-pointer border border-amber-400 bg-green-500">
                  Accept
                </button>
                <button className="cursor-pointer border border-amber-400 bg-red-500">
                  Reject
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
