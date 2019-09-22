import React, { useState, useEffect } from "react";
import { useSuspense } from "./";
import { create, act } from "react-test-renderer";

const useAsyncTest = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    setData(undefined);
    const timeout = setTimeout(() => {
      setLoading(false);
      setData("OK");
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return { loading, data };
};

const Child = () => {
  const { loading, data } = useAsyncTest();
  useSuspense(loading);
  return <section>{data}</section>;
};

const Parent = () => {
  return (
    <React.Suspense fallback={<div>Suspended!</div>}>
      <Child />
    </React.Suspense>
  );
};

describe("useSuspense", () => {
  it("is truthy", () => {
    expect(useSuspense).toBeTruthy();
  });

  it("actually does something", () => {
    jest.useFakeTimers();
    let root: any;

    act(() => {
      root = create(<Parent />);
    });

    expect(root.toJSON()).toMatchSnapshot();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(root.toJSON()).toMatchSnapshot();
  });
});
