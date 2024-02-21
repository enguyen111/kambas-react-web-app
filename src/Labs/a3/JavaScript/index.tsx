import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import BooleanVar from "./variables/BooleanVariables";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ES5Functions from "./functions/ES5Functions";
import ArrowFunctions from "./functions/ArrowFunctions";
import ImpliedReturn from "./functions/ImpliedReturn";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength";
import AddingAndRemovingDataFromArrays from "./arrays/AddingAndRemovingDataFromArrays";
import ForLoops from "./arrays/ForLoops";
import MapFunction from "./arrays/MapFunction";
import JsonStringify from "./json/JsonStringify";
import FindFunction from "./arrays/FindFunction";
import FindIndexFunction from "./arrays/FindIndexFunction";
import FilterFunction from "./arrays/FilterFunction";
import TemplateLiterals from "./string/TemplateLiterals";
import House from "./json/House";
import Spreading from "./json/SpreadOperator";
import FunctionDestructing from "./functions/FunctionDestructing";

function JavaScript() {
    console.log('Hello World!');
    return (
        <div>
            <h1>JavaScript</h1>
            <br/>
            <VariablesAndConstants/>
            <br/>
            <VariableTypes/>
            <br/>
            <BooleanVar/>
            <br/>
            <IfElse/>
            <br/>
            <TernaryOperator/>
            <br/>
            <ES5Functions/>
            <ArrowFunctions/>
            <br/>
            <ImpliedReturn/>
            <br/>
            <WorkingWithArrays/>
            <ArrayIndexAndLength/>
                <AddingAndRemovingDataFromArrays/>
            <ForLoops/>
            <MapFunction/>
            <JsonStringify/>
            <FindFunction/>
                <FindIndexFunction/>
            <FilterFunction/>
            <TemplateLiterals/>
                <House/>
                <Spreading/>
            <FunctionDestructing/>
        </div>
    );
}

export default JavaScript