export interface DefaultBTNInter {
    btnText: string
    clickedFun: (event: React.MouseEvent<HTMLButtonElement>) => void,
    disabled?: boolean
}