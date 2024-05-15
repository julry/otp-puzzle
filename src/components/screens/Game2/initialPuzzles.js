import puzzle1_2 from '../../../assets/images/game2/puzzle2_1.png';
import puzzle2_2 from '../../../assets/images/game2/puzzle2_2.png';
import puzzle3_2 from '../../../assets/images/game2/puzzle2_3.png';
import puzzle4_2 from '../../../assets/images/game2/puzzle2_4.png';
import puzzle5_2 from '../../../assets/images/game2/puzzle2_5.png';
import puzzle6_2 from '../../../assets/images/game2/puzzle2_6.png';
import puzzle7_2 from '../../../assets/images/game2/puzzle2_7.png';
import puzzle8_2 from '../../../assets/images/game2/puzzle2_8.png';
import puzzle9_2 from '../../../assets/images/game2/puzzle2_9.png';

import puzzle1_2_start from '../../../assets/images/game2/puzzle2_1_start.png';
import puzzle2_2_start from '../../../assets/images/game2/puzzle2_2_start.png';
import puzzle3_2_start from '../../../assets/images/game2/puzzle2_3_start.png';
import puzzle4_2_start from '../../../assets/images/game2/puzzle2_4_start.png';
import puzzle5_2_start from '../../../assets/images/game2/puzzle2_5_start.png';
import puzzle6_2_start from '../../../assets/images/game2/puzzle2_6_start.png';
import puzzle7_2_start from '../../../assets/images/game2/puzzle2_7_start.png';
import puzzle8_2_start from '../../../assets/images/game2/puzzle2_8_start.png';
import puzzle9_2_start from '../../../assets/images/game2/puzzle2_9_start.png';

export const initialPuzzles = [
    {
        id: 1,
        sizeX: 1,
        sizeY: 1,
        correctX: [0],
        correctY: [3],
        src: puzzle1_2,
        srcStart: puzzle1_2_start,
        line: 1,
        isOnlyPosition: true,
    },
    {
        id: 2,
        sizeX: 3,
        sizeY: 1,
        correctX: [2],
        correctY: [3],
        src: puzzle2_2,
        srcStart: puzzle2_2_start,
        line: 1,
    },
    {
        id: 3,
        sizeX: 2,
        sizeY: 1,
        correctX: [6],
        correctY: [3],
        src: puzzle3_2,
        srcStart: puzzle3_2_start,
        line: 1,
        isOnlyPosition: true,
    },
    {
        id: 4,
        sizeX: 2,
        sizeY: 1,
        correctX: [4],
        correctY: [0],
        src: puzzle4_2,
        srcStart: puzzle4_2_start,
        puzzWidth: 34,
        puzzHeight: 34,
        puzzRealHeight: 41,
        puzzRealWidth: 47,
        line: 1,
        isOnlyPosition: true,
    },
    {
        id: 5,
        sizeX: 2,
        sizeY: 1,
        correctX: [4],
        correctY: [6],
        src: puzzle5_2,
        srcStart: puzzle5_2_start,
        puzzWidth: 36,
        puzzHeight: 34,
        puzzRealHeight: 40,
        puzzRealWidth: 48,
        line: 1,
        isOnlyPosition: true,
    },
    {
        id: 6,
        sizeX: 2,
        sizeY: 5,
        initialLeft: 0.615,
        initialTop: 0.86,
        correctX: [0],
        correctY: [1],
        src: puzzle6_2,
        srcStart: puzzle6_2_start,
        isDifficult: true,
        puzzWidth: 41,
        puzzHeight: 100,
        puzzRealHeight: 131,
        puzzRealWidth: 56,
        line: 2,
        isOnlyPosition: true,
        freePlace: {x: 0, y: 2}
    },
    {
        id: 7,
        sizeX: 2,
        sizeY: 2,
        correctX: [4],
        correctY: [2],
        src: puzzle7_2,
        srcStart: puzzle7_2_start,
        line: 2,
        freePlace: {x: 0, y: 1},
        availableCells: [{x: 4, y: 2}, {x: 3, y: 3}]
    },
    {
        id: 8,
        sizeX: 2,
        sizeY: 2,
        correctX: [4],
        correctY: [4],
        puzzWidth: 63,
        src: puzzle8_2,
        srcStart: puzzle8_2_start,
        line: 2,
        availableCells: [{x: 4, y: 3}, {x: 4, y: 4}]
    },
    {
        id: 9,
        sizeX: 2,
        sizeY: 1,
        correctX: [4],
        correctY: [1],
        src: puzzle9_2,
        srcStart: puzzle9_2_start,
        line: 2,
        puzzWidth: 48,
        puzzHeight: 34,
        puzzRealHeight: 40,
        puzzRealWidth: 63,
        prohibbitedCells: [{x: 4, y: 0}, {x: 4, y: 5}, {x: 4, y: 6}]
    },
];


export const initialPlaced = [
    {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 6, y: 0}, {x: 7, y: 0},
    {x: 2, y: 1}, {x: 3, y: 1}, {x: 6, y: 1}, {x: 7, y: 1},
    {x: 2, y: 2}, {x: 3, y: 2}, {x: 6, y: 2}, {x: 7, y: 2},
    {x: 2, y: 4}, {x: 3, y: 4}, {x: 6, y: 4}, {x: 7, y: 4},
    {x: 2, y: 5}, {x: 3, y: 5}, {x: 6, y: 5}, {x: 7, y: 5},
    {x: 0, y: 6}, {x: 1, y: 6}, {x: 2, y: 6}, {x: 3, y: 6}, {x: 6, y: 6}, {x: 7, y: 6},
]