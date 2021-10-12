<template>
  <div>
    <SearchBar
      id="search-input"
      v-model="searchString"
      placeholder="Ingresar búsqueda..."
    />
    <ResultsGrid v-model="players" />
    <div v-if="isLoading || isError" class="columns is-centered">
      <div class="column is-3">
        <div class="card">
          <div class="card-image">
            <div class="image">
              <b-loading v-model="isLoading" :is-full-page="false" />
              <b-notification
                v-model="isError"
                type="is-danger is-light"
                :closable="false"
              >
                Ocurrió un error al tratar de obtener los jugadores
              </b-notification>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagination
      v-model="pageNumber"
      :per-page="documentsPerPage"
      :total="numberOfDocuments"
    />
  </div>
</template>
<script>
import SearchBar from "@/components/SearchBar.vue";
import ResultsGrid from "@/components/ResultsGrid.vue";
import Pagination from "@/components/Pagination.vue";
import { getPlayers } from "@/services/players";
export default {
  components: { SearchBar, ResultsGrid, Pagination },
  data() {
    return {
      pageNumber: 1,
      documentsPerPage: 10,
      numberOfDocuments: 0,
      searchString: "",
      players: [],
      cancelGetPlayers: () => {},
      isLoading: false,
      isError: false,
    };
  },
  methods: {
    async callAPI() {
      if (this.isLoading) {
        this.cancelGetPlayers("cancelled");
      }
      this.isLoading = true;
      this.isError = false;
      this.players = [];
      this.numberOfDocuments = 0;
      try {
        const cancelExecutor = (cancelFunction) => {
          this.cancelGetPlayers = cancelFunction;
        };
        const {
          players,
          pagination: { numberOfDocuments },
        } = await getPlayers(
          this.searchString,
          this.pageNumber,
          cancelExecutor
        );
        /**
         * @todo Si se desea controlar la cantidad de resultados por página, habría que
         * usar el valor documentsPerPage que viene en el objeto pagination
         */
        this.players = players;
        this.numberOfDocuments = numberOfDocuments;
      } catch (error) {
        if (error.message === "cancelled") {
          return;
        }
        this.isError = true;
      }
      this.isLoading = false;
    },
  },
  watch: {
    pageNumber() {
      this.callAPI();
    },
    searchString(val) {
      if (val === "") {
        return;
      }
      this.callAPI();
    },
  },
};
</script>
<style scoped></style>
