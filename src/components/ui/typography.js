import clsx from 'clsx';
import styles from './typography.module.scss';

function H2Default({children, className = null}) {
    return (
        <h2 className={clsx(className, styles.H2Default)}>
            {children}
        </h2>
    )
}

function H2LowEmphasis({children, className = null}) {
    return (
        <h2 className={clsx(className, styles.H2LowEmphasis)}>
            {children}
        </h2>
    )
}

function H2HighEmphasis({children, className = null}) {
    return (
        <h2 className={clsx(className, styles.H2HighEmphasis)}>
            {children}
        </h2>
    )
}

function P1Default({children, className = null}) {
    return (
        <p className={clsx(className, styles.P1Default)}>
            {children}
        </p>
    )
}

function P1LowEmphasis({children, className = null}) {
    return (
        <p className={clsx(className, styles.P1LowEmphasis)}>
            {children}
        </p>
    )
}

export {H2Default, H2LowEmphasis, H2HighEmphasis, P1Default, P1LowEmphasis}