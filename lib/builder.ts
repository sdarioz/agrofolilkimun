import { builder } from '@builder.io/sdk';

// Initialize the SDK with the public API key from environment variables.
// The non-null assertion (!) is used because this variable is essential for the application to function.
builder.init(process.env.BUILDER_PUBLIC_KEY!);

export { builder };
