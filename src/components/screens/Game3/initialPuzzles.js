import puzzle1_3 from '../../../assets/images/game3/puzzle3_1.png';
import puzzle2_3 from '../../../assets/images/game3/puzzle3_2.png';
import puzzle3_3 from '../../../assets/images/game3/puzzle3_3.png';
import puzzle4_3 from '../../../assets/images/game3/puzzle3_4.png';
import puzzle5_3 from '../../../assets/images/game3/puzzle3_5.png';
import puzzle6_3 from '../../../assets/images/game3/puzzle3_6.png';
import puzzle7_3 from '../../../assets/images/game3/puzzle3_7.png';
import puzzle8_3 from '../../../assets/images/game3/puzzle3_8.png';
import puzzle9_3 from '../../../assets/images/game3/puzzle3_9.png';
import puzzle10_3 from '../../../assets/images/game3/puzzle3_10.png';
import puzzle11_3 from '../../../assets/images/game3/puzzle3_11.png';
import puzzle12_3 from '../../../assets/images/game3/puzzle3_12.png';


import puzzle1_3_start from '../../../assets/images/game3/puzzle3_1_start.png';
import puzzle2_3_start from '../../../assets/images/game3/puzzle3_2_start.png';
import puzzle3_3_start from '../../../assets/images/game3/puzzle3_3_start.png';
import puzzle4_3_start from '../../../assets/images/game3/puzzle3_4_start.png';
import puzzle5_3_start from '../../../assets/images/game3/puzzle3_5_start.png';
import puzzle6_3_start from '../../../assets/images/game3/puzzle3_6_start.png';
import puzzle7_3_start from '../../../assets/images/game3/puzzle3_7_start.png';
import puzzle8_3_start from '../../../assets/images/game3/puzzle3_8_start.png';
import puzzle9_3_start from '../../../assets/images/game3/puzzle3_9_start.png';
import puzzle10_3_start from '../../../assets/images/game3/puzzle3_10_start.png';
import puzzle11_3_start from '../../../assets/images/game3/puzzle3_11_start.png';
import puzzle12_3_start from '../../../assets/images/game3/puzzle3_12_start.png';

export const initialPuzzles = [
    {
        id: 1,
        sizeX: 1,
        sizeY: 2,
        correctX: [1],
        correctY: [0],
        startLeft: 0,
        startTop: 0,
        src: puzzle1_3,
        srcStart: puzzle1_3_start,
        puzzRealHeight: 81,
        isOnlyPosition: true,
        nearCells: {
            x: [1, 0, 2],
            y: [0, 1]
        }
    },
    {
        id: 2,
        sizeX: 2,
        sizeY: 1,
        correctX: [0],
        correctY: [5],
        startLeft: 42,
        startTop: 0,
        src: puzzle2_3,
        srcStart: puzzle2_3_start,
        isOnlyPosition: true,
        nearCells: {
            x: [3, 0],
            y: [4, 5]
        }
    },
    {
        id: 3,
        sizeX: 2,
        sizeY: 2,
        correctX: undefined,
        correctY: undefined,
        startLeft: 113,
        startTop: 0,
        src: puzzle3_3,
        srcStart: puzzle3_3_start,
        freePlace: {x: 0, y: 1}
    },
    {
        id: 4,
        sizeX: 1,
        sizeY: 3,
        correctX: [7],
        correctY: [1],
        startLeft: 185,
        startTop: 30,
        src: puzzle4_3,
        srcStart: puzzle4_3_start,
        isOnlyPosition: true,
    },
    {
        id: 5,
        sizeX: 2,
        sizeY: 4,
        correctX: [5],
        correctY: [0],
        startLeft: 226,
        startTop: 0,
        src: puzzle5_3,
        srcStart: puzzle5_3_start,
        isOnlyPosition: true,
        freePlace: {x: 0, y: 0},
        nearCells: {
            x: [4, 5, 6],
            y: [0, 1]
        }
    },
    {
        id: 6,
        sizeX: 1,
        sizeY: 4,
        correctX: [4],
        correctY: [0],
        startLeft: 298,
        startTop: 0,
        src: puzzle6_3,
        srcStart: puzzle6_3_start,
        isOnlyPosition: true,
    },
    {
        id: 7,
        sizeX: 2,
        sizeY: 2,
        correctX: [2],
        correctY: [0],
        startLeft: 10,
        startTop: 57,
        src: puzzle7_3,
        srcStart: puzzle7_3_start,
        isOnlyPosition: true,
        nearCells: {
            x: [3, 2, 1],
            y: [0, 1]
        }
    },
    {
        id: 8,
        sizeX: 2,
        sizeY: 2,
        correctX: [0],
        correctY: [1],
        startLeft: 90,
        startTop: 57,
        src: puzzle8_3,
        srcStart: puzzle8_3_start,
        freePlace: {x: 1, y: 0},
        isOnlyPosition: true,
        nearCells: {
            x: [0, 1],
            y: [0, 1]
        }
    },
    {
        id: 9,
        sizeX: 3,
        sizeY: 2,
        correctX: undefined,
        correctY: undefined,
        startLeft: 0,
        startTop: 134,
        src: puzzle9_3,
        srcStart: puzzle9_3_start,
        freePlace: {x: 2, y: 0}
    },
    {
        id: 10,
        sizeX: 2,
        sizeY: 2,
        correctX: undefined,
        correctY: undefined,
        startLeft: 109,
        startTop: 134,
        src: puzzle10_3,
        srcStart: puzzle10_3_start
    },
    {
        id: 11,
        sizeX: 2,
        sizeY: 2,
        correctX: [6],
        correctY: [4],
        startLeft: 188,
        startTop: 134,
        src: puzzle11_3,
        srcStart: puzzle11_3_start,
        isOnlyPosition: true,
        nearCells: {
            x: [5, 6],
            y: [3, 4]
        }
    },
    {
        id: 12,
        sizeX: 2,
        sizeY: 2,
        correctX: undefined,
        correctY: undefined,
        startLeft: 267,
        startTop: 134,
        src: puzzle12_3,
        srcStart: puzzle12_3_start
    },
    
];

export const initialPlaced = [{x: 0, y: 0}, {x: 5, y: 0}, {x: 7, y: 0}];