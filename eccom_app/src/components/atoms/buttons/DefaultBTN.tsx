import type { DefaultBTNInter } from "../../../types/DefaultBTNInter";

const DefaultBTN: React.FC<DefaultBTNInter>= ({
    btnText,
    clickedFun,
    disabled
}) => {

    return (
        <button
            onClick={clickedFun}
            disabled={disabled}
        >
            {btnText}
        </button>
    )
}

export default DefaultBTN;