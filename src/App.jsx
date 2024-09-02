import { useState } from "react";
import "./App.css";
import Header from "./header/Header";
import InputFild from "./inputfild/InputFild";
import PostList from "./postList/PostList";
// import Nolist from "./postList/Nolist";
import TotalCount from "./totalcount/TotalCount";

function App() {
	const data = [
		"송도센터럴파크",
		"파주 프로방스 / 헤이리 마을",
		"춘천 소양강 스카이워크",
	];
	let [list] = useState(data);

	return (
		<>
			<Header />
			<InputFild />
			<TotalCount list={list} />
			{/* <Nolist /> */}
			<PostList list={list} />
		</>
	);
}

export default App;
