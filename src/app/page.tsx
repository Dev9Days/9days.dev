import { redirect } from 'next/navigation';

export default function Home() {
  redirect(encodeURI('/posts/소개'));
}
