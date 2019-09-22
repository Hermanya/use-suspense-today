import * as React from 'react';

export const useSuspense = (suspended: Boolean) => {
  const promise = React.useRef<{resolve: () => void}>()

  if (suspended && !promise.current) {
    throw new Promise(resolve => {
      promise.current = {resolve}
    })
  }
  if (!suspended && promise.current) {
    promise.current.resolve()
  }
}

export default useSuspense;
