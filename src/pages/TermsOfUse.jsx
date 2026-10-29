import React from 'react';
import { pagesContent } from '../data/pagesContent.js';

export function TermsOfUse() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: pagesContent.termsOfUse }}
      style={{ display: 'contents' }}
    />
  );
}
