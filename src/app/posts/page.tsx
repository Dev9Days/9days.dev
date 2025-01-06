import { redirect } from 'next/navigation';

export default function Posts() {
  redirect(encodeURI('/posts/소개'));
}
