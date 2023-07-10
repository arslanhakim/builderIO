import React from "react";

// Define your component
export const TextImage = ({ text }: any) => {
  return <div>{text}</div>;
};

// Register the component with Builder.io
export const MyComponentBuilder = () => {
  return {
    name: "TextImage",
    component: TextImage,
    inputs: [
      {
        name: "text",
        type: "text",
        defaultValue: "Hello, World!",
      },
    ],
  };
};
