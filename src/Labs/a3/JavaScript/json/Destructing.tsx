function Destructing() {
    const person = { name: "John", age: 25 };
    const { name, age } = person;
    // This creates two new variables and assigns them the same values as the corresponding property names
    // const name = person.name
    // const age = person.age

    //Braces on right constructs and on left means destruct, destructing is NOT the same as destroying
    const numbers = ["one", "two", "three"];
    //Array destructing is based on position not name
    const [ first, second, third ] = numbers;
    return (
        <div>
            <h2>Destructing</h2>
            <h3>Object Destructing</h3>
            const &#123; name, age &#125; =
            &#123; name: "John", age: 25 &#125;<br /><br />
            name = {name}<br />
            age = {age}
            <h3>Array Destructing</h3>
            const [first, second, third] = ["one","two","three"]<br/><br/>
            first = {first}<br />
            second = {second}<br />
            third = {third}
        </div>
    );
}
export default Destructing;