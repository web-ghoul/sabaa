import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useCurrentPath = (url: string) => {
  const [currentPath, setCurrentPath] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (`/${pathname.split("/")[1]}` === url || pathname === url) {
      setCurrentPath(true);
    }
  }, [currentPath, url, pathname]);

  return { currentPath };
};

export default useCurrentPath;
