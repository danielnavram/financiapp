import React, { useState } from "react";
import {
  CardItem,
  CheckboxToggle,
  Flex,
  FlexItem,
  BarChart,
  Icon,
} from "components/Common";
import { useRecords } from "hooks/useRecords";
import { format, differenceInMonths } from "date-fns";
import NumberFormat from "react-number-format";

export const Overview = () => {
  const { categories, types } = useRecords();
  const [title, setTitle] = useState("expenses");
  let labels = [];
  let series = [];
  let allDates = [];
  let cashFlow = [];
  let loading = true;
  let incomes = [];
  let expenses = [];
  let currentBalance = 0;
  let percentage = 0;

  if (categories.length && Object.keys(types).length) {
    labels = [...categories]
      .filter((data) => data[title] > 0)
      .map((data) => data.category);
    series = [...categories]
      .filter((data) => data[title] > 0)
      .map((item) => item[title]);

    incomes = [...categories]
      .map((item) => item.incomes)
      .reduce((acc, cur) => acc + cur, 0);
    expenses = [...categories]
      .map((item) => item.expenses)
      .reduce((acc, cur) => acc + cur, 0);
    currentBalance = incomes - expenses;
    percentage = (expenses / incomes) * 100;

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
      <CardItem title="Timeline Cash Flow" loading={loading}>
        <BarChart
          series={[{ data: cashFlow }]}
          labelChart={allDates.map((month) =>
            format(new Date(2020, month, 1), "MMMM")
          )}
          type="line"
        />
      </CardItem>
      <CardItem title="Current Balance" loading={loading}>
        <div className="current">
          <Flex spacebetween fullWidth>
            <FlexItem lg={6} md={6} sm={6} xs={4}>
              <div className="current__content">
                <Icon name="money" className="current__icon" />
                <div className="current__number">
                  <NumberFormat
                    value={currentBalance}
                    className="current__value"
                    thousandSeparator={true}
                    displayType={"text"}
                  />
                  <span className="current__label">Balance</span>
                </div>
              </div>
            </FlexItem>
            <FlexItem lg={6} md={6} sm={6} xs={4}>
              <div className="current__content">
                <Icon name="percentage" className="current__icon" />
                <div className="current__number">
                  <NumberFormat
                    value={percentage}
                    className="current__value"
                    displayType={"text"}
                    decimalScale={2}
                  />
                  <span className="current__label">Expenses</span>
                </div>
              </div>
            </FlexItem>
          </Flex>
        </div>
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
