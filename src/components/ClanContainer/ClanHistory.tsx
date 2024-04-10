import { Login, Logout, SwapHoriz } from "@mui/icons-material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Box } from "@mui/material";
import { skipToken } from "@tanstack/react-query";
import Link from "next/link";
import { apiClient } from "@/backend/client";
import { useClan } from "@/hooks/useClan";
import { useRegion } from "@/hooks/useRegion";
import {
  isClanJoinEvent,
  isClanLeaveEvent,
  isRoleChangeEvent,
} from "@/services/wargaming/types";

const ClanHistory = () => {
  const { currentRegion } = useRegion();
  const { clan, isLoading: isLoadingClan } = useClan();
  const { data: clanHistory, isLoading: isLoadingClanHistory } =
    apiClient.wargaming.getClanHistory.useQuery(
      clan
        ? {
            id: clan.clan_id,
            region: currentRegion,
          }
        : skipToken,
    );

  if (isLoadingClan || isLoadingClanHistory) {
    return <>Loading...</>;
  }

  if (!clan || !clanHistory) {
    return <>Error</>;
  }

  const eventTypeToColor = (event: string) => {
    if (event === "leave_clan") {
      return "error";
    }

    if (event === "join_clan") {
      return "success";
    }

    return "warning";
  };

  return (
    <Timeline>
      {clanHistory.map((event) => (
        <TimelineItem
          key={`${event.created_at}-${event.type}-${event.accountId}`}
        >
          <TimelineOppositeContent>
            <Link href={`/${currentRegion}/account/${event.accountId}`}>
              {event.accountInfo.name}
            </Link>
            <Box>{event.created_at}</Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color={eventTypeToColor(event.type)}>
              {event.type === "leave_clan" && (
                <Logout sx={{ color: "white" }} />
              )}
              {event.type === "join_clan" && <Login sx={{ color: "white" }} />}
              {event.type === "change_role" && (
                <SwapHoriz sx={{ color: "white" }} />
              )}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {isClanLeaveEvent(event.type, event.additionalInfo) && (
              <> à quitté le clan</>
            )}
            {isClanJoinEvent(event.type, event.additionalInfo) && (
              <> à rejoins le clan</>
            )}
            {isRoleChangeEvent(event.type, event.additionalInfo) && (
              <>
                {" à changé de role "}
                {event.additionalInfo.old_role.name}
                {" => "}
                {event.additionalInfo.new_role.name}
              </>
            )}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ClanHistory;
