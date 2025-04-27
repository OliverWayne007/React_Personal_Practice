import { useContext } from "react";
import { Context } from "../../Context";

function Description()
{
    const { countContext } = useContext(Context);

    return (
        <h2> The value of count is : {countContext} </h2>
    )

}

export default Description;