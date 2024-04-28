import puzzle1_1 from '../../../assets/images/game1/puzzle1_1.png';
import puzzle2_1 from '../../../assets/images/game1/puzzle1_2.png';
import puzzle3_1 from '../../../assets/images/game1/puzzle1_3.png';
import puzzle4_1 from '../../../assets/images/game1/puzzle1_4.png';
import puzzle5_1 from '../../../assets/images/game1/puzzle1_5.png';
import puzzle6_1 from '../../../assets/images/game1/puzzle1_6.png';
import puzzle7_1 from '../../../assets/images/game1/puzzle1_7.png';
import puzzle8_1 from '../../../assets/images/game1/puzzle1_8.png';

import puzzle1_1_start from '../../../assets/images/game1/puzzle1_1_start.png';
import puzzle2_1_start from '../../../assets/images/game1/puzzle1_2_start.png';
import puzzle3_1_start from '../../../assets/images/game1/puzzle1_3_start.png';
import puzzle4_1_start from '../../../assets/images/game1/puzzle1_4_start.png';
import puzzle5_1_start from '../../../assets/images/game1/puzzle1_5_start.png';
import puzzle6_1_start from '../../../assets/images/game1/puzzle1_6_start.png';
import puzzle7_1_start from '../../../assets/images/game1/puzzle1_7_start.png';
import puzzle8_1_start from '../../../assets/images/game1/puzzle1_8_start.png';

export const initialPuzzles = [
    {
        id: 1,
        sizeX: 4,
        sizeY: 1,
        correctX: [0],
        correctY: [4],
        src: puzzle1_1,
        srcStart: puzzle1_1_start,
        line: 1,
        isOnlyPosition: true,
    },
    {
        id: 2,
        sizeX: 4,
        sizeY: 1,
        correctX: [4],
        correctY: [4],
        src: puzzle2_1,
        srcStart: puzzle2_1_start,
        line: 1,
        isOnlyPosition: true,
    },
    {
        id: 3,
        sizeX: 1,
        sizeY: 2,
        correctX: undefined,
        correctY: [2],
        src: puzzle3_1,
        srcStart: puzzle3_1_start,
        line: 2,
    },
    {
        id: 4,
        sizeX: 2,
        sizeY: 2,
        correctX: undefined,
        correctY: [2],
        src: puzzle4_1,
        srcStart: puzzle4_1_start,
        line: 2,
    },
    {
        id: 5,
        sizeX: 1,
        sizeY: 2,
        correctX: undefined,
        correctY: [2],
        src: puzzle5_1,
        srcStart: puzzle5_1_start,
        line: 2,
    },
    {
        id: 6,
        sizeX: 2,
        sizeY: 2,
        correctX: [0],
        correctY: [0],
        src: puzzle6_1,
        srcStart: puzzle6_1_start,
        line: 2,
        isOnlyPosition: true,
    },
    {
        id: 7,
        sizeX: 4,
        sizeY: 2,
        correctX: undefined,
        correctY: [2],
        src: puzzle7_1,
        srcStart: puzzle7_1_start,
        line: 3,
    },
    {
        id: 8,
        sizeX: 6,
        sizeY: 2,
        correctX: [2],
        correctY: [0],
        src: puzzle8_1,
        srcStart: puzzle8_1_start,
        line: 3,
        isOnlyPosition: true,
    },
];
