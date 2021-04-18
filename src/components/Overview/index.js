import React from "react";
import { Card, Flex, FlexItem, BarChart } from "components/Common";
import { useRecords } from "hooks/useRecords";
import { Loading } from "components/Status/Loading";
import { format, differenceInMonths } from "date-fns";

const CardItem = ({ title, children, loading }) => {
  return (
    <FlexItem lg={4} md={4} sm={2} xs={4}>
      <Card title={title}>{loading ? <Loading /> : children}</Card>
    </FlexItem>
  );
};

export const Overview = () => {
  const { categories, types } = useRecords();
  let labels = [];
  let series = [];
  let months = [];
  let allDates = [];
  let cashFlow = [];
  let loading = true;
  if (categories.length && Object.keys(types).length) {
    labels = [...categories.map((item) => item.category)];
    series = [...categories].map((item) => item.expenses);

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

  return (
    <Flex fullWidth>
      <CardItem title="Cashflow" loading={loading}>
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
      <CardItem title="Cashflow Categories" loading={loading}>
        <BarChart series={[{ data: series }]} labelChart={labels} type="bar" />
      </CardItem>
    </Flex>
  );
};
