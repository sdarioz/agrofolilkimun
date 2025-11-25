'use client';
import { BuilderComponent, useIsPreviewing } from '@builder.io/sdk-react';
import { builder } from '@builder.io/sdk';
import { notFound } from 'next/navigation';
import DefaultErrorPage from 'next/error';

// Initialize the Builder SDK with your public API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_PUBLIC_KEY!);

interface BuilderPageProps {
  content: any;
}

export function RenderBuilderContent({ content }: BuilderPageProps) {
  const isPreviewing = useIsPreviewing();

  if (content) {
    return <BuilderComponent model="page" content={content} />;
  }

  if (isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  notFound();
}
