import React, { useId } from "react";

function Counter({ className = "" }, ref) {
  const id = useId();
  return (
    <div className="w-full mb-4 " ref={ref}>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select a number:
      </label>
      <input
        type="number"
        aria-describedby="helper-text-explanation"
        className="border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="0"
        required
        id={id}
        ref={ref}
      />
    </div>
  );
}

export default React.forwardRef(Counter)
