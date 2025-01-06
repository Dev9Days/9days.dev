import React from 'react';

interface IProps {
  params: Promise<{
    name: string;
  }>;
}

async function PostPage({ params }: IProps) {
  const { name } = await params;
  return <div>{decodeURI(name)}</div>;
}
export default PostPage;

export async function generateMetadata({ params }: IProps) {
  const { name } = await params;
  return {
    title: `9days.dev - ${decodeURI(name)}`,
  };
}
