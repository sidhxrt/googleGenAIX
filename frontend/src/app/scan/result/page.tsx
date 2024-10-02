"use client";
import { getScoreResultModel } from "@/api/getScore";
import { ListItem, ListItemText } from "@mui/material";

export default function Result({
  searchParams,
}: {
  searchParams: getScoreResultModel;
}) {
  return (
    <>
      <ListItem>
        <ListItemText
          primary={`${searchParams.safety_score}`}
          primaryTypographyProps={{
            sx: {
              fontWeight: "bold",
              color: "#FFFFF",
              fontSize: "30px",
              padding: "40px",
              backgroundColor: "#6fc276",
              borderRadius: "8px",
              width: "100%",
              textAlign: "centre",
            },
          }}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={`Caution: ${searchParams.caution_message}`}
          primaryTypographyProps={{
            sx: {
              fontStyle: "italic",
              color: "red",
              fontSize: "20px",
              fontWeight: "bold",
              gap: "50px",
              padding: "30px",
              backgroundColor: "#ffee8c",
              borderRadius: "8px",
              width: "100%",
              margin: "0 auto",
              textAlign: "centre",
            },
          }}
        />
      </ListItem>
    </>
  );
}
