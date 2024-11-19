import React from 'react';

interface IProps {
  params: {
    name: string;
  };
}
async function PostPage({ params }: IProps) {
  const { name } = await params;
  return <div>{name}</div>;
}
export default PostPage;

export async function generateMetadata({ params }: IProps) {
  const { name } = await params;
  return {
    title: `9days.dev - ${name}`,
  };
}
