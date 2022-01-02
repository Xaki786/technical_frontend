import { Button, Container } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import Axios from "../../utils/Axios";

const SeedDb = () => {
  const [startSeed, setstartSeed] = useState(false);
  const { isLoading, isSuccess, isError } = useQuery(
    "seed-db",
    () => Axios.get("/api/seed-db"),
    { enabled: startSeed, cacheTime: 0 }
  );

  if (isLoading) {
    return <h1>Seeding Database</h1>;
  }
  if (isError) {
    return <h1 style={{ color: "red" }}>Error Seeding Database</h1>;
  }
  if (isSuccess) {
    return <h1 style={{ color: "green" }}>Success Seeding Database</h1>;
  }
  return (
    <Container sx={{ mt: 10 }}>
      <Button variant="contained" onClick={() => setstartSeed(true)}>
        Seed Database
      </Button>
    </Container>
  );
};

export default SeedDb;
