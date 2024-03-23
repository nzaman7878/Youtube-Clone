import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Sidebar() {
    const isMenuOpen = useSelector(state => state.app.isMenuOpen); 
    if (!isMenuOpen) return null;
    
    return (
        <div className="p-5 shadow-lg w-48">
            <ul>
               <Link to="/">Home</Link>
                
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>
            <h1 className="font-bold pt-5">Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
                <li>News</li>
            </ul>
            <h1 className="font-bold pt-5">Watch Later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
                <li>News</li>
            </ul>
            <h1 className="font-bold pt-5">Explore</h1>
            <ul>
                <li>Trending</li>
                <li>Music</li>
                <li>Movies</li>
                <li>Live</li>
                <li>Gaming</li>
                <li>News</li>
                <li>Sports</li>
                <li>Learning</li>
                <li>Fashion&Beauty</li>
            </ul>
        </div>
    );
}

export default Sidebar;
