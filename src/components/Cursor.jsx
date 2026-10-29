import React from 'react';
import { commonContent } from '../data/pagesContent.js';

export function Cursor() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: commonContent.cursor }}
      style={{ display: 'contents' }}
    />
  );
}
