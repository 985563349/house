'use client';

import { useEffect, useRef } from 'react';

export type GitHubGistEmbedProps = {
  id: string;
};

const GitHubGistEmbed: React.FC<GitHubGistEmbedProps> = (props) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const doc = iframeRef.current?.contentDocument ?? iframeRef.current?.contentWindow?.document;
    const id = iframeRef.current?.dataset.id;

    const gistLink = `https://gist.github.com/${id}.js`;
    const gistScript = `<script type="text/javascript" src="${gistLink}"></script>`;
    const styles = `<style>*{font-size: 12px;}</style>`;
    const elementId = `gist-${id}`;
    const resizeScript = `onload="parent.document.getElementById('${elementId}').style.height=document.body.scrollHeight + 'px'"`;
    const iframeHtml = `<html><head><base target="_parent">${styles}</head><body ${resizeScript}>${gistScript}</body></html>`;

    doc?.open();
    doc?.writeln(iframeHtml);
    doc?.close();
  }, []);

  return <iframe ref={iframeRef} id={`gist-${props.id}`} data-id={props.id} className="w-full" />;
};

export default GitHubGistEmbed;
