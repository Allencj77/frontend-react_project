import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Atomic Habits
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Chris J Allen
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
        James Clear is a writer and speaker focused on habits, decision making, and continuous improvement.
         He is the author of the no. 1 New York Times bestseller, Atomic Habits.
          The book has sold over 5 million copies worldwide and has been translated into more than 50 languages.

          <br />
          <br />
          Clear is a regular speaker at Fortune 500 companies and his work has been featured in places like Time magazine, the New York Times, the Wall Street Journal and on CBS This Morning.
           His popular "3-2-1" email newsletter is sent out each week to more than 1 million subscribers.
            You can learn more and sign up at jamesclear.com.
        </p>
      </div>
    </div>
  );
}
