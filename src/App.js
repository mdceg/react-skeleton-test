import * as React from 'react';
import './style.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import useFetch from './hooks/useFetch.js';

export default function App() {
  const { data, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/albums',
    []
  );

  return loading ? (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Skeleton /*height={30}*/ count={30} className="load" />
    </SkeletonTheme>
  ) : (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}
