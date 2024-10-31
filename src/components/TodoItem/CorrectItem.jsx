import { useState } from "react";

const CorrectItem = ({ item, setKey, data, setData }) => {
  const [text, setText] = useState(item.text);
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        autoFocus={true}
      />
      <button
        onClick={() => {
          setData(
            data.map((element) => {
              if (element.id === item.id) {
                return {
                  ...element,
                  text,
                  correct: false,
                };
              } else {
                return element;
              }
            })
          );
        }}
      >
        save
      </button>
      <button
        onClick={() => {
          setKey("correct", item.id);
        }}
      >
        cancel
      </button>
    </div>
  );
};

export default CorrectItem;
