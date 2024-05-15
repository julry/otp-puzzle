import { Intro } from '../components/screens/Intro';
import { Game1 } from '../components/screens/Game1';
import { PostGame1 } from '../components/screens/PostGame1';
import { Game2 } from '../components/screens/Game2';
import { PostGame2 } from '../components/screens/PostGame2';
import { Game3 } from '../components/screens/Game3';
import { PostGame3 } from '../components/screens/PostGame3';
import { Final } from '../components/screens/Final';

import casePic from '../assets/images/case.png';
import helpHand from '../assets/images/helpHand.png';
import photo from '../assets/images/photo.png';
import plane from '../assets/images/plane.png';
import caseStart from '../assets/images/caseStart.png';
import info from '../assets/images/info.svg';
import photoStart from '../assets/images/photoStart.svg';
import planeStart from '../assets/images/planeStart.svg';
import question from '../assets/images/question.svg';
import reload from '../assets/images/reload.svg';

import puzzle1_1 from '../assets/images/game1/puzzle1_1.png';
import puzzle2_1 from '../assets/images/game1/puzzle1_2.png';
import puzzle3_1 from '../assets/images/game1/puzzle1_3.png';
import puzzle4_1 from '../assets/images/game1/puzzle1_4.png';
import puzzle5_1 from '../assets/images/game1/puzzle1_5.png';
import puzzle6_1 from '../assets/images/game1/puzzle1_6.png';
import puzzle7_1 from '../assets/images/game1/puzzle1_7.png';
import puzzle8_1 from '../assets/images/game1/puzzle1_8.png';

import puzzle1_1_start from '../assets/images/game1/puzzle1_1_start.png';
import puzzle2_1_start from '../assets/images/game1/puzzle1_2_start.png';
import puzzle3_1_start from '../assets/images/game1/puzzle1_3_start.png';
import puzzle4_1_start from '../assets/images/game1/puzzle1_4_start.png';
import puzzle5_1_start from '../assets/images/game1/puzzle1_5_start.png';
import puzzle6_1_start from '../assets/images/game1/puzzle1_6_start.png';
import puzzle7_1_start from '../assets/images/game1/puzzle1_7_start.png';
import puzzle8_1_start from '../assets/images/game1/puzzle1_8_start.png';

import puzzle1_2 from '../assets/images/game2/puzzle2_1.png';
import puzzle2_2 from '../assets/images/game2/puzzle2_2.png';
import puzzle3_2 from '../assets/images/game2/puzzle2_3.png';
import puzzle4_2 from '../assets/images/game2/puzzle2_4.png';
import puzzle5_2 from '../assets/images/game2/puzzle2_5.png';
import puzzle6_2 from '../assets/images/game2/puzzle2_6.png';
import puzzle7_2 from '../assets/images/game2/puzzle2_7.png';
import puzzle8_2 from '../assets/images/game2/puzzle2_8.png';
import puzzle9_2 from '../assets/images/game2/puzzle2_9.png';

import puzzle1_2_start from '../assets/images/game2/puzzle2_1_start.png';
import puzzle2_2_start from '../assets/images/game2/puzzle2_2_start.png';
import puzzle3_2_start from '../assets/images/game2/puzzle2_3_start.png';
import puzzle4_2_start from '../assets/images/game2/puzzle2_4_start.png';
import puzzle5_2_start from '../assets/images/game2/puzzle2_5_start.png';
import puzzle6_2_start from '../assets/images/game2/puzzle2_6_start.png';
import puzzle7_2_start from '../assets/images/game2/puzzle2_7_start.png';
import puzzle8_2_start from '../assets/images/game2/puzzle2_8_start.png';
import puzzle9_2_start from '../assets/images/game2/puzzle2_9_start.png';

import puzzle1_3 from '../assets/images/game3/puzzle3_1.png';
import puzzle2_3 from '../assets/images/game3/puzzle3_2.png';
import puzzle3_3 from '../assets/images/game3/puzzle3_3.png';
import puzzle4_3 from '../assets/images/game3/puzzle3_4.png';
import puzzle5_3 from '../assets/images/game3/puzzle3_5.png';
import puzzle6_3 from '../assets/images/game3/puzzle3_6.png';
import puzzle7_3 from '../assets/images/game3/puzzle3_7.png';
import puzzle8_3 from '../assets/images/game3/puzzle3_8.png';
import puzzle9_3 from '../assets/images/game3/puzzle3_9.png';
import puzzle10_3 from '../assets/images/game3/puzzle3_10.png';
import puzzle11_3 from '../assets/images/game3/puzzle3_11.png';
import puzzle12_3 from '../assets/images/game3/puzzle3_12.png';

import puzzle1_3_start from '../assets/images/game3/puzzle3_1_start.png';
import puzzle2_3_start from '../assets/images/game3/puzzle3_2_start.png';
import puzzle3_3_start from '../assets/images/game3/puzzle3_3_start.png';
import puzzle4_3_start from '../assets/images/game3/puzzle3_4_start.png';
import puzzle5_3_start from '../assets/images/game3/puzzle3_5_start.png';
import puzzle6_3_start from '../assets/images/game3/puzzle3_6_start.png';
import puzzle7_3_start from '../assets/images/game3/puzzle3_7_start.png';
import puzzle8_3_start from '../assets/images/game3/puzzle3_8_start.png';
import puzzle9_3_start from '../assets/images/game3/puzzle3_9_start.png';
import puzzle10_3_start from '../assets/images/game3/puzzle3_10_start.png';
import puzzle11_3_start from '../assets/images/game3/puzzle3_11_start.png';
import puzzle12_3_start from '../assets/images/game3/puzzle3_12_start.png';

export const screens = [
    {
        id: 0,
        component: Intro
    },
    {
        id: 1,
        component: Game1
    },
    {
        id: 2,
        component: PostGame1
    },
    {
        id: 3,
        component: Game2
    },
    {
        id: 4,
        component: PostGame2
    },
    {
        id: 5,
        component: Game3
    },
    {
        id: 6,
        component: PostGame3
    },
    {
        id: 7,
        component: Final
    },
];


export const preloadImages = [
    casePic, caseStart, helpHand, info, photo, photoStart, plane, planeStart, question, reload,
    puzzle1_1, puzzle2_1, puzzle3_1, puzzle4_1, puzzle5_1, puzzle6_1, puzzle7_1, puzzle8_1,
    puzzle1_1_start, puzzle2_1_start, puzzle3_1_start, puzzle4_1_start, puzzle5_1_start, 
    puzzle6_1_start, puzzle7_1_start, puzzle8_1_start,
    puzzle1_2_start, puzzle2_2_start, puzzle3_2_start, puzzle4_2_start, puzzle5_2_start, 
    puzzle6_2_start, puzzle7_2_start, puzzle8_2_start, puzzle9_2_start,
    puzzle1_2, puzzle2_2, puzzle3_2, puzzle4_2, puzzle5_2, puzzle6_2, puzzle7_2, puzzle8_2, puzzle9_2,
    puzzle1_3, puzzle2_3, puzzle3_3, puzzle4_3, puzzle5_3, puzzle6_3, puzzle7_3, puzzle8_3, puzzle9_3,
    puzzle10_3, puzzle11_3, puzzle12_3,
    puzzle1_3_start, puzzle2_3_start, puzzle3_3_start, puzzle4_3_start, puzzle5_3_start, puzzle6_3_start, 
    puzzle7_3_start, puzzle8_3_start, puzzle9_3_start, puzzle10_3_start, puzzle11_3_start, puzzle12_3_start, 
]