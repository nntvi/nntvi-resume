import { useEffect, useState } from "react";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="preloader" style={{ display: loading ? "block" : "none" }}>
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="spinner">
            <div className="double-bounce1" />
            <div className="double-bounce2" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PreLoader;
