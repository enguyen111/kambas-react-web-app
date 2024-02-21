function FunctionDestructing() {
    const add = (a: number, b: number) => a + b;
    const multiply = (obj: {a: number; b: number}) => obj.a * obj.b;
    /**
     * const a = obj.a
     * const b = obj.b
     *
     * return a * b
     *
     * Using Destructing
     * const {a,b} = obj
     *
     * return a * b
     *
     * OR Destructing in parameter list
     *
     * const multiply = ({a,b}: {a: number; b: number}) => obj.a * obj.b;
     *
     * Don't need return because the body is 1 line
     */
    const sum = add(1, 2);
    const mult = multiply({a: 2, b: 3});
    const subtract = ({ a, b }: { a: number; b: number }) => a - b;
    const difference = subtract({ a: 4, b: 2 });
    return (
        <div>
            <h2>Function Destructing</h2>
            const add = (a, b) =&gt; a + b;<br />
            const sum = add(1, 2);<br />
            const subtract = (&#123; a, b &#125;) =&gt; a - b;<br />
            const difference = subtract(&#123; a: 4, b: 2 &#125;);<br/>
            sum = {sum}<br />
            difference = {difference}
            mult = {mult}
        </div>
    );}
export default FunctionDestructing;