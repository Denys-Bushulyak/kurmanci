import React, { ChangeEvent, useRef, useState } from 'react';
import { useRequest } from 'ahooks';
import data from '../../docs/result.json';

async function getResults(search: string): Promise<typeof data> {
  const pattern = new RegExp(search, 'gi');

  return new Promise((resolve) => {
    const results = data.filter(
      (page) => pattern.test(page.body) || pattern.test(page.title)
    );
    if (results) {
      resolve(results);
    }
  });
}

export function SearchInput() {
  const { data, loading, run } = useRequest(getResults, {
    debounceInterval: 1000,
    manual: true,
  });

  if (loading) {
    return <>Поиск...</>;
  }

  return (
    <>
      <input onChange={(e) => run(e.target.value)} />
      <ul>
        {data?.map((v) => {
          return (
            <li>
              <a href={v.url}>{v.title}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
