export default async function getTestBanners() {
    var output =         output = [
        {
          id: 0,
          title: 'Werner News ',
          subtitle: '2022 June Associate Recognition Ceremony',
          description:
            'Werner was pleased to recognize four professional drivers: David C, Robert L, Daniel P, and Raymond W. Werner was pleased to recognize four professional drivers: David C, Robw ',
          colorScheme: colorScheme.tertiary,
          date: new Date(),
        },
        {
          id: 1,
          title: 'Werner Life',
          subtitle: 'Life on the Road Video Series',
          description: 'The latest episode of Life on the Road is available now!',
          colorScheme: colorScheme.secondary,
          date: new Date(),
        },
        {
          id: 2,
          title: 'COVID-19 Updates',
          subtitle: 'What Drivers Need to Know About COVID-19',
          description: 'The latest information about COVID- 19',
          colorScheme: colorScheme.white,
          date: new Date(),
        },
        {
          id: 3,
          title: 'Werner Points',
          subtitle: 'Werner rewards has been added!',
          description: 'Click here to get started! ',
          colorScheme: colorScheme.success,
          date: new Date(),
        },
        {
          id: 4,
          title: 'COVID-19 Updates',
          subtitle: 'What Drivers Need to Know About COVID-19',
          description: 'The latest information about COVID-19  ',
          colorScheme: colorScheme.danger,
          date: new Date(),
        },
        {
          id: 5,
          title: 'Get Paid ',
          subtitle: '2022 June Associate Recognition Ceremony',
          description:
            'Werner was pleased to recognize four professional drivers: David C, Robert L, Daniel P, and Raymond W. Werner was pleased to recognize four professional drivers: David C, Robw',
          colorScheme: colorScheme.tertiary,
          date: new Date(),
        },
      ];
    await new Promise(resolve => setTimeout(resolve, 1000));
    return output;
}

const colorScheme = {
    white: {
      background: '#FFFFFF',
      text: 'black'
    },
    success: {
      background: '#218719',
      text: 'white'
    },
    danger: {
      background: '#C03131',
      text: 'white'
    },
    tertiary: {
      background: '#163762',
      text: 'white'
    },
    secondary: {
      background: '#1877F2',
      text: 'white'
    },
    primary: {
      background: '#3369B4',
      text: 'white'
    }
  };