This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

if running locally then start the proxy server by local cross proxy.

if lcp not already installed then install it by: 
```
npm install -g local-cors-proxy
```
then start the proxy server by running 
```
lcp --proxyUrl https://trendrocket-backend.onrender.com
```