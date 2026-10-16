import { Header, HostList } from "@/components/Sections";
import { HomeProvider } from "@/context";
import { useDateStore } from "@/store/useDate";
import { subMinutes } from "date-fns";

export async function clientLoader() {
  useDateStore.getState().reset(() => subMinutes(new Date(), 10));
}

export default function Component() {
  return (
    <HomeProvider>
      <div className="h-full p-2 bg-gray-100 overflow-hidden">
        <Header />
        <HostList />
      </div>
    </HomeProvider>
  );
}
