<template>
  <h2>Фотограф Натали Моис Календарь бронирования</h2>
  <h4>🔴 - занятые даты</h4>
  <Calendar
    :columns="layout.columns"
    :rows="layout.rows"
    :is-expanded="layout.isExpanded"
    :date="date"
    :attributes="attributes"
    :from-date="start_year"
    :to-date="end_year"
    :min-date="start_year"
    :max-date="end_year"
  />
</template>

<script>
import "v-calendar/dist/style.css";
import { Calendar } from "v-calendar";
import dates from "./data.json";

export default {
  name: "App",
  components: {
    Calendar,
  },
  computed: {
    layout() {
      return this.variants[this.$grid.breakpoint];
    },
  },
  data() {
    return {
      variants: {
        "": {
          columns: 1,
          rows: 3,
          isExpanded: true,
        },
        sm: {
          columns: 1,
          rows: 3,
          isExpanded: true,
        },
        md: {
          columns: 2,
          rows: 3,
          isExpanded: true,
        },
        lg: {
          columns: 4,
          rows: 3,
          isExpanded: true,
        },
        xl: {
          columns: 4,
          rows: 3,
          isExpanded: false,
        },
        "2xl": {
          columns: 4,
          rows: 3,
          isExpanded: false,
        },
      },
      date: new Date(),
      start_year: new Date("2022-01-01"),
      end_year: new Date("2022-12-31"),
      attributes: [
        {
          key: "today",
          highlight: true,
          dates: new Date(),
        },
        {
          highlight: "red",
          dates: dates,
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
