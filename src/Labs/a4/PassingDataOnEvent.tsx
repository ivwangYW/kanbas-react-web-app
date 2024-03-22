const add = (a: number, b: number) => {
    alert(`${a} + ${b} = ${a + b}`);
    };
function PassingDataOnEvent() {
    return (
    // function expects a and b
    <div>
<h2>Passing Data on Event</h2>
<button onClick={() => add(2, 3)}   // use this syntax
// onClick={add(2, 3)}              // and not this syntax. Otherwise you risk creating an infinite loop
className="btn btn-primary">        
Pass 2 and 3 to add()
</button>
</div>
);
}
export default PassingDataOnEvent;