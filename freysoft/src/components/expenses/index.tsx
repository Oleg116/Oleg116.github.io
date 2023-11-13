import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography/Typography';

import { mock } from './mock';
import { format, parseISO } from 'date-fns';
import { enUS } from 'date-fns/locale'


interface IDailySpend {
  logo: string,
  name: string,
  category: string,
  price: string
}

interface ISpends {
  [date: string]: IDailySpend[]
}


export default function Expenses() {

  const createDate = (date: string): string => {
    const parsedDate = parseISO(date);

    const formattedDate = format(parsedDate, "d MMMM yyyy", { locale: enUS });
    return formattedDate
  }

  const currentExpense = (date: keyof typeof mock): React.ReactElement | null => {
    const dailySpendings = mock.hasOwnProperty(date) ? mock[date] : undefined;

    if (!dailySpendings) {
      return null;
    }

    return (
      <>
        {dailySpendings.map(({ logo, name, category, price }: IDailySpend, index: number) => (
          <Box sx={{ margin: '5px', display: 'flex', justifyContent: 'space-between' }} key={index}>
            <img height={35} width={35} src={logo} />
            <Box>
              <Typography sx={{ fontWeight: 600 }}>{name}</Typography>
              <Typography sx={{ color: '#A3A3A3' }}>{category}</Typography>
            </Box>
            <Typography sx={{ display: 'flex', alignItems: 'center' }}>{price}</Typography>
          </Box>
        ))}
      </>
    );
  };

  return (
    <Box sx={{ padding: '60px 0' }}>
      {Object.keys(mock).map((day) =>
        <Box sx={{ margin: '25px 15px' }} key={day}>
          <Typography>{createDate(day)}</Typography>
          {currentExpense(day as keyof typeof mock)}
        </Box>
      )}
    </Box >
  )
}