'use client';

export default function ContentError({ error }: { error: Error }) {
  return (
    <div>
      <h1>콘텐츠 로딩 중 에러 발생</h1>
      <p>{error.message}</p>
    </div>
  );
}
