import { Stack } from "@mui/material";
import Notification from "../components/Notifications/Notification";

const Notifications = () => {
  return (
    <Stack direction="column" alignItems="center" gap={2}>
      <Notification name={"Tauya Mtowodzwa"} />
      <Notification name={"Takudzwa Jauki"} />
      <Notification name={"Jack Mafia"} />
      <Notification name={"Preston Doe"} />
    </Stack>
  );
};

export default Notifications;
