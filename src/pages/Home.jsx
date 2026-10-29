import React from 'react';
import { pagesContent } from '../data/pagesContent.js';

export function Home() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: pagesContent.home }}
      style={{ display: 'contents' }}
    />
  );
}
