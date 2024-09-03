import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header/Header'
import PostList from './postList/PostList'
import TotalCount from './totalcount/TotalCount'
import InputFild from './inputfild/InputFild'
import Nolist from './postList/Nolist'

function App() {
  // const data = [
    // "강남",
    // "건대",
    // "혜화",
    // "성수",
    // "여의도",
  // ];
	const data = JSON.parse(localStorage.getItem('tripLists')) || [];
	const [lists, setList] = useState(data);
  //const로 선언해도 괜찮다. useState를 사용할 때 반환되는 
  //상태변수(list)와 설정자 함수(setList)는 절대 직접적으로 할당되지 않는다!
  //불변성(Immutability):
//React에서는 상태를 직접 수정하지 않고, 항상 새로운 상태 객체를 생성하여 업데이트

	return (
		<>
      <Header />
      <InputFild setList={setList}/>
      <TotalCount lists={lists}/>
      {lists.length === 0 ? (
        <Nolist /> ) : (
          <PostList lists={lists} setList={setList} />
      )}

      {/* 전달하는 데이터 형식이 왜 다른가? 
      InputFild 컴포넌드는 사용자로부터 새로운 항목을 입력받아 리스트에 추가해야 한다. 
      즉, 수정할 수 있어야 하기 때문에 setList 함수를 전달함으로써 InputFild컴포넌트는 부모 컴포넌트의 상태를 직접 업데이트 할 수 있음 
      lists={lists}는, 단순히 읽고 표시하기만 하면 된다.
      */}
		</>
	);
}

export default App;
