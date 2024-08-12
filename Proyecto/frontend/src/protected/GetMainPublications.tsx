import { useEffect, useState } from "react";
import axios from "axios";
import { formatDistance, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import { useAuth } from "../auth/AuthContext";
import MainPost from "../components/MainPost";

interface Publication {
  id: number;
  text: string;
  image: string;
  madeByUser: string;
  madeToUser: string;
  createdAt: string;
  updatedAt: string;
}

const GetMainPublications = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    const config = {
      method: "get",
      url: `${import.meta.env.VITE_BACKEND_URL}/publications/friends/${localStorage.getItem("username")}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((response) => {
        console.log(response.data);
        setPublications(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [token]);

  const getTimeAgo = (createdAt) => {
    const dateFromApi = parseISO(createdAt);
    return formatDistance(dateFromApi, new Date(), {
      addSuffix: true,
      locale: es,
    });
  };

  return (
    <div className="post-container grid grid-cols-1 gap-4 overflow-y-auto max-h-[calc(90vh-190px)] bg-gray-100">
      {publications.map((post, index) => (
        <MainPost
          key={index}
          id={post.id}
          username={post.madeByUser}
          friend={post.madeToUser}
          timeAgo={getTimeAgo(post.createdAt)}
          content={post.text}
        />
      ))}
    </div>
  );
};

export default GetMainPublications;
