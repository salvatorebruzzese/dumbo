import { Status } from "@/components/Sections/Header/Status";
import { Dumbo } from "@/components/Sprites";
import { useHome } from "@/context/HomeContext";
import { Skeleton } from "@radix-ui/themes";
import { Card } from "@tremor/react";

export function Header() {
  const { isLoading, isError } = useHome();

  if (isLoading) {
    return (
      <div className="p-2 h-full">
        <Skeleton>
          <Card className="h-full"></Card>
        </Skeleton>
      </div>
    );
  }

  if (isError) {
    return;
  }

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-4 p-2">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="grid place-items-center">
          <Dumbo fill="rgb(99 102 241)" width="200px" height="200px"/>
        </div>
        <div className="grid self-center">
          <h1 className="text-3xl md:text-4xl font-bold ">DumBO</h1>
          <h1 className="text-xl md:text-2xl">
            <em>D</em>isi <em>U</em>sage <em>M</em>onitor <em>BO</em>logna
          </h1>
        </div>
      </div>
      <div className="grid place-items-center">
        <Card className="flex flex-col gap-4 ">
          <div className="flex gap-4 justify-evenly">
            <Status />
          </div>
        </Card>
      </div>
    </div>
  );
}
