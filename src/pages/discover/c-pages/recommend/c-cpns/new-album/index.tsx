import React, { memo, useEffect} from 'react'
import {useDispatch, useSelector, shallowEqual, TypedUseSelectorHook} from 'react-redux'


import { getNewAlbumsAction } from '../../store/actionCreators'

import NewAlbumHeader from '@/components/hot-rec-header'
import AblumCover from '@/components/ablum-cover'

import { RootState } from '@/store/reducer'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export default memo(function NewAlbum() {
    const dispatch = useDispatch()
    const {newAlbums} = useTypedSelector(state => ({
        newAlbums: state.getIn(['recommend', 'newAlbums'])
    }), shallowEqual)
    useEffect(()=> {
        dispatch(getNewAlbumsAction(8))
    }, [dispatch])
    console.log(newAlbums)
    return (
        <div>
            <NewAlbumHeader title='新碟上架'/>
            <AblumCover/>
        </div>
    )
})
