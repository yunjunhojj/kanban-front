import { useState } from "react";

/**
 * input type="text"와 textarea를 가정으로 사용하는 custom hook입니다.
 */
const useInput = (initialText = "") => {
  const [inputValue, setInputValue] = useState(initialText);
  /**
   * 제어된 input
   * @code `onChange={(e) => handleOnChange(e)}`
   */
  const handleOnChange = (e) => setInputValue(e.target.value);

  // 리셋 함수
  const resetInput = setInputValue("");

  return [inputValue, handleOnChange, resetInput];
};

export default useInput;
