import style from "./Button.module.scss";
import PropTypes from "prop-types";
import clsx from "clsx";
function Button({
    children,
    small,
    medium,
    large,
    primary,
    href,
    className = "",
    ...pasProps
}) {
    const Comp = href ? "a" : "button";
    console.log(className);
    
    return (
        <Comp
            {...pasProps}
            href={href}
            className={clsx(style.button , className, {
                [style.primary]: primary,
                [style.small]: small,
                [style.large]: large,
                [style.medium]: medium,
            })}
        >
            {children}
        </Comp>
    );
}
Button.propTypes = {
    children: PropTypes.any.isRequired,
    primary: PropTypes.bool,
    small: PropTypes.bool,
    href: PropTypes.string,
    className: PropTypes.string,
};

export default Button;
