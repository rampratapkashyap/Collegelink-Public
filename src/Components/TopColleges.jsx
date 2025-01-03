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
    Avatar, Typography,
    Box,
} from '@mui/material';
import { ArrowBack, ArrowForward, Cancel } from '@mui/icons-material';

const TopColleges = () => {
    const [colleges] = useState([
        {
            id: 1,
            name: 'Institute of Engineering and Technology (IET), Lucknow',
            location: 'Lucknow, UP',
            rank: 1,
            deadline: 'May 31, 2025',
            fees: '₹1,50,000',
            course: 'B.Tech',
            avatarUrl: 'https://www.example.com/avatar1.jpg',
        },
        {
            id: 2,
            name: 'Babu Banarasi Das University (BBDU)',
            location: 'Lucknow, UP',
            rank: 2,
            deadline: 'June 15, 2025',
            fees: '₹1,80,000',
            course: 'B.Tech',
            avatarUrl: 'https://www.example.com/avatar2.jpg',
        },
        {
            id: 3,
            name: 'Integral University',
            location: 'Lucknow, UP',
            rank: 3,
            deadline: 'June 30, 2025',
            fees: '₹2,00,000',
            course: 'B.Tech',
            avatarUrl: 'https://www.example.com/avatar3.jpg',
        },
        {
            id: 4,
            name: 'Amity University, Lucknow Campus',
            location: 'Lucknow, UP',
            rank: 4,
            deadline: 'July 10, 2025',
            fees: '₹3,00,000',
            course: 'B.Tech',
            avatarUrl: 'https://www.example.com/avatar4.jpg',
        },
        {
            id: 5,
            name: 'SRMU (Shri Ramswaroop Memorial University)',
            location: 'Lucknow, UP',
            rank: 5,
            deadline: 'June 20, 2025',
            fees: '₹2,50,000',
            course: 'B.Tech',
            avatarUrl: 'https://www.example.com/avatar5.jpg',
        },
        {
            id: 6,
            name: 'Dr. A.P.J. Abdul Kalam Technical University (formerly UPTU)',
            location: 'Lucknow, UP',
            rank: 6,
            deadline: 'May 25, 2025',
            fees: '₹1,70,000',
            course: 'B.Tech',
            avatarUrl: 'https://www.example.com/avatar6.jpg',
        },
        {
            id: 7,
            name: 'Ambalika Institute of Management and Technology',
            location: 'Lucknow, UP',
            rank: 7,
            deadline: 'June 10, 2025',
            fees: '₹1,50,000',
            course: 'B.Tech',
            avatarUrl: 'https://www.example.com/avatar7.jpg',
        },
        {
            id: 8,
            name: 'Lucknow Model Institute of Technology and Management (LMITM)',
            location: 'Lucknow, UP',
            rank: 8,
            deadline: 'June 15, 2025',
            fees: '₹1,40,000',
            course: 'B.Tech',
            avatarUrl: 'https://www.example.com/avatar8.jpg',
        },
        {
            id: 9,
            name: 'Azad Institute of Engineering and Technology',
            location: 'Lucknow, UP',
            rank: 9,
            deadline: 'June 5, 2025',
            fees: '₹1,60,000',
            course: 'B.Tech',
            avatarUrl: 'https://www.example.com/avatar9.jpg',
        },
        {
            id: 10,
            name: 'Modern Institute of Technology and Management',
            location: 'Lucknow, UP',
            rank: 10,
            deadline: 'June 20, 2025',
            fees: '₹1,50,000',
            course: 'B.Tech',
            avatarUrl: 'https://www.example.com/avatar10.jpg',
        },
    ]);



    const [activeFilter, setActiveFilter] = useState('');
    const filters = ['B.Tech',
        'Biotech', 'BBA', 'MBA', 'MCA', 'BDS', 'BPT', 'B.Sc', 'Animation', 'CyberLaw',
        'M.Sc', 'Agriculture', 'Pharmacy', 'Law', 'Medical', 'Engineering', 'Commerce', 'Arts', 'Science', 'BCA', 'M.Tech', 'Nursing', 'LLB',
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
            <Typography variant="h6" gutterBottom>
                Top Colleges
            </Typography>

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
