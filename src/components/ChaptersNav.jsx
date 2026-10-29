import React from 'react';
import { commonContent } from '../data/pagesContent.js';

export function ChaptersNav() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: commonContent.chapters }}
      style={{ display: 'contents' }}
    />
  );
}
