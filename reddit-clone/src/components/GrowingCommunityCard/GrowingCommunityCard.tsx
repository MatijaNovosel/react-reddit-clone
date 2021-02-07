import { useCallback, useEffect, useState } from "react";
import { getService, Types } from "../../di-container";
import { SubReddit } from "../../models/subReddit";
import { GrowingCommunityCardItem } from "./GrowingCommunityCardItem";
import { Icon } from "../Icon";
import { ISubRedditService } from "../../services/interfaces/subRedditService";

export function GrowingCommunityCard() {
  const [subReddits, setSubReddits] = useState<SubReddit[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchSubreddits = useCallback(async () => {
    setLoading(true);
    setSubReddits(
      await getService<ISubRedditService>(
        Types.SubRedditService
      ).getSubReddits()
    );
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchSubreddits();
  }, [fetchSubreddits]);

  return (
    <div className="rounded-lg shadow bg-white border border-gray-300 flex flex-col">
      <span className="text-md font-bold p-5 bg-gray-700 rounded-t-lg text-white">
        Todays top growing communities
      </span>
      <div className="flex flex-col divide-y-2">
        {loading ? (
          <div className="flex justify-center mt-6">
            <Icon
              name="loading"
              className="animate-spin w-16 h-16"
              color="#000000"
            />
          </div>
        ) : (
          subReddits.map((x, i) => (
            <GrowingCommunityCardItem subReddit={x} index={i + 1} key={i} />
          ))
        )}
      </div>
      <div className="px-5 py-3">
        <button className="rounded-full bg-blue-500 text-white w-full py-2 font-bold focus:outline-none hover:bg-blue-400">
          View all
        </button>
      </div>
    </div>
  );
}
