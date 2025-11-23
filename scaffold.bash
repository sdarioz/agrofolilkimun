#!/bin/bash

# This script sets up the directory and file structure for the agrofolilkimun Next.js migration.
# Run it inside the root of the freshly initialized Next.js project.

echo "Removing default Next.js page and favicon..."
rm -f app/page.tsx
rm -f public/next.svg
rm -f public/vercel.svg

echo "Creating Builder.io catch-all route..."
mkdir -p app/'[[...slug]]'
touch app/'[[...slug]]'/page.tsx

echo "Creating component directories..."
mkdir -p components/sections
mkdir -p components/ui

echo "Creating empty component files..."
touch components/sections/BlogPosts.tsx
touch components/sections/Faq.tsx
touch components/sections/Footer.tsx
touch components/sections/Header.tsx
touch components/sections/Hero.tsx
touch components/sections/ImageWithParagraph.tsx
touch components/sections/Logos.tsx
touch components/sections/MainPost.tsx
touch components/sections/NewSection.tsx
touch components/sections/Testimonials.tsx
touch components/ui/Icon.tsx
touch components/ui/Slider.tsx
touch components/builder-registry.ts

echo "Creating content and lib directories..."
mkdir -p content/pages
mkdir -p content/blog
mkdir -p lib

echo "Creating placeholder content and config files..."
touch content/pages/home.json
touch content/pages/products.json
touch content/pages/services.json
touch content/blog/example-post.md
touch lib/builder.ts

echo "Creating public asset files..."
mkdir public
touch public/browserconfig.xml
touch public/robots.txt
touch public/site.webmanifest
touch public/sprites.svg
# Note: favicon.ico is usually kept from the Next.js starter

echo "Structure creation complete."
