# next.js back/forward button errors

This repo is meant to demonstrate a bug in Next.js.

```
git clone https://github.com/jaredpalmer/next-back-button-error.git newProject
cd newProject
yarn
yarn start
```

Open up your browser console. Click a link in the list, go back to the '/', then go forward once more.
Notice how the param `id` is undefined in your GET requests?

hmm...
