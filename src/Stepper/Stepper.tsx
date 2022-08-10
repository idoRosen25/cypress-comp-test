import { useState } from "react";

export const Stepper = ({ initCount = 0 }) => {
    const [count, setCount] = useState(initCount);

    return (
        <div>
            <button aria-label="decrement" onClick={() => setCount(count - 1)}>
                -
            </button>
            <span data-cy="counter">{count}</span>
            <button aria-label="increment" onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    )
}