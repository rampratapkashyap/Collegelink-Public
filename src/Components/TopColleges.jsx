import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    IconButton,
    Avatar,
    Box,
} from '@mui/material';
import { ArrowBack, ArrowForward, Cancel } from '@mui/icons-material';

const TopColleges = () => {
    const [colleges] = useState([
        {
            id: 1,
            name: 'Harvard University',
            location: 'Cambridge, MA',
            rank: 1,
            deadline: 'Dec 1, 2024',
            fees: '$50,000',
            course: 'MBA',
            avatarUrl: 'https://www.example.com/avatar1.jpg', // Add an image URL for the avatar
        },
        {
            id: 2,
            name: 'Stanford University',
            location: 'Stanford, CA',
            rank: 2,
            deadline: 'Jan 5, 2024',
            fees: '$52,000',
            course: 'BBA',
            avatarUrl: 'https://www.example.com/avatar2.jpg',
        },
        {
            id: 3,
            name: 'MIT',
            location: 'Cambridge, MA',
            rank: 3,
            deadline: 'Nov 30, 2024',
            fees: '$48,000',
            course: 'B.Tech',
            avatarUrl: 'https://www.example.com/avatar3.jpg',
        },
        {
            id: 4,
            name: 'UC Berkeley',
            location: 'Berkeley, CA',
            rank: 4,
            deadline: 'Feb 1, 2024',
            fees: '$45,000',
            course: 'PGDM',
            avatarUrl: 'https://www.example.com/avatar4.jpg',
        },
        {
            id: 5,
            name: 'Caltech',
            location: 'Pasadena, CA',
            rank: 5,
            deadline: 'Jan 15, 2024',
            fees: '$51,000',
            course: 'B.Tech',
            avatarUrl: 'https://www.example.com/avatar5.jpg',
        },
        {
            id: 6,
            name: 'Princeton University',
            location: 'Princeton, NJ',
            rank: 6,
            deadline: 'Dec 1, 2024',
            fees: '$53,000',
            course: 'MBA',
            avatarUrl: 'https://www.example.com/avatar6.jpg',
        },
        {
            id: 7,
            name: 'University of Chicago',
            location: 'Chicago, IL',
            rank: 7,
            deadline: 'Jan 20, 2024',
            fees: '$50,000',
            course: 'PGDM',
            avatarUrl: 'https://www.example.com/avatar7.jpg',
        },
    ]);

    const [activeFilter, setActiveFilter] = useState('');
    const filters = [
        'BBA',
        'MBA',
        'B.Tech',
        'PGDM',
        'Science',
        'Arts',
        'Commerce',
        'Engineering',
        'Medical',
        'Law',
        'Pharmacy',
        'Agriculture',
    ];
    const [showArrows, setShowArrows] = useState(false);

    useEffect(() => {
        const container = document.getElementById('filter-container');
        const checkScrollability = () => {
            if (container.scrollWidth > container.clientWidth) {
                setShowArrows(true);
            } else {
                setShowArrows(false);
            }
        };
        checkScrollability();
        window.addEventListener('resize', checkScrollability);

        return () => window.removeEventListener('resize', checkScrollability);
    }, []);

    const handleScroll = (direction) => {
        const container = document.getElementById('filter-container');
        const scrollAmount = direction === 'left' ? -150 : 150;
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    const filteredColleges = activeFilter
        ? colleges.filter((college) => college.course === activeFilter)
        : colleges;

    return (
        <div style={{ padding: '20px' }}>
            <h1>Top Colleges</h1>

            {/* Filter buttons with horizontal scrolling */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                {showArrows && (
                    <IconButton onClick={() => handleScroll('left')}>
                        <ArrowBack />
                    </IconButton>
                )}
                <div
                    id="filter-container"
                    style={{
                        display: 'flex',
                        whiteSpace: 'nowrap',
                        gap: '10px',
                        overflowX: 'hidden',  // Disable visible scrolling
                    }}
                >
                    {filters.map((filter) => (
                        <Button
                            key={filter}
                            variant={activeFilter === filter ? 'contained' : 'outlined'}
                            color="primary"
                            endIcon={activeFilter === filter ? <Cancel /> : null}
                            onClick={() =>
                                setActiveFilter(activeFilter === filter ? '' : filter)
                            }
                            style={{
                                maxWidth: '150px',  // Fix button text overflow
                                textOverflow: 'ellipsis', 
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {filter}
                        </Button>
                    ))}
                </div>
                {showArrows && (
                    <IconButton onClick={() => handleScroll('right')}>
                        <ArrowForward />
                    </IconButton>
                )}
            </div>

            {/* Table for colleges */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Rank</strong></TableCell>
                            <TableCell><strong>College</strong></TableCell>
                            <TableCell><strong>Location</strong></TableCell>
                            <TableCell><strong>Deadline</strong></TableCell>
                            <TableCell><strong>Fees</strong></TableCell>
                            <TableCell><strong>Course</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredColleges.map((college) => (
                            <TableRow key={college.id}>
                                <TableCell>#{college.rank}</TableCell>
                                <TableCell>
                                    <Box display="flex" alignItems="center">
                                        <Avatar
                                            alt={college.name}
                                            src={college.avatarUrl}
                                            sx={{ width: 40, height: 40, marginRight: '10px' }}
                                        />
                                        <span>{college.name}</span>
                                    </Box>
                                </TableCell>
                                <TableCell>{college.location}</TableCell>
                                <TableCell>{college.deadline}</TableCell>
                                <TableCell>{college.fees}</TableCell>
                                <TableCell>{college.course}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default TopColleges;
