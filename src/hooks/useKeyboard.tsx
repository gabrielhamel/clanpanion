import { useEffect, useState } from "react";
import { UAParser } from "ua-parser-js";

export const useKeyboard = () => {
  const [metaKey, setMetaKey] = useState("ctrl");
  const [hasKeyboard, setHasKeyboard] = useState(false);

  useEffect(() => {
    const ua = new UAParser();

    const os = ua.getOS().name;
    const isAppleOS = ["Mac OS", "iOS"].includes(os ?? "");
    if (isAppleOS) {
      setMetaKey("⌘");
    }

    const deviceType = ua.getDevice().type;
    if (!deviceType) {
      setHasKeyboard(true);
    }
  }, []);

  return {
    hasKeyboard,
    metaKey,
  };
};
