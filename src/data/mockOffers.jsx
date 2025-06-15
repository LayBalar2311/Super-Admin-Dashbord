const generateRandomDate = (startOffsetDays, endOffsetDays) => {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + startOffsetDays);
  
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + endOffsetDays);
  
    return {
      start: startDate.toISOString().slice(0, 10),
      end: endDate.toISOString().slice(0, 10),
    };
  };
  
  const mockOffers = [
    {
      id: 'offer_001',
      name: '50% off all Pizzas',
      store: 'Pizza Palace',
      discountType: 'percentage',
      discountValue: 50,
      validity: generateRandomDate(0, 30),
      status: 'active',
      description: 'Enjoy half off on any pizza, valid for dine-in and takeaway.',
    },
    {
      id: 'offer_002',
      name: 'Buy 1 Get 1 Free Coffee',
      store: 'Coffee Corner',
      discountType: 'BOGO',
      discountValue: 0, // N/A for BOGO
      validity: generateRandomDate(-5, 10),
      status: 'active',
      description: 'Purchase any coffee and get another one free. Limited time offer.',
    },
    {
      id: 'offer_003',
      name: '$10 off on Groceries',
      store: 'FreshMart',
      discountType: 'flat_amount',
      discountValue: 10,
      validity: generateRandomDate(2, 20),
      status: 'inactive',
      description: 'Get $10 off your grocery bill when you spend $50 or more.',
    },
    {
      id: 'offer_004',
      name: 'Free Dessert with Main Course',
      store: 'The Gourmet Bistro',
      discountType: 'free_item',
      discountValue: 0,
      validity: generateRandomDate(1, 15),
      status: 'active',
      description: 'Complimentary dessert with the purchase of any main course.',
    },
    {
      id: 'offer_005',
      name: '20% off Electronics',
      store: 'Tech Haven',
      discountType: 'percentage',
      discountValue: 20,
      validity: generateRandomDate(10, 45),
      status: 'active',
      description: 'Save 20% on all electronics items. Excludes new arrivals.',
    },
    {
      id: 'offer_006',
      name: 'Weekend Spa Package Discount',
      store: 'Serenity Spa',
      discountType: 'percentage',
      discountValue: 25,
      validity: generateRandomDate(0, 7),
      status: 'active',
      description: '25% off on all weekend spa packages. Book now!',
    },
    {
      id: 'offer_007',
      name: 'Kids Eat Free Tuesdays',
      store: 'Family Diner',
      discountType: 'free_item',
      discountValue: 0,
      validity: generateRandomDate(-10, 5),
      status: 'inactive',
      description: 'Kids under 12 eat free with a paying adult on Tuesdays.',
    },
    {
      id: 'offer_008',
      name: 'Buy 2 Get 1 Free Books',
      store: 'The Bookworm',
      discountType: 'BOGO',
      discountValue: 0,
      validity: generateRandomDate(5, 25),
      status: 'active',
      description: 'Purchase two books and get the third one free. Cheapest item is free.',
    },
    {
      id: 'offer_009',
      name: '$5 off on Car Wash',
      store: 'Sparkle Car Wash',
      discountType: 'flat_amount',
      discountValue: 5,
      validity: generateRandomDate(0, 60),
      status: 'active',
      description: 'Get $5 off on any car wash service. Valid for a limited time.',
    },
    {
      id: 'offer_010',
      name: 'Student Discount - 15% off',
      store: 'Fashion Hub',
      discountType: 'percentage',
      discountValue: 15,
      validity: generateRandomDate(-30, 90),
      status: 'active',
      description: '15% off for all students with a valid ID. In-store only.',
    },
  ];
  
  export default mockOffers;