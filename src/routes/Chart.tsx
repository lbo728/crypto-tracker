import { useQuery } from "react-query";
import { fetchCoinHistory } from "../\bapi";

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return <h1>Chart</h1>;
  // 1. 우리가 보고자 하는 가격의 암호화폐가 무엇인지 알아야 한다.
}

export default Chart;
