// src/data/mockData.js

const generateDailyData = (days, startValue, fluctuation) => {
    const data = [];
    let currentValue = startValue;
    for (let i = 0; i < days; i++) {
      const date = new Date();
      date.setDate(date.getDate() - (days - 1 - i)); // Go back in time
      currentValue += (Math.random() - 0.5) * fluctuation;
      if (currentValue < 0) currentValue = 0; // Prevent negative values
      data.push({
        date: date.toISOString().slice(0, 10), // YYYY-MM-DD
        value: Math.round(currentValue),
      });
    }
    return data;
  };
  
  export const offerPerformanceData = {
    claimsOverTime: generateDailyData(30, 150, 20),
    viewsOverTime: generateDailyData(30, 800, 50),
    redemptionRateOverTime: generateDailyData(30, 0.15, 0.02).map((d) => ({
      ...d,
      value: parseFloat(d.value.toFixed(2)),
    })), // as percentage
    topOffers: [
      { name: '50% off Pizzas', claims: 1200, redemptionRate: 0.35 },
      { name: 'Buy 1 Get 1 Coffee', claims: 980, redemptionRate: 0.42 },
      { name: 'Flat $10 off Groceries', claims: 750, redemptionRate: 0.28 },
      { name: 'Free Dessert w/ Meal', claims: 620, redemptionRate: 0.50 },
      { name: '20% off Electronics', claims: 400, redemptionRate: 0.15 },
    ],
    offerTypeDistribution: [
      { name: 'Percentage Discount', value: 450 },
      { name: 'Buy One Get One', value: 300 },
      { name: 'Flat Amount Off', value: 200 },
      { name: 'Free Item', value: 150 },
      { name: 'Cashback', value: 100 },
    ],
  };
  
  export const storePerformanceData = {
    claimsByStore: [
      { name: 'Coffee Shop A', claims: 850 },
      { name: 'Grocery Mart B', claims: 700 },
      { name: 'Pizza Place C', claims: 1100 },
      { name: 'Electronics Store D', claims: 450 },
      { name: 'Fashion Boutique E', claims: 300 },
    ],
    newStoresAdded: generateDailyData(30, 2, 1),
  };
  
  export const userBehaviorData = {
    newUsersOverTime: generateDailyData(30, 10, 5),
    activeUsersOverTime: generateDailyData(30, 200, 30),
    userDemographics: [
      { name: '18-24', value: 300 },
      { name: '25-34', value: 500 },
      { name: '35-44', value: 350 },
      { name: '45-54', value: 150 },
      { name: '55+', value: 80 },
    ],
    deviceUsage: [
      { name: 'Mobile', value: 800 },
      { name: 'Desktop', value: 200 },
      { name: 'Tablet', value: 50 },
    ],
  };
  
  export const systemHealthData = {
    activeOffers: 1250,
    pendingApprovals: 15,
    userReports: 5,
    averageResponseTimeMs: 120,
  };