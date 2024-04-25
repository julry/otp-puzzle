import puzzle1_1 from '../../../assets/images/game1/puzzle1.svg';
import puzzle2_1 from '../../../assets/images/game1/puzzle2.svg';
import puzzle3_1 from '../../../assets/images/game1/puzzle3.svg';
import puzzle4_1 from '../../../assets/images/game1/puzzle4.svg';
import puzzle5_1 from '../../../assets/images/game1/puzzle5.svg';
import puzzle6_1 from '../../../assets/images/game1/puzzle6.svg';
import puzzle7_1 from '../../../assets/images/game1/puzzle7.svg';
import puzzle8_1 from '../../../assets/images/game1/puzzle8.svg';

export const initalPuzzles = [
    {
        id: 1,
        sizeX: 4,
        sizeY: 1,
        correctX: [0],
        correctY: [4],
        src: puzzle1_1,
        line: 1,
    },
    {
        id: 2,
        sizeX: 4,
        sizeY: 1,
        correctX: [4],
        correctY: [4],
        src: puzzle2_1,
        line: 1,
    },
    {
        id: 3,
        sizeX: 1,
        sizeY: 2,
        correctX: undefined,
        correctY: [2],
        src: puzzle3_1,
        line: 2,
    },
    {
        id: 4,
        sizeX: 2,
        sizeY: 2,
        correctX: undefined,
        correctY: [2],
        src: puzzle4_1,
        line: 2,
    },
    {
        id: 5,
        sizeX: 1,
        sizeY: 2,
        correctX: undefined,
        correctY: [2],
        src: puzzle5_1,
        line: 2,
    },
    {
        id: 6,
        sizeX: 2,
        sizeY: 2,
        correctX: [0],
        correctY: [0],
        src: puzzle6_1,
        line: 2,
    },
    {
        id: 7,
        sizeX: 4,
        sizeY: 2,
        correctX: undefined,
        correctY: [2],
        src: puzzle7_1,
        line: 3,
    },
    {
        id: 8,
        sizeX: 6,
        sizeY: 2,
        correctX: [2],
        correctY: [0],
        src: puzzle8_1,
        line: 3,
    },
];
