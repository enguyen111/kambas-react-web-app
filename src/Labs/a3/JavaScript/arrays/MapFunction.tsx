function ForLoops() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = (a: number) => a * a;

    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(a => a * a * a);
    return (
        <div>
            <h3>Map Function</h3>
            squares = {squares}
            <br/>
            cubes = {cubes}
        </div>
    );
}

export default ForLoops