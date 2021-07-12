import RankedSVG from '../assets/ranked.svg'
import DuelSVG from '../assets/duel.svg'
import FunSVG from '../assets/fun.svg'
import TrainingSVG from '../assets/training.svg'

import { localizedStrings } from "../global/localizedStrings"

export const categories = [
    {id: '1', title: localizedStrings.ranked, icon: RankedSVG},
    {id: '2', title: localizedStrings.duelX1, icon: DuelSVG},
    {id: '3', title: localizedStrings.fun, icon: FunSVG},
    {id: '4', title: localizedStrings.training, icon: TrainingSVG},
]