'use client';
import { Builder } from '@builder.io/sdk';
import { Content } from '@builder.io/sdk-react';
import dynamic from 'next/dynamic';

// Re-export Content for use in the page component
export { Content };

// Dynamically import all section components
const BlogPosts = dynamic(() => import('@/components/sections/BlogPosts'));
const Faq = dynamic(() => import('@/components/sections/Faq'));
const Footer = dynamic(() => import('@/components/sections/Footer'));
const Header = dynamic(() => import('@/components/sections/Header'));
const Hero = dynamic(() => import('@/components/sections/Hero'));
const ImageWithParagraph = dynamic(() => import('@/components/sections/ImageWithParagraph'));
const Logos = dynamic(() => import('@/components/sections/Logos'));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'));

// --- Component Registration ---

Builder.registerComponent(Hero, {
  name: 'Hero',
  inputs: [
    { name: 'title', type: 'string', required: true, defaultValue: 'Hero Title' },
    { name: 'description', type: 'longText', required: true, defaultValue: 'Hero description text.' },
    { name: 'image_src', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'], required: true },
    { name: 'image_alt', type: 'string', required: true, defaultValue: 'Hero Image' },
    { name: 'cta1_text', type: 'string', defaultValue: 'Primary Action' },
    { name: 'cta1_href', type: 'url', defaultValue: '/' },
    { name: 'cta2_text', type: 'string', defaultValue: 'Secondary Action' },
    { name: 'cta2_href', type: 'url', defaultValue: '/' },
  ],
});

Builder.registerComponent(Logos, {
  name: 'Logos',
  inputs: [
    { name: 'title', type: 'string', defaultValue: 'Trusted by' },
    {
      name: 'logos',
      type: 'list',
      subFields: [
        { name: 'src', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'], required: true },
        { name: 'alt', type: 'string', required: true, defaultValue: 'Company Logo' },
      ],
    },
  ],
});

Builder.registerComponent(Faq, {
  name: 'Faq',
  inputs: [
    { name: 'title', type: 'string', defaultValue: 'Frequently Asked Questions' },
    {
      name: 'faqs',
      type: 'list',
      subFields: [
        { name: 'question', type: 'string', required: true, defaultValue: 'What is the question?' },
        { name: 'answer', type: 'longText', required: true, defaultValue: 'This is the answer.' },
      ],
    },
  ],
});

Builder.registerComponent(Testimonials, {
  name: 'Testimonials',
  inputs: [
    { name: 'title', type: 'string', defaultValue: 'What our clients say' },
    {
      name: 'testimonials',
      type: 'list',
      subFields: [
        { name: 'text', type: 'longText', required: true },
        { name: 'author_name', type: 'string', required: true },
        { name: 'author_title', type: 'string', required: true },
        { name: 'author_avatar_src', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'] },
      ],
    },
  ],
});

Builder.registerComponent(ImageWithParagraph, {
  name: 'ImageWithParagraph',
  inputs: [
    { name: 'title', type: 'string', required: true },
    { name: 'text', type: 'richText', required: true },
    { name: 'image_src', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'], required: true },
    { name: 'image_alt', type: 'string', required: true },
    { name: 'reverse_layout', type: 'boolean', defaultValue: false },
  ],
});

Builder.registerComponent(BlogPosts, {
  name: 'BlogPosts',
  inputs: [
    { name: 'title', type: 'string', defaultValue: 'Latest Blog Posts' },
    {
      name: 'posts',
      type: 'list',
      subFields: [
        { name: 'title', type: 'string', required: true },
        { name: 'description', type: 'longText', required: true },
        { name: 'href', type: 'url', required: true },
        { name: 'image_src', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'] },
      ],
    },
  ],
});

// Register Header and Footer if they will be managed in Builder
Builder.registerComponent(Header, {
  name: 'Header',
  inputs: [
    {
      name: 'navItems',
      type: 'list',
      subFields: [
        { name: 'label', type: 'string', required: true },
        { name: 'href', type: 'url', required: true },
      ],
    },
  ],
});

Builder.registerComponent(Footer, {
  name: 'Footer',
  inputs: [
    // Define inputs for your footer props here, e.g., link columns
  ],
});
