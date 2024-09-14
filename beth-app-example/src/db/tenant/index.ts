import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

export function getTenantDb({
  dbName,
  authToken,
}: {
  dbName: string;
  authToken: string;
}) {
  const fullUrl = `libsql://${dbName}-npham49.turso.io`;

  const tenantClient = createClient({
    url: fullUrl,
    authToken,
  });

  const tenantDb = drizzle(tenantClient, { schema, logger: true });

  return { tenantClient, tenantDb };
}

export function pushToTenantDb({
  tenantDb,
  tenantClient,
}: {
  tenantDb: string;
  tenantClient: string;
}) {
  return async function pushToTenantDb(
    tableName: string,
    data: Record<string, any>
  ) {
    await tenantDb[tableName].insert(data).run();
    await tenantClient.commit();
  };
}