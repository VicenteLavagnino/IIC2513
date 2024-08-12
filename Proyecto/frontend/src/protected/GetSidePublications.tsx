import { useEffect, useState } from "react";
import axios from "axios";
import { formatDistance, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import { useAuth } from "../auth/AuthContext";
import SidePost from "../components/SidePost";

interface Publication {
  id: number;
  text: string;
  image: string;
  madeByUser: string;
  madeToUser: string;
  createdAt: string;
  updatedAt: string;
}

const GetSidePublications = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    const config = {
      method: "get",
      url: `${import.meta.env.VITE_BACKEND_URL}/publications/self/${localStorage.getItem("username")}`,
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
    <div className="post-container overflow-y-auto max-h-[calc(90vh-175px)]">
      {publications.map((post, index) => (
        <SidePost
          key={index}
          friend={post.madeByUser}
          username={post.madeToUser}
          content={post.text}
          timeAgo={getTimeAgo(post.createdAt)}
        />
      ))}
    </div>
  );
};

export default GetSidePublications;
