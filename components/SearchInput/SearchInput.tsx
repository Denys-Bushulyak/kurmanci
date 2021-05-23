import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useRequest } from 'ahooks';
import data from '../../docs/result.json';
import './style.css';

async function getResults(search: string): Promise<typeof data> {
  const pattern = new RegExp(search, 'gi');

  return new Promise((resolve) => {
    const results = data.filter((page) => pattern.test(page.body));
    if (results) {
      resolve(results);
    } else {
      resolve([]);
    }
  });
}

export function SearchInput() {
  const { data, loading, run } = useRequest(getResults, {
    debounceInterval: 700,
    manual: true,
  });

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length > 1) {
      run(e.target.value);
    }
  }

  return (
    <div className="search">
      <input
        onChange={handleSearch}
        placeholder="Введите сюда слово для поиска"
      />
      <dl>
        {data?.length > 0 &&
          data?.map((v) => {
            return (
              <>
                <dt>
                  <a target="_blank" className="result" href={v.url}>
                    {v.title}
                  </a>
                </dt>
              </>
            );
          })}
        {data && data?.length == 0 && 'Нет результатов'}
      </dl>
    </div>
  );
}
