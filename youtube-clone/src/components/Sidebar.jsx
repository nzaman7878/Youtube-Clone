import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Sidebar() {
    const isMenuOpen = useSelector(state => state.app.isMenuOpen); 
    if (!isMenuOpen) return null;
    
    return (
        <div className="p-5 shadow-lg w-72 bg-gray-900 text-white">
            <ul className="space-y-4">
                <li className="text-gray-400 hover:text-white">
                    <Link to="/">Home</Link>
                </li>
                <li className="text-gray-400 hover:text-white">Shorts</li>
                <li className="text-gray-400 hover:text-white">Videos</li>
                <li className="text-gray-400 hover:text-white">Live</li>
            </ul>
            <h1 className="font-bold text-xl mt-6 mb-2">Subscriptions</h1>
            <ul className="space-y-2">
                <li className="text-gray-400 hover:text-white">Music</li>
                <li className="text-gray-400 hover:text-white">Sports</li>
                <li className="text-gray-400 hover:text-white">Gaming</li>
                <li className="text-gray-400 hover:text-white">Movies</li>
                <li className="text-gray-400 hover:text-white">News</li>
            </ul>
            <h1 className="font-bold text-xl mt-6 mb-2">Watch Later</h1>
            <ul className="space-y-2">
                <li className="text-gray-400 hover:text-white">Music</li>
                <li className="text-gray-400 hover:text-white">Sports</li>
                <li className="text-gray-400 hover:text-white">Gaming</li>
                <li className="text-gray-400 hover:text-white">Movies</li>
                <li className="text-gray-400 hover:text-white">News</li>
            </ul>
            <h1 className="font-bold text-xl mt-6 mb-2">Explore</h1>
            <ul className="space-y-2">
                <li className="text-gray-400 hover:text-white">Trending</li>
                <li className="text-gray-400 hover:text-white">Music</li>
                <li className="text-gray-400 hover:text-white">Movies</li>
                <li className="text-gray-400 hover:text-white">Live</li>
                <li className="text-gray-400 hover:text-white">Gaming</li>
                <li className="text-gray-400 hover:text-white">News</li>
                <li className="text-gray-400 hover:text-white">Sports</li>
                <li className="text-gray-400 hover:text-white">Learning</li>
                <li className="text-gray-400 hover:text-white">Fashion&Beauty</li>
            </ul>
        </div>
    );
}

export default Sidebar;
