import { usePathname, useRouter } from "next/navigation";

import { Icon, IconButton } from "./common";

export function NavBar({ className }: { className?: string }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className={`flex flex-wrap px-2.5 ${className}`}>
      <IconButton
        icon={<Icon className="text-xl" icon="watch" />}
        text="Watch"
        active={pathname === "/watch"}
        onClick={() => router.push("/watch")}
      />

      <IconButton
        icon={<Icon className="text-xl" icon="schedule" />}
        text="Digital Clock"
        active={pathname === "/digital-clock"}
        onClick={() => router.push("/digital-clock")}
      />

      <IconButton
        icon={<Icon className="text-xl" icon="schedule" />}
        text="Bevel Emboss"
        active={pathname === "/bevel-emboss"}
        onClick={() => router.push("/bevel-emboss")}
      />

      <div className="grow" />
    </nav>
  );
}
