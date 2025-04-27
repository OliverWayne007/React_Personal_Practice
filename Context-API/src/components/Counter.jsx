import { useContext } from "react";
import { Context } from "../../Context";

function Counter()
{
    const { countContext , setCountContext } = useContext(Context);

    return (
        <div>
            <button onClick={ () => { setCountContext(countContext + 1) } }> Increment </button>
        </div>
    )

}

export default Counter;