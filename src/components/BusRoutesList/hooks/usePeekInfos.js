import { useState } from "react";

export const usePeekInfos = () => {
  const [peekInfoIds, setPeekInfoIds] = useState([]);

  const togglePeekInfoIds = (id) => {
    let tempPeekInfo = [...peekInfoIds];
    if (tempPeekInfo.includes(id)) {
      tempPeekInfo = tempPeekInfo.filter((peekInfoId) => peekInfoId !== id);
    } else {
      tempPeekInfo.push(id);
    }
    setPeekInfoIds(tempPeekInfo);
  };

  return [peekInfoIds, togglePeekInfoIds];
};
