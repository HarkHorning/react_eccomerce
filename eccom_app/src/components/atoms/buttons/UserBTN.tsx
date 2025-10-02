import type { DefaultBTNInter } from "../../../types/componentInters/DefaultBTNInter";

const UserBTN: React.FC<DefaultBTNInter> = ({
    btnText,
    clickedFun,
    disabled,
    style
}) => {

    return (
        <button
            onClick={clickedFun}
            disabled={disabled}
            className="rounded-full"
                >
            {btnText}
        </button>
    )
}

export default UserBTN;