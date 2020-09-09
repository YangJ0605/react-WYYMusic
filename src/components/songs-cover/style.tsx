import styled from 'styled-components'

type IProps = {
    right: string | number
}

export const SongsCoverWrapper = styled.div<IProps>`
    width: 140px;
    margin: 20px ${props => (props.right || 0)} 20px 0;
    &:hover .cover-top{
        transform: scale(1.2);
    }
    .cover-top {
        position: relative;
        > img {
            height: 140px;
            width: 140px;
        }
        .cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-position: 0 0;
            cursor: pointer;
            transition: all 1s;
            .info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 10px;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background-position: 0 -537px;
                color: #ccc;
                height: 27px;
                background-color: rgba(0,0,0,.4);
                .erji {
                    margin-right: 5px;
                    display: inline-block;
                    width: 14px;
                    height: 11px;
                    background-position: 0 -24px;
                }

                .play {
                  display: inline-block;
                  width: 16px;
                  height: 17px;
                  background-position: 0 0;
                }
            }
        }
    }


    .cover-bottom {
    font-size: 14px;
    color: #000;
    margin-top: 5px;
  }

  .cover-source {
    color: #666;
  }
`