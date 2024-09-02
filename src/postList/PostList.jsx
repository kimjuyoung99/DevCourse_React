import "./list.css";
import List from "./List";

export default function PostList({ list }) {
	return (
		<ul className="postList mw">
			<List />
			<List />
			<List />
			<List />
			<List />
		</ul>
	);
}
