import { useEffect, useState } from "react";
import { useKey } from "./useKey";

export const useSecretCode = (_secretCode: string[]) => {
    const [count, setCount] = useState(0);
    const [success, setSuccess] = useState(false);
    const key = useKey();

    useEffect(() => {
        if (key == null) return;
        if (key !== _secretCode[count]) {
            setCount(0);
            return;
        }

        setCount((state) => state + 1);
        if (count + 1 === _secretCode.length) {
            setSuccess(true);
        }
    }, [key]);

    return success;
};