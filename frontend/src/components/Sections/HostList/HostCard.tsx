import { AreaChart, Tracker } from "@/components/Hero";
import { capitalize } from "@/lib/utils";
import { HostInfo } from "@/types/Host.types";
import { Button, Card } from "@tremor/react";
import { useNavigate } from "react-router";

/**
 * this card is visualized in the home page
 * it contains:
 * lab machine hostname
 * usage chart
 * 
 * details button
 */


export function HostCard({ host }: { host: HostInfo }) {
  const navigate = useNavigate();

  return (
    <Card
      className="p-3 sm:p-6 transition-all shadow-xl"
      decoration="top"
      decorationColor={host.IsDown ? "red" : "green"}
    >
      <AreaChart className={"h-40 py-2"} host={host} />
      <div className="p-4 grid gap-2">
        <h1 className="text-3xl font-bold relative z-10 bottom-8 mt-4 h-4">
          {capitalize(host.Hostname)}
        </h1>
        <Tracker host={host} interval={-40} className={"flex w-full h-4"} />
        <Button
          className="flex rounded-full w-40 center mx-auto items-center justify-center"
          variant="secondary"
          color="indigo"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/${host.Hostname}`)}
        >
          <span className="font-bold">View Details</span>
        </Button>
      </div>
    </Card>
  );
}
