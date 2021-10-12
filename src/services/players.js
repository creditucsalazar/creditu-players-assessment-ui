import { httpClient } from "@/services/http-client";
import axios from "axios";

/**
 * Si se desea hacer un incremento que permita definir el numero de resultados por página
 * se puede incluir el argumento de entrada porque la API sí soporta ese parámetro
 */
export const getPlayers = async (searchString, pageNumber, cancelExecutor) => {
  const cancelToken = new axios.CancelToken(cancelExecutor);
  return (
    await httpClient.get("players", {
      params: { searchString, pageNumber, documentsPerPage: 10 },
      cancelToken,
    })
  ).data;
};
