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
import caseStart from '../assets/images/caseStart.svg';
import info from '../assets/images/info.svg';
import photoStart from '../assets/images/photoStart.svg';
import planeStart from '../assets/images/planeStart.svg';
import question from '../assets/images/question.svg';
import reload from '../assets/images/reload.svg';

import puzzle1_1 from '../assets/images/game1/puzzle1.svg';
import puzzle2_1 from '../assets/images/game1/puzzle2.svg';
import puzzle3_1 from '../assets/images/game1/puzzle3.svg';
import puzzle4_1 from '../assets/images/game1/puzzle4.svg';
import puzzle5_1 from '../assets/images/game1/puzzle5.svg';
import puzzle6_1 from '../assets/images/game1/puzzle6.svg';
import puzzle7_1 from '../assets/images/game1/puzzle7.svg';
import puzzle8_1 from '../assets/images/game1/puzzle8.svg';

import puzzle1_2 from '../assets/images/game2/puzzle1.svg';
import puzzle2_2 from '../assets/images/game2/puzzle2.svg';
import puzzle3_2 from '../assets/images/game2/puzzle3.svg';
import puzzle4_2 from '../assets/images/game2/puzzle4.svg';
import puzzle5_2 from '../assets/images/game2/puzzle5.svg';
import puzzle6_2 from '../assets/images/game2/puzzle6.svg';
import puzzle7_2 from '../assets/images/game2/puzzle7.svg';
import puzzle8_2 from '../assets/images/game2/puzzle8.svg';
import puzzle9_2 from '../assets/images/game2/puzzle9.svg';

import puzzle1_3 from '../assets/images/game3/puzzle1.svg';
import puzzle2_3 from '../assets/images/game3/puzzle2.svg';
import puzzle3_3 from '../assets/images/game3/puzzle3.svg';
import puzzle4_3 from '../assets/images/game3/puzzle4.svg';
import puzzle5_3 from '../assets/images/game3/puzzle5.svg';
import puzzle6_3 from '../assets/images/game3/puzzle6.svg';
import puzzle7_3 from '../assets/images/game3/puzzle7.svg';
import puzzle8_3 from '../assets/images/game3/puzzle8.svg';
import puzzle9_3 from '../assets/images/game3/puzzle9.svg';
import puzzle10_3 from '../assets/images/game3/puzzle10.svg';
import puzzle11_3 from '../assets/images/game3/puzzle11.svg';
import puzzle12_3 from '../assets/images/game3/puzzle12.svg';
import puzzle13_3 from '../assets/images/game3/puzzle13.svg';
import puzzle14_3 from '../assets/images/game3/puzzle14.svg';
import puzzle15_3 from '../assets/images/game3/puzzle15.svg';

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
    puzzle1_2, puzzle2_2, puzzle3_2, puzzle4_2, puzzle5_2, puzzle6_2, puzzle7_2, puzzle8_2, puzzle9_2,
    puzzle1_3, puzzle2_3, puzzle3_3, puzzle4_3, puzzle5_3, puzzle6_3, puzzle7_3, puzzle8_3, puzzle9_3,
    puzzle10_3, puzzle11_3, puzzle12_3, puzzle13_3, puzzle14_3, puzzle15_3
]