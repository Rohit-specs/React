import { Fragment, useState } from "react"

function UseState() {
    const initialCount = 0
    const finalCount = 10
    const [state, setState] = useState(initialCount)
    const updateCounter = (change) => {
        setState(prev => {
            const newValue = prev + change;
            if (newValue > finalCount) {
                alert(`You can't increase above ${finalCount}`);
                return prev;
            }
            if (newValue < initialCount) {
                alert(`You can't decrease below ${initialCount}`);
                return prev;
            }
            return newValue;
        });
    };
    return (
        <Fragment>
            <div className="fs-1 mb-2">Counter via useState</div>
            <h1 className=" display-1 fw-bold">{state}</h1>
            <div className="d-flex justify-content-center gap-2">
                <button className="fs-4 btn btn-success" onClick={() => updateCounter(+1)}>Increment +1</button>
                <button className="fs-4 btn btn-primary" onClick={() => updateCounter(-1)}>Decrease -1</button>
                <button className="fs-4 btn btn-success" onClick={() => updateCounter(+2)}>Increment +2</button>
                <button className="fs-4 btn btn-primary" onClick={() => updateCounter(-2)}>Decrease -2</button>
                {/* <button className="fs-4 btn btn-success" onClick={() => setState(prev => Math.min(finalCount, prev + 1))}>Increment +1</button>
                <button className="fs-4 btn btn-primary" onClick={() => setState(prev => Math.max(initialCount, prev - 1))}>Decrease -1</button>
                <button className="fs-4 btn btn-success" onClick={() => setState(prev => Math.min(finalCount, prev + 2))}>Increment +2</button>
                <button className="fs-4 btn btn-primary" onClick={() => setState(prev => Math.max(initialCount, prev - 2))}>Decrease -2</button> */}
                <button className="fs-4 btn btn-danger" onClick={() => setState(initialCount)}>RESET</button>
            </div>
        </Fragment>
    )
}
export default UseState