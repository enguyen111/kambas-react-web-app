function ImpliedReturn(){

    const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    return <p>{fourTimesFive}</p>;

}
export default ImpliedReturn