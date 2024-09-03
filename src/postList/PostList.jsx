import "./list.css";
import List from "./List";

export default function ({lists, setList}) {
    console.log("PostList 컴포넌트 들어왔음. lists : ",lists);
    return (
        <ul className="postList mw">
            {lists.map((list, i)=> (
                <List key={i} list={list} setList={setList} index={i}/>
            ))}
        </ul>
    )
};