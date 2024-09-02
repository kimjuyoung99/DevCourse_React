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
	const [lists, setList] = useState(data);
  //const로 선언해도 괜찮다. useState를 사용할 때 반환되는 
  //상태변수(list)와 설정자 함수(setList)는 절대 직접적으로 할당되지 않는다!
  //불변성(Immutability):
//React에서는 상태를 직접 수정하지 않고, 항상 새로운 상태 객체를 생성하여 업데이트

	return (
		<>
			<Header />
			<InputFild setList={setList}/>
			<TotalCount lists={lists} />
			{/* <Nolist /> */}
			<PostList lists={lists} />
		</>
	);
}

export default App;
