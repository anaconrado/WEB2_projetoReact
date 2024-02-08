import React, { useEffect, useState } from "react";

import styles from "./ErrorMessage.module.css"

export default function ErrorMessage({ message }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (message) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <>
            {isVisible && (
                <span className={styles.errorSpan}>
                    {message}
                </span>
            )}
        </>
    );
}
