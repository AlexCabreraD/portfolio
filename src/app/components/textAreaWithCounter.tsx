import React, { ChangeEvent } from "react";

interface TextAreaWithCounterProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  className: string;
}

const TextAreaWithCounter: React.FC<TextAreaWithCounterProps> = ({
  value,
  onChange,
  className,
}) => {
  return (
    <div className={"relative w-full"}>
      <textarea
        placeholder="Message*"
        required
        value={value}
        onChange={onChange}
        className={
          "bg-[#181818] h-[132px] rounded-[5px] pt-2.5 text-top p-[16px] resize-none w-full pr-[60px] " +
          className
        }
        maxLength={250}
      />
      <span className="absolute right-4 bottom-3 text-gray-400">
        {value.length}/250
      </span>
    </div>
  );
};

export default TextAreaWithCounter;
