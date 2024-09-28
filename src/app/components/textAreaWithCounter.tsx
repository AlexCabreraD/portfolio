import React, { useState, ChangeEvent } from "react";

const TextAreaWithCounter: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
    <div className="relative w-full">
      <textarea
        placeholder="Message*"
        value={message}
        onChange={handleChange}
        className="bg-[#181818] h-[132px] rounded-[5px] pt-2.5 text-top p-[16px] resize-none w-full pr-[60px]"
        maxLength={250}
      />
      <span className="absolute right-4 bottom-3 text-gray-400">
        {message.length}/250
      </span>
    </div>
  );
};

export default TextAreaWithCounter;
