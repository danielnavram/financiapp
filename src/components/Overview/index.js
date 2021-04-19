import React, { useState } from "react";
import { CardItem, CheckboxToggle, Flex, BarChart } from "components/Common";
import { useRecords } from "hooks/useRecords";
import { format, differenceInMonths } from "date-fns";

export const Overview = () => {
  const { categories, types } = useRecords();
  const [title, setTitle] = useState("expenses");
  let labels = [];
  let series = [];
  let allDates = [];
  let cashFlow = [];
  let loading = true;

  if (categories.length && Object.keys(types).length) {
    labels = [...categories]
      .filter((data) => data[title] > 0)
      .map((data) => data.category);
    series = [...categories]
      .filter((data) => data[title] > 0)
      .map((item) => item[title]);

    const expenseDates = [
      ...types.expenses
        .filter((expense) => differenceInMonths(new Date(), expense.date) <= 5)
        .map((expense) => expense.date),
    ];
    const incomesDates = [
      ...types.incomes
        .filter((income) => differenceInMonths(new Date(), income.date) <= 5)
        .map((income) => income.date),
    ];
    allDates = [
      ...new Set(
        [...expenseDates, ...incomesDates]
          .sort((a, b) => a.getTime() - b.getTime())
          .map((date) => date.getMonth())
      ),
    ];

    const filterAndSum = (propName, month) =>
      types[propName]
        .filter(
          (data) =>
            data.date.getMonth() === month &&
            differenceInMonths(new Date(), data.date) <= 5
        )
        .map((data) => data.value)
        .reduce((prev, curr) => prev + curr, 0);

    cashFlow = allDates.map((month) => {
      const expenses = filterAndSum("expenses", month);
      const incomes = filterAndSum("incomes", month);
      return incomes - expenses;
    });
    loading = false;
  }

  const handleChangeCheckbox = (e) => {
    if (e.target.checked) return setTitle("incomes");
    setTitle("expenses");
  };

  return (
    <Flex fullWidth>
      <CardItem title="Cashflow Timeline" loading={loading}>
        <BarChart
          series={[{ data: cashFlow }]}
          labelChart={allDates.map((month) =>
            format(new Date(2020, month, 1), "MMMM")
          )}
          type="line"
        />
      </CardItem>
      <CardItem title="Current Balance" loading={loading}>
        Another stuff goes here
      </CardItem>
      <CardItem
        title="Categories Behavior"
        options={{
          button: (
            <CheckboxToggle
              title={title}
              name="type"
              onChange={handleChangeCheckbox}
            />
          ),
        }}
        loading={loading}
      >
        <BarChart series={[{ data: series }]} labelChart={labels} type="bar" />
      </CardItem>
    </Flex>
  );
};
