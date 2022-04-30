import { IUserContext } from "../types";
import "../styles/userdetail.css"

export default function UserDetails ({ usercontext }: { usercontext: IUserContext }) {
    const { avatar_url, name, bio, location, twitter_username, html_url } = usercontext.userInfo;
    return (
        <>
        <div className="userinfo">
          <img
            height={200}
            width={200}
            className="image"
            src={avatar_url}
            alt="User Avatar"
          />
          <div className="userdetails">
            <h2>{name}</h2>
            <p>{bio}</p>
            <p>{location}</p>
            <a href={`https://twitter.com/${twitter_username}`}>
                {twitter_username && `Twitter: https://twitter.com/
                ${twitter_username}`}
            </a>
          </div>
        </div>
        <a className="githuburl" href={html_url}>{html_url}</a>
        </>
    );
}