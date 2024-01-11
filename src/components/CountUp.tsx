import { useEffect } from "preact/hooks";
import { useProgressiveNumber } from "../hooks/useProgressiveNumber";

const Counter = ({
  initial,
  final,
  duration,
  decimals,
}: {
  initial: number;
  final: number;
  duration?: number;
  decimals?: number;
}) => {
  const [count, setCount] = useProgressiveNumber(initial, duration, decimals);

  useEffect(() => {
    setCount(final);
    return () => {
      setCount(initial);
    };
  }, []);

  return <span>{count}</span>;
};
export default Counter;
