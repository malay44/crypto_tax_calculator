"use client";
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CheckIcon from '@mui/icons-material/Check';
import { Box, Typography } from '@mui/material';

type InvestmentTypeProps = {
    title?: string;
    type: string;
    handleChange: (event: React.MouseEvent<HTMLElement>, newtype: string) => void;
}

export default function ColorToggleButton({ type, handleChange, title }: InvestmentTypeProps) {

    const customStyle = {
        gap: '1rem',
        width: '100%',
        marginTop: '5px',
        '& .MuiToggleButton-root': {
            borderRadius: '8px!important',
            borderLeft: '2px solid !important',
            width: '100%',
            border: '2px solid',
            borderColor: 'gray.main!important',
            fontWeight: 500,
            fontSize: {
                lg: '1.1rem',
                md: '1rem',
                sm: '0.9rem',
                xs: '0.85rem'
            },
            textTransform: 'none',
            color: 'gray.main',
            padding: '10px 16px',
            transition: 'all 0.2s ease',
            '&:focus-within.Mui-selected': {
                color: 'blue.main',
                backgroundColor: '#0052FE0F',
                borderColor: 'blue.dark!important',
            },
        },
    };

    return (
        <Box>
            <Typography variant='h5' fontWeight={400} color="initial">
                {title}
            </Typography>
            <ToggleButtonGroup
                color="primary"
                value={type}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                sx={customStyle}
            >
                <ToggleButton disableRipple value="Short Term">
                    Short Term
                    <CheckIcon sx={{
                        color: (type === 'Short Term') ? 'blue.main' : 'white',
                        marginLeft: '0.5rem',
                    }} />
                </ToggleButton>
                <ToggleButton disableRipple value="Long Term">
                    Long Term
                    <CheckIcon sx={{
                        color: (type === 'Long Term') ? 'blue.main' : 'white',
                        marginLeft: '0.5rem',
                    }} />
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
}