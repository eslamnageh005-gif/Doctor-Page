import { cn } from "@/lib/utils";

type Status = "Waiting" | "Completed" | "Cancelled" | "Scheduled";

interface StatusBadgeProps {
  status: Status;
}

const statusMap: Record<Status, string> = {
  Waiting: "status-waiting",
  Completed: "status-completed",
  Cancelled: "status-cancelled",
  Scheduled: "status-completed",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold",
        statusMap[status] ?? "bg-muted text-muted-foreground"
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 opacity-80" />
      {status}
    </span>
  );
}
