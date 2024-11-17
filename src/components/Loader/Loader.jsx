import React, { useEffect, useState } from "react";
import "./Loader.css";

export const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

  return (
    <>
        {loading ? (
            <div className="preloader">
                <div className="loader"></div>
            </div>
        ) : null}
    </>
  );
};