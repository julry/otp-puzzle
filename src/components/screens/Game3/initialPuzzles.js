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
import puzzle13_3 from '../../../assets/images/game3/puzzle3_13.png';
import puzzle14_3 from '../../../assets/images/game3/puzzle3_14.png';
import puzzle15_3 from '../../../assets/images/game3/puzzle3_15.png';
import puzzle16_3 from '../../../assets/images/game3/puzzle3_16.png';

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
import puzzle13_3_start from '../../../assets/images/game3/puzzle3_13_start.png';
import puzzle14_3_start from '../../../assets/images/game3/puzzle3_14_start.png';
import puzzle15_3_start from '../../../assets/images/game3/puzzle3_15_start.png';
import puzzle16_3_start from '../../../assets/images/game3/puzzle3_16_start.png';

export const initialPuzzles = [
    {
        id: 1,
        sizeX: 2,
        sizeY: 1,
        correctX: [0],
        correctY: [5],
        startLeft: 0,
        startTop: 0,
        src: puzzle1_3,
        srcStart: puzzle1_3_start,
        isOnlyPosition: true,
    },
    {
        id: 2,
        sizeX: 2,
        sizeY: 2,
        correctX: [2],
        correctY: [0],
        startLeft: 43,
        startTop: 10,
        src: puzzle2_3,
        srcStart: puzzle2_3_start,
        isOnlyPosition: true,
    },
    {
        id: 3,
        sizeX: 1,
        sizeY: 2,
        correctX: undefined,
        correctY: undefined,
        startLeft: 115,
        startTop: 0,
        src: puzzle3_3,
        srcStart: puzzle3_3_start
    },
    {
        id: 4,
        sizeX: 1,
        sizeY: 2,
        correctX: undefined,
        correctY: undefined,
        startLeft: 157,
        startTop: 0,
        src: puzzle4_3,
        srcStart: puzzle4_3_start
    },
    {
        id: 5,
        sizeX: 4,
        sizeY: 1,
        correctX: undefined,
        correctY: undefined,
        startLeft: 211,
        startTop: 0,
        src: puzzle5_3,
        srcStart: puzzle5_3_start
    },
    {
        id: 6,
        sizeX: 2,
        sizeY: 2,
        correctX: [0],
        correctY: [1],
        startLeft: 0,
        startTop: 51,
        src: puzzle6_3,
        srcStart: puzzle6_3_start,
        freePlace: {x: 1, y: 0},
        isOnlyPosition: true,
    },
    {
        id: 7,
        sizeX: 1,
        sizeY: 1,
        correctX: undefined,
        correctY: undefined,
        startLeft: 73,
        startTop: 81,
        src: puzzle7_3,
        srcStart: puzzle7_3_start
    },
    {
        id: 8,
        sizeX: 2,
        sizeY: 2,
        correctX: undefined,
        correctY: undefined,
        startLeft: 116,
        startTop: 83,
        src: puzzle8_3,
        srcStart: puzzle8_3_start
    },
    {
        id: 9,
        sizeX: 2,
        sizeY: 2,
        correctX: undefined,
        correctY: undefined,
        startLeft: 200,
        startTop: 51,
        src: puzzle9_3,
        srcStart: puzzle9_3_start
    },
    {
        id: 10,
        sizeX: 2,
        sizeY: 2,
        correctX: [6],
        correctY: [4],
        startLeft: 271,
        startTop: 51,
        src: puzzle10_3,
        srcStart: puzzle10_3_start,
        isOnlyPosition: true,
    },
    {
        id: 11,
        sizeX: 1,
        sizeY: 2,
        correctX: [4, 7],
        correctY: [0, 1],
        startLeft: 0,
        startTop: 127,
        src: puzzle11_3,
        srcStart: puzzle11_3_start,
        isOnlyPosition: true
    },
    {
        id: 12,
        sizeX: 3,
        sizeY: 2,
        correctX: undefined,
        correctY: undefined,
        startLeft: 43,
        startTop: 127,
        src: puzzle12_3,
        srcStart: puzzle12_3_start,
        freePlace: {x: 2, y: 0}
    },
    {
        id: 13,
        sizeX: 1,
        sizeY: 1,
        correctX: [1, 6],
        correctY: [0],
        startLeft: 146,
        startTop: 157,
        src: puzzle13_3,
        srcStart: puzzle13_3_start,
        isOnlyPosition: true,
    },
    {
        id: 14,
        sizeX: 1,
        sizeY: 2,
        correctX: [1, 6],
        correctY: [0],
        startLeft: 187,
        startTop: 127,
        src: puzzle14_3,
        srcStart: puzzle14_3_start,
        isOnlyPosition: true,
    },
    {
        id: 15,
        sizeX: 2,
        sizeY: 2,
        correctX: undefined,
        correctY: undefined,
        startLeft: 230,
        startTop: 127,
        src: puzzle15_3,
        srcStart: puzzle15_3_start,
        freePlace: {x: 0, y: 1}
    },
    {
        id: 16,
        sizeX: 1,
        sizeY: 2,
        correctX: [4, 7],
        correctY: [0, 1],
        startLeft: 301,
        startTop: 127,
        src: puzzle16_3,
        srcStart: puzzle16_3_start,
        isOnlyPosition: true
    },
];

export const initialPlaced = [{x: 0, y: 0}, {x: 5, y: 0}, {x: 7, y: 0}];