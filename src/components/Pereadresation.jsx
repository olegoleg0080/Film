import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Pereadresation = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/home");
    }, []);
    return (
        
        <>
            
        </>
    )
}