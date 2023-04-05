import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Atomic Habits
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      James Clear, the author of “Atomic Habits”, 
      has an excellent blog on all things habits, routines and bettering yourself.
       I love his approach because he does a lot of research and still keeps it interesting.
        Atomic Habits was a great read as well if you want practical tips for creating lasting habits. 
        His emails are one of my favorites to open. Get on his list.
      </p>
    </div>
  );
}
