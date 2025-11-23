'use client';
import { Builder } from '@builder.io/sdk';
import { Content } from '@builder.io/sdk-react';
import dynamic from 'next/dynamic';


// Re-export Content for use in the page component
export { Content };

// Dynamically import all UI components.
// The paths must match your new project structure.
const BlogPosts = dynamic(() => import('@/components/sections/BlogPosts'));
const MainPost = dynamic(() => import('@/components/sections/MainPost'));
const Faq = dynamic(() => import('@/components/sections/Faq'));
const Footer = dynamic(() => import('@/components/sections/Footer'));
const Header = dynamic(() => import('@/components/sections/Header'));
const Hero = dynamic(() => import('@/components/sections/Hero'));
const ImageWithParagraph = dynamic(() => import('@/components/sections/ImageWithParagraph'));
const Logos = dynamic(() => import('@/components/sections/Logos'));
const NewSection = dynamic(() => import('@/components/sections/NewSection'));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'));

// Register each component with a unique name and define its editable inputs.
// The 'inputs' configuration should be defined based on each component's props.
Builder.registerComponent(BlogPosts, { name: 'Blog Posts', inputs: [] });
Builder.registerComponent(MainPost, { name: 'Main Post', inputs: [] });
Builder.registerComponent(Faq, { name: 'FAQ', inputs: [] });
Builder.registerComponent(Footer, { name: 'Footer', inputs: [] });

Builder.registerComponent(Header, {
  name: 'Header',
  // Example of inputs for the Header nav items
  inputs: [{ name: 'navItems', type: 'list', subFields: [{ name: 'label', type: 'string' }, { name: 'href', type: 'url' }] }]
});

Builder.registerComponent(Hero, { name: 'Hero', inputs: [] });
Builder.registerComponent(ImageWithParagraph, { name: 'Image With Paragraph', inputs: [] });
Builder.registerComponent(Logos, { name: 'Logos', inputs: [] });
Builder.registerComponent(NewSection, { name: 'New Section', inputs: [] });
Builder.registerComponent(Testimonials, { name: 'Testimonials', inputs: [] });
