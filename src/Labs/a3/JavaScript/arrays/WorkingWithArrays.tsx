// @ts-ignore
function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
        functionScoped,   blockScoped,
        constant1,        numberArray1,   stringArray1
    ];
    const todos = [
        <li>Buy Milk</li>,
        <li>Buy Bread</li>,
        <li>Buy Cereal</li>
    ]

    return(
        <div>
            <h3>Working with Arrays</h3>
            functionScoped = {functionScoped}
            <br/>
            blockedScoped = {blockScoped}
            <br/>
            constant1 = {constant1}
            <br/>
            numberArray1 = {numberArray1}
            <br/>
            stringArray1 = {stringArray1}
            <br/>
            <ul>{todos}</ul>
        </div>
    );
}

export default WorkingWithArrays