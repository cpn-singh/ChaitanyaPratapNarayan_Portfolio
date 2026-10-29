import React from 'react';
import { pagesContent } from '../data/pagesContent.js';

export function PrivacyPolicy() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: pagesContent.privacyPolicy }}
      style={{ display: 'contents' }}
    />
  );
}
