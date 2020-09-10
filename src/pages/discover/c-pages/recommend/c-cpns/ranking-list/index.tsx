import React, { memo, useEffect} from 'react'
import {useSelector, useDispatch, shallowEqual, TypedUseSelectorHook} from 'react-redux'

import {RootState} from '@/store/reducer'
import {getRankingListAction} from '../../store/actionCreators'

import RankingListHeader from '@/components/hot-rec-header'

import {RankingListWrapper} from './style'


const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export default memo(function RankingList() {
    const {rankings:{0:upRanking, 2:newRanking, 3:originRanking}} = useTypedSelector(state => ({
        rankings: state.getIn(['recommend', 'rankings'])
    }), shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRankingListAction())
    }, [dispatch])
    console.log(upRanking)
    console.log(newRanking)
    console.log(originRanking)
    return (
        <RankingListWrapper>
            <RankingListHeader title='榜单'/>
            <div className='tops'></div>
        </RankingListWrapper>
    )
})
