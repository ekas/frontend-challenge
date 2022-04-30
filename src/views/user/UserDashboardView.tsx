import star from '@assets/img/star.svg';
import sustainability from '@assets/img/sustainability.svg';
import { GeneralOverviewCard } from '@components/user/dashboard/GeneralOverviewCard';
import { MonthlyBarOverview } from '@components/user/dashboard/MonthlyBarOverview';
import { Grid, Theme, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ReactElement, useEffect, useState } from 'react';

import dummyData from '../../../dummyData.json';

const useStyles = makeStyles(() => ({
  dashboardWrapper: {
    width: '100%',
  },
}));

export const getMonthName = (index: number): string => {
  const months = [
    'January',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return months[index - 1];
};

export const UserDashboardView = (): ReactElement => {
  const classes = useStyles();
  const theme = useTheme() as Theme;
  const [totalRewards, setTotalRewards] = useState<TotalReward>({
    total_rewards_user: 0,
    dateframe_rewards_user: 0,
    dateframe_rewards_company: 0,
    total_co2_user: 0,
    dateframe_co2_user: 0,
    dateframe_co2_company: 0,
  });
  const [rewardValues, setRewardValues] = useState<{ title: string; value: number }[]>([]);
  const [co2Values, setCO2Values] = useState<{ title: string; value: number }[]>([]);

  useEffect(() => {
    async function fetchData() {
      const totalRewards = dummyData.DASHBOARD_DATA;
      const rewardHistory = dummyData.HISTORY_DATA;

      const rewards = rewardHistory.map((reward) => {
        return {
          title: `${getMonthName(reward.month)} ${reward.year}`,
          value: reward.reward,
        };
      });

      const co2Savings = rewardHistory.map((reward) => {
        return {
          title: `${getMonthName(reward.month)} ${reward.year}`,
          value: reward.co2_saved,
        };
      });

      setTotalRewards(totalRewards);
      setRewardValues(rewards);
      setCO2Values(co2Savings);
    }

    fetchData();
  }, []);

  return (
    <div className={classes.dashboardWrapper}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <GeneralOverviewCard
            cardTitle="Total Rewards"
            colors={[theme.custom.palette.graphColorOne.main, theme.custom.palette.graphColorOne.light]}
            unit="P"
            icon={star}
            monthlyUser={totalRewards.dateframe_rewards_user}
            monthlyCompany={totalRewards.dateframe_rewards_company}
            totalUser={totalRewards.total_rewards_user}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <GeneralOverviewCard
            cardTitle="Total CO2 Rewards"
            colors={[theme.custom.palette.graphColorTwo.main, theme.custom.palette.graphColorTwo.light]}
            unit="Kg"
            icon={sustainability}
            monthlyUser={totalRewards.dateframe_co2_user}
            monthlyCompany={totalRewards.dateframe_co2_company}
            totalUser={totalRewards.total_co2_user}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MonthlyBarOverview
            cardTitle="Reward History"
            label="My Monthly Rewards"
            color={theme.custom.palette.graphColorOne.main}
            values={rewardValues.map((reward) => {
              return { title: reward.title, value: reward.value };
            })}
            unit="P"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MonthlyBarOverview
            cardTitle="CO2 Savings History"
            label="My Monthly Savings"
            color={theme.custom.palette.graphColorTwo.main}
            values={co2Values.map((co2Value) => {
              return { title: co2Value.title, value: co2Value.value };
            })}
            unit="kg"
          />
        </Grid>
      </Grid>
    </div>
  );
};
