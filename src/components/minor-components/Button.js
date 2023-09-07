import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const Button = (props) => {
    return (
        <Link to={props.goto}>
            <button className="w-24 p-3 border-2 text-xl text-textColor bg-primaryColor hover:bg-primaryColorHover rounded-full text-center">
                {props.type}
            </button>
        </Link>
    )
}

export const ButtonLink = (props) => {

    const nevigate = useNavigate();

    const handleBrand = async (goto) => {
        try {
          nevigate(`/brand/${goto.toString()}`, { state: { brand: goto } });
        }
        catch (e) {
        }
      }

    return (
        <button onClick={() => handleBrand(props.goto.toLowerCase())} className="w-24 p-2 border-2 text-xl text-textColor bg-primaryColor hover:bg-primaryColorHover rounded-lg text-center">
            {props.type}
        </button>
    )
}