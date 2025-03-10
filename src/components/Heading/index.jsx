import React from 'react';

// Heading component with Tailwind styling
const Heading = ({ text, level = 1 }) => {
  // Set heading tag based on the `level` prop
  const HeadingTag = `h${level}`;

  return (
    <HeadingTag className="font-semibold ml-4 text-gray-800">
      {text}
    </HeadingTag>
  );
};

export default Heading;
