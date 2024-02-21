import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import Classes from "./Classes/index";
import Styles from "./Styles/index"
import ConditionalOutput from "./ConditionalOutput/index";
import Highlight from "./Highlight";
import Add from "./Add";
import TodoList from "./todos/TodoList";
function Assignment3() {
    return (
        <div>
            <h1>Assignment 3</h1>
            <TodoList/>
            <Add a={3} b={4}/>
            <br/>
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>
            <JavaScript/>
            <PathParameters/>
            <Classes/>
            <Styles/>
            <ConditionalOutput/>
        </div>
    );
}
export default Assignment3;