import { MouseEventHandler } from "react";

export type ButtonType = {
    action?: MouseEventHandler<HTMLButtonElement>;
    style?: string;
    disabled?: boolean;
};

function Button({ button, children }: { button?: ButtonType, children?: React.ReactElement }) {
    return (
        <button onClick={button?.action} className={`flex justify-center items-center rounded-full duration-300 focus:duration-0 ${button?.style}`} disabled={button?.disabled}>
            {children}
        </button>
    )
}

export default Button