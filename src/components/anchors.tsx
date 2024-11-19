import React from 'react';

interface IProps {
  content: string;
}
const Anchors = ({ content }: IProps) => {
  console.log(content);
  return <div className="shrink-0 w-60">anchors</div>;
};

export default Anchors;
