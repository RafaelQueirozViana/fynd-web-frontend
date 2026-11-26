import { useEffect, useState } from "react";
import getStatistics from "../Services/statisticsService";

export default function useStatistics() {
  const [statisticsData, setStatisticsData] = useState(0);

  async function getRequireStatistics() {
    try {
      const response = await getStatistics();
      setStatisticsData(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRequireStatistics();
  });

  return [statisticsData];
}
