import React from "react";
import { Link } from 'react-router-dom';
import './Photo.scss';

const Photo = ({post, i, comments, increment, decrement}) => {
    return (
        <figure className="photo">
            <div className="photo-outer">
                <Link to={`/view/${post.code}`}>
                    <img src={post.display_src} alt={post.caption} />
                </Link>
            </div>
            <figcaption>
                <p>{post.caption}</p>
                <div className="control-buttons">
                    <button onClick={(e) => {e.target.classList.contains("liked") ? (decrement(i), e.target.classList.remove("liked")) : (increment(i), e.target.classList.add("liked")) }}  className="likes">&hearts; {post.likes}</button>
                    <Link className="button" to={`/view/${post.code}`}>
                        <span className="comment-count">
                            <span className="speech-bubble"></span>
                            {comments[post.code] ? comments[post.code].length : 0}
                        </span>
                    </Link>
                </div>
            </figcaption>
        </figure>
    )
}

export default Photo;
