"use client"; // This tells Next.js to treat this as a client component

import { Button } from "@/components/Button";
import React from 'react';

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

const downloadResume = async () => {
    try {
      console.log('Downloading resume...');
      const fileUrl = '/ErikWarrenResume.pdf';
      const response = await fetch(fileUrl, { mode: 'cors' });
      console.log('Response:', response);
      if (!response.ok) {
        throw new Error('Failed to download file');
      }
      const blob = await response.blob();
      console.log('Blob:', blob);
      const downloadUrl = window.URL.createObjectURL(blob);
      console.log('Download URL:', downloadUrl);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'ErikWarrenResume.pdf';
      a.rel = 'noopener noreferrer';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

// Example component that triggers the download
const ResumeDownloader: React.FC = () => {
    return (
        <Button onClick={downloadResume} variant="secondary" className="group mt-6 w-full">
            Download CV
            <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
    );
};

export default ResumeDownloader;
