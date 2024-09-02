import "./list.css";
export default function List({ list, setList }) {
	const removeItem = () => {
		setList((prev) => prev.filter((i) => i !== list));
	};
	return (
		<li className="list">
			<p>{list}</p>
			<i className="fa-solid fa-trash" onClick={removeItem}></i>
		</li>
	);
}