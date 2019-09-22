# use-suspense-today

> Use React Suspense today

[![NPM](https://img.shields.io/npm/v/use-suspense-today.svg)](https://www.npmjs.com/package/use-suspense-today) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-suspense-today
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'use-suspense-today'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [Hermanya](https://github.com/Hermanya)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
