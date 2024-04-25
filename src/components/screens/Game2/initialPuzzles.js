import puzzle1_2 from '../../../assets/images/game2/puzzle1.svg';
import puzzle2_2 from '../../../assets/images/game2/puzzle2.svg';
import puzzle3_2 from '../../../assets/images/game2/puzzle3.svg';
import puzzle4_2 from '../../../assets/images/game2/puzzle4.svg';
import puzzle5_2 from '../../../assets/images/game2/puzzle5.svg';
import puzzle6_2 from '../../../assets/images/game2/puzzle6.svg';
import puzzle7_2 from '../../../assets/images/game2/puzzle7.svg';
import puzzle8_2 from '../../../assets/images/game2/puzzle8.svg';
import puzzle9_2 from '../../../assets/images/game2/puzzle9.svg';

export const initalPuzzles = [
    {
        id: 1,
        sizeX: 1,
        sizeY: 1,
        correctX: [0],
        correctY: [3],
        src: puzzle1_2,
        line: 1,
    },
    {
        id: 2,
        sizeX: 3,
        sizeY: 1,
        correctX: [2],
        correctY: [3],
        src: puzzle2_2,
        line: 1,
    },
    {
        id: 3,
        sizeX: 2,
        sizeY: 1,
        correctX: [6],
        correctY: [3],
        src: puzzle3_2,
        line: 1,
    },
    {
        id: 4,
        sizeX: 2,
        sizeY: 1,
        correctX: [4],
        correctY: [0],
        src: puzzle4_2,
        puzzWidth: 34,
        puzzHeight: 34,
        line: 1,
    },
    {
        id: 5,
        sizeX: 2,
        sizeY: 1,
        correctX: [4],
        correctY: [6],
        src: puzzle5_2,
        puzzWidth: 34,
        puzzHeight: 34,
        line: 1,
    },
    {
        id: 6,
        sizeX: 2,
        sizeY: 5,
        correctX: [0],
        correctY: [1],
        src: puzzle6_2,
        isDifficult: true,
        puzzWidth: 41,
        puzzHeight: 98,
        line: 2,
    },
    {
        id: 7,
        sizeX: 2,
        sizeY: 2,
        correctX: [4],
        correctY: [2],
        src: puzzle7_2,
        line: 2,
    },
    {
        id: 8,
        sizeX: 2,
        sizeY: 2,
        correctX: [4],
        correctY: [4],
        src: puzzle8_2,
        line: 2,
    },
    {
        id: 9,
        sizeX: 2,
        sizeY: 2,
        correctX: [4],
        correctY: [1],
        src: puzzle9_2,
        line: 2,
        puzzWidth: 48,
        puzzHeight: 34,
    },
];
