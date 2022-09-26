import { createReactQuery } from "@regions-of-indonesia/react-query";

import client from "./client";

const { useProvinces, useDistricts, useSubdistricts, useVillages } = createReactQuery(client);

export { useProvinces, useDistricts, useSubdistricts, useVillages };
