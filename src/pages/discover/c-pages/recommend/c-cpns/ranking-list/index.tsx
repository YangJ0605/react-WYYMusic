import React, { memo, useEffect} from 'react'
import {useSelector, useDispatch, shallowEqual, TypedUseSelectorHook} from 'react-redux'

import {RootState} from '@/store/reducer'
import {getRankingListAction} from '../../store/actionCreators'

import RankingListHeader from '@/components/hot-rec-header'
import RankingItem from '@/components/rangking-item'
import {RankingListWrapper} from './style'


const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export default memo(function RankingList() {
    const {rankings:{upRanking, newRanking, originRanking}} = useTypedSelector(state => ({
        rankings: state.getIn(['recommend', 'rankings'])
    }), shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRankingListAction())
    }, [dispatch])
    return (
        <RankingListWrapper>
            <RankingListHeader title='榜单'/>
            <div className='tops'>
                <RankingItem info={upRanking}/>
                <RankingItem info={newRanking}/>
                <RankingItem info={originRanking}/>
            </div>
        </RankingListWrapper>
    )
})
