import { HostCard } from "@/components/Sections/HostList/HostCard";
import { DumboCrying } from "@/components/Sprites";
import { useHome } from "@/context";
import { HostInfo } from "@/types/Host.types";
import { Skeleton } from "@radix-ui/themes";
import { Card } from "@tremor/react";

export function HostList() {
  const { data, isLoading, isError } = useHome();

  if (isLoading) {
  return (
    <div className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 p-2 overflow-y-auto">
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton key={index} className="w-full">
          <Card className="h-[30dvh] w-full"></Card>
        </Skeleton>
      ))}
    </div>
  );
}

  if (isError || !data) {
    return (
      <div className="h-full grid justify-items-center items-start">
        <div className="grid place-items-center">
          {/* Dumbo che piange */}
          <DumboCrying fill="rgb(99 102 241)" className="h-4/5 w-4/5" />
          <h1 className="-mt-10">Something went wrong</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 p-4 overflow-y-auto">
      {data
        .sort((a: HostInfo, b: HostInfo) => {
          if (a.IsDown !== b.IsDown) {
            return a.IsDown ? 1 : -1;
          }
          return a.Hostname.localeCompare(b.Hostname);
        })
        .map((item: HostInfo) => (
          <HostCard key={item.ID} host={item} />
        ))}
    </div>
  );
}
