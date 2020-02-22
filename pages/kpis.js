import React from "react";
import useApi from "../lib/use-api";

import { useFetchUser } from "../lib/user";
import Layout from "../components/layoutDrawer";
import kpis from "./api/kpis";

function KpiCard({ kpi: { id, name, column, value } }) {
  return (
    <>
      <h1>{name}</h1>

      <div>
        <p>
          Conversion when {column} = {value}
        </p>
      </div>
    </>
  );
}

function Profile() {
  const { user, _ } = useFetchUser({ required: true });
  const { response, error, isLoading } = useApi("/api/kpis");
  const kpis = response;

  return (
    <Layout user={user} loading={isLoading}>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          {kpis.map(kpi => (
            <KpiCard kpi={kpi} />
          ))}
        </>
      )}
    </Layout>
  );
}

export default Profile;
